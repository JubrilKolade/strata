import React, { useState } from 'react';
import { Pressable, View, type PressableProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface CheckboxProps extends Omit<PressableProps, 'onPress'> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Checkbox = React.forwardRef<React.ElementRef<typeof Pressable>, CheckboxProps>(
  ({ className, checked: controlledChecked, onCheckedChange, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = useState(false);
    const checked = controlledChecked !== undefined ? controlledChecked : internalChecked;

    const handlePress = () => {
      const newValue = !checked;
      if (controlledChecked === undefined) {
        setInternalChecked(newValue);
      }
      onCheckedChange?.(newValue);
    };

    return (
      <Pressable
        ref={ref}
        className={cn(
          "h-5 w-5 rounded border-2 border-primary items-center justify-center",
          checked && "bg-primary",
          className
        )}
        onPress={handlePress}
        accessibilityRole="checkbox"
        accessibilityState={{ checked }}
        {...props}
      >
        {checked && (
          <View className="h-3 w-3 bg-primary-foreground rounded-sm" />
        )}
      </Pressable>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };