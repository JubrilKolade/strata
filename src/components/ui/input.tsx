import React from 'react';
import { TextInput, type TextInputProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface InputProps extends TextInputProps {
  error?: boolean;
}

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, error, placeholderTextColor, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        className={cn(
          "h-12 rounded-md border border-input bg-background px-4 py-3 text-base text-foreground",
          error && "border-destructive",
          className
        )}
        placeholderTextColor={placeholderTextColor || '#9ca3af'}
        accessibilityRole="text"
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };