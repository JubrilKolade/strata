import React from 'react';
import { Text as RNText, type TextProps as RNTextProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface TextProps extends RNTextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'code' | 'lead' | 'large' | 'small' | 'muted';
}

const Text = React.forwardRef<React.ElementRef<typeof RNText>, TextProps>(
  ({ className, variant = 'p', ...props }, ref) => {
    const variants = {
      h1: "text-4xl font-extrabold",
      h2: "text-3xl font-semibold",
      h3: "text-2xl font-semibold",
      h4: "text-xl font-semibold",
      p: "text-base leading-7",
      blockquote: "border-l-2 border-border pl-4 italic",
      code: "rounded bg-muted px-1.5 py-0.5 font-mono text-sm",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium",
      muted: "text-sm text-muted-foreground",
    };
    
    return <RNText ref={ref} className={cn(variants[variant], className)} {...props} />;
  }
);

Text.displayName = 'Text';

export { Text };