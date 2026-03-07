import fetch from 'node-fetch';

const REGISTRY_URL = 'https://raw.githubusercontent.com/yourusername/strata-ui/main/registry';

export interface RegistryComponent {
  name: string;
  description: string;
  files: Array<{
    path: string;
    type: string;
  }>;
  dependencies: string[];
  registryDependencies: string[];
}

export interface Registry {
  [key: string]: RegistryComponent;
}

let cachedRegistry: Registry | null = null;

export async function getRegistryComponents(): Promise<Registry> {
  if (cachedRegistry) {
    return cachedRegistry;
  }

  try {
    const response = await fetch(\`\${REGISTRY_URL}/components.json\`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch component registry');
    }

    const data = await response.json();
    cachedRegistry = (data as any).components || {};
    
    return cachedRegistry;
  } catch (error) {
    throw new Error(
      \`Failed to fetch registry: \${error instanceof Error ? error.message : 'Unknown error'}\`
    );
  }
}

export function clearRegistryCache() {
  cachedRegistry = null;
}
