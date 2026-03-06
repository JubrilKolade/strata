import * as fs from 'fs-extra';
import * as path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import prompts from 'prompts';
import fetch from 'node-fetch';
import { execa } from 'execa';
import { DEFAULT_REGISTRY_URL, DEFAULT_COMPONENTS_URL } from '../utils/constants';

export async function add(components: string[], options: any) {
  const cwd = process.cwd();

  // Load config to check for custom registry
  let registryUrl = DEFAULT_REGISTRY_URL;
  const componentsJsonPath = path.join(cwd, 'components.json');
  if (fs.existsSync(componentsJsonPath)) {
    try {
      const config = fs.readJsonSync(componentsJsonPath);
      if (config.registry) {
        registryUrl = config.registry.endsWith('/') ? config.registry.slice(0, -1) : config.registry;
      }
    } catch (e) {
      // Ignore config errors and use default
    }
  }

  const componentsUrl = registryUrl.replace('/registry', '/src/components/ui');

  const spinner = ora('Fetching registry...').start();

  try {
    const registryResponse = await fetch(registryUrl + '/components.json');
    const registryData = await registryResponse.json();
    const registry = registryData.components;

    spinner.stop();

    if (!components.length && !options.all) {
      const response = await prompts({
        type: 'multiselect',
        name: 'components',
        message: 'Select components to add:',
        choices: Object.keys(registry).map(name => ({
          title: name,
          value: name,
        })),
      });

      components = response.components;
    }

    if (options.all) {
      components = Object.keys(registry);
    }

    if (!components?.length) {
      console.log(chalk.yellow('No components selected.'));
      return;
    }

    const dependencies = new Set<string>();
    const devDependencies = new Set<string>();

    for (const component of components) {
      const componentData = registry[component];
      if (!componentData) {
        console.log(chalk.red(`\nComponent "${component}" not found in registry.`));
        continue;
      }

      spinner.start(`Adding ${component}...`);

      for (const file of componentData.files) {
        const fileName = path.basename(file.path);
        const url = `${componentsUrl}/${fileName}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch ${fileName} from ${url}`);
        }
        const code = await response.text();

        const targetPath = path.join(cwd, 'components/ui', fileName);
        fs.ensureDirSync(path.dirname(targetPath));
        fs.writeFileSync(targetPath, code);
      }

      componentData.dependencies?.forEach((d: string) => dependencies.add(d));
      componentData.devDependencies?.forEach((d: string) => devDependencies.add(d));

      spinner.text = `Added ${component}`;
    }

    spinner.succeed('Components added!');

    if (dependencies.size > 0 || devDependencies.size > 0) {
      const installSpinner = ora('Installing dependencies...').start();

      if (dependencies.size > 0) {
        await execa('npm', ['install', ...Array.from(dependencies)], { cwd });
      }

      if (devDependencies.size > 0) {
        await execa('npm', ['install', '--save-dev', ...Array.from(devDependencies)], { cwd });
      }

      installSpinner.succeed('Dependencies installed!');
    }

    console.log(chalk.cyan('\nSuccess! You can now import your components.'));
  } catch (error) {
    spinner.fail('Failed to add components');
    console.error(error);
    process.exit(1);
  }
}