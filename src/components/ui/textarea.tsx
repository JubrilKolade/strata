import React from 'react';
import { TextInput, type TextInputProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface TextareaProps extends TextInputProps {
  error?: boolean;
}

const Textarea = React.forwardRef<React.ElementRef<typeof TextInput>, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        className={cn(
          "min-h-24 rounded-md border border-input bg-background px-4 py-3 text-base text-foreground",
          error && "border-destructive",
          className
        )}
        multiline
        textAlignVertical="top"
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export { Textarea };