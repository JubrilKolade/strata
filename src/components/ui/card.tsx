import React from 'react';
import { View, Text, type ViewProps } from 'react-native';
import { cn } from '../../lib/utils';

const Card = React.forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn("rounded-lg border border-border bg-card p-4 shadow-sm", className)}
      {...props}
    />
  )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn("flex flex-col gap-1.5 pb-3", className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

const CardTitle: React.FC<{ children?: React.ReactNode; className?: string }> = ({ className, children }) => (
  <Text className={cn("text-xl font-semibold leading-none", className)}>{children}</Text>
);
CardTitle.displayName = 'CardTitle';

const CardDescription: React.FC<{ children?: React.ReactNode; className?: string }> = ({ className, children }) => (
  <Text className={cn("text-sm text-muted-foreground", className)}>{children}</Text>
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn("py-0", className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn("flex flex-row items-center pt-3", className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };