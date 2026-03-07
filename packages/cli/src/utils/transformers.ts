import type { Config } from './get-config';

/**
 * Transform imports in component code to match user's config
 */
export function transformImports(code: string, config: Config): string {
  let transformedCode = code;

  // Replace @/components with user's alias
  if (config.aliases.components !== '@/components') {
    transformedCode = transformedCode.replace(
      /@\/components/g,
      config.aliases.components
    );
  }

  // Replace @/lib with user's alias
  if (config.aliases.utils !== '@/lib') {
    transformedCode = transformedCode.replace(
      /@\/lib/g,
      config.aliases.utils
    );
  }

  return transformedCode;
}

/**
 * Transform component code for different style variants
 */
export function transformStyle(code: string, style: string): string {
  if (style === 'default') {
    return code;
  }

  // Add support for different style variants in the future
  // e.g., 'new-york' style with different class names

  return code;
}
