import React from 'react';
import { View, Text, type ViewProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface AlertProps extends ViewProps {
  variant?: 'default' | 'destructive';
}

const Alert = React.forwardRef<React.ElementRef<typeof View>, AlertProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <View
      ref={ref}
      className={cn(
        "rounded-lg border p-4",
        variant === 'default' && "border-border bg-background",
        variant === 'destructive' && "border-destructive/50 bg-destructive/10",
        className
      )}
      {...props}
    />
  )
);
Alert.displayName = 'Alert';

const AlertTitle: React.FC<{ children?: React.ReactNode; className?: string }> = ({ className, children }) => (
  <Text className={cn("font-semibold text-base mb-1", className)}>{children}</Text>
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription: React.FC<{ children?: React.ReactNode; className?: string }> = ({ className, children }) => (
  <Text className={cn("text-sm text-muted-foreground", className)}>{children}</Text>
);
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };