import React from 'react';
import { View, Text, type ViewProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface BadgeProps extends ViewProps {
  variant?: 'default' | 'secondary' | 'destructive' | 'outline';
  children?: React.ReactNode;
  textClassName?: string;
}

const Badge = React.forwardRef<React.ElementRef<typeof View>, BadgeProps>(
  ({ className, variant = 'default', children, textClassName, ...props }, ref) => {
    const variants = {
      default: "border-transparent bg-primary",
      secondary: "border-transparent bg-secondary",
      destructive: "border-transparent bg-destructive",
      outline: "border-border bg-transparent",
    };
    
    const textVariants = {
      default: "text-xs font-semibold text-primary-foreground",
      secondary: "text-xs font-semibold text-secondary-foreground",
      destructive: "text-xs font-semibold text-destructive-foreground",
      outline: "text-xs font-semibold text-foreground",
    };
    
    return (
      <View
        ref={ref}
        className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 border", variants[variant], className)}
        {...props}
      >
        {typeof children === 'string' ? (
          <Text className={cn(textVariants[variant], textClassName)}>{children}</Text>
        ) : children}
      </View>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };