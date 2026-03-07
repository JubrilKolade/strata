import React from 'react';
import { Pressable, Text, ActivityIndicator, type PressableProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface ButtonProps extends PressableProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children?: React.ReactNode;
  textClassName?: string;
  loading?: boolean;
}

const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({ 
    className, 
    variant = 'default', 
    size = 'default', 
    children,
    textClassName,
    loading = false,
    disabled,
    ...props 
  }, ref) => {
    const variantStyles = {
      default: "bg-primary active:opacity-80",
      destructive: "bg-destructive active:opacity-80",
      outline: "border-2 border-border bg-transparent active:bg-accent",
      secondary: "bg-secondary active:opacity-80",
      ghost: "active:bg-accent",
      link: "active:opacity-60",
    };
    
    const sizeStyles = {
      default: "h-12 px-6 py-3",
      sm: "h-10 px-4 py-2",
      lg: "h-14 px-8 py-4",
      icon: "h-12 w-12",
    };
    
    const textVariants = {
      default: "text-primary-foreground font-semibold",
      destructive: "text-destructive-foreground font-semibold",
      outline: "text-foreground font-semibold",
      secondary: "text-secondary-foreground font-semibold",
      ghost: "text-foreground font-semibold",
      link: "text-primary underline",
    };
    
    const textSizes = {
      default: "text-base",
      sm: "text-sm",
      lg: "text-lg",
      icon: "text-base",
    };
    
    return (
      <Pressable
        ref={ref}
        className={cn(
          "flex-row items-center justify-center rounded-md",
          variantStyles[variant],
          sizeStyles[size],
          (disabled || loading) && "opacity-50",
          className
        )}
        disabled={disabled || loading}
        accessibilityRole="button"
        {...props}
      >
        {loading ? (
          <ActivityIndicator color={variant === 'outline' ? '#000' : '#fff'} />
        ) : typeof children === 'string' ? (
          <Text className={cn(textVariants[variant], textSizes[size], textClassName)}>
            {children}
          </Text>
        ) : children}
      </Pressable>
    );
  }
);

Button.displayName = 'Button';

export { Button };