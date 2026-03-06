// #!/usr/bin/env node

// import { Command } from 'commander';
// import chalk from 'chalk';
// import { init } from './commands/init';
// import { add } from './commands/add';
// import { diff } from './commands/diff';

// const program = new Command();

// program
//   .name('rnui')
//   .description('Add beautiful components to your React Native app')
//   .version('1.0.0');

// program
//   .command('init')
//   .description('Initialize your project with React Native UI')
//   .option('-y, --yes', 'Skip confirmation prompts', false)
//   .option('-f, --force', 'Overwrite existing files', false)
//   .action(init);

// program
//   .command('add')
//   .description('Add components to your project')
//   .argument('[components...]', 'Components to add (e.g., button card)')
//   .option('-a, --all', 'Add all available components', false)
//   .option('-o, --overwrite', 'Overwrite existing components', false)
//   .option('-p, --path <path>', 'Custom path for components', './components/ui')
//   .action(add);

// program
//   .command('diff')
//   .description('Check for component updates')
//   .argument('[component]', 'Component to check (optional)')
//   .action(diff);

// program.parse();

// // Handle unknown commands
// program.on('command:*', () => {
//   console.error(chalk.red(`Invalid command: ${program.args.join(' ')}`));
//   console.log(chalk.yellow('Run "rnui --help" to see available commands.'));
//   process.exit(1);
// });


#!/usr/bin / env node

import { Command } from 'commander';
import chalk from 'chalk';
import { init } from './commands/init';
import { add } from './commands/add';
import { diff } from './commands/diff';

const program = new Command();

program
  .name('strata')
  .description('Add React Native UI components to your project')
  .version('1.0.0');

program
  .command('init')
  .description('Initialize React Native UI')
  .option('-y, --yes', 'Skip prompts')
  .option('-f, --force', 'Overwrite files')
  .action(init);

program
  .command('add')
  .description('Add components')
  .argument('[components...]', 'Components to add')
  .option('-a, --all', 'Add all components')
  .option('-o, --overwrite', 'Overwrite existing')
  .action(add);

program
  .command('diff')
  .description('Check for updates')
  .argument('[component]', 'Component to check')
  .action(diff);

program.parse();