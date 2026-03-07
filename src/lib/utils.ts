import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes with proper precedence
 * @param inputs - Class values to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Creates a variant handler for components
 * Useful for defining component variants similar to class-variance-authority
 */
export function cva(base: string, config?: { variants?: Record<string, Record<string, string>> }) {
  return (props?: Record<string, string>) => {
    if (!config?.variants || !props) return base;
    
    const variantClasses = Object.keys(props)
      .map((key) => {
        const variant = config.variants?.[key];
        return variant?.[props[key]] || "";
      })
      .filter(Boolean)
      .join(" ");
    
    return cn(base, variantClasses);
  };
}
