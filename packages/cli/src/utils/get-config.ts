import * as fs from 'fs-extra';
import * as path from 'path';
import { z } from 'zod';

const configSchema = z.object({
  $schema: z.string().optional(),
  style: z.string(),
  tailwind: z.object({
    config: z.string(),
    css: z.string(),
    baseColor: z.string(),
    cssVariables: z.boolean(),
  }),
  aliases: z.object({
    components: z.string(),
    utils: z.string(),
  }),
});

export type Config = z.infer<typeof configSchema>;

export async function getConfig(cwd: string): Promise<Config | null> {
  const configPath = path.join(cwd, 'components.json');

  if (!fs.existsSync(configPath)) {
    return null;
  }

  try {
    const configJson = await fs.readJson(configPath);
    return configSchema.parse(configJson);
  } catch (error) {
    throw new Error(
      `Invalid components.json: ${error instanceof Error ? error.message : 'Unknown error'}`
    );
  }
}

export function resolveImport(importPath: string, config: Config): string {
  if (importPath.startsWith('@/components')) {
    return importPath.replace('@/components', config.aliases.components);
  }
  
  if (importPath.startsWith('@/lib')) {
    return importPath.replace('@/lib', config.aliases.utils);
  }

  return importPath;
}
