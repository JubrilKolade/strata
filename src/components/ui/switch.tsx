import React, { useState } from 'react';
import { Pressable, View, type PressableProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface SwitchProps extends Omit<PressableProps, 'onPress'> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<React.ElementRef<typeof Pressable>, SwitchProps>(
  ({ className, checked: controlledChecked, onCheckedChange, disabled, ...props }, ref) => {
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
          "h-6 w-11 rounded-full p-0.5",
          checked ? "bg-primary" : "bg-input",
          disabled && "opacity-50",
          className
        )}
        onPress={handlePress}
        disabled={disabled}
        accessibilityRole="switch"
        accessibilityState={{ checked }}
        {...props}
      >
        <View
          className={cn(
            "h-5 w-5 rounded-full bg-background shadow-sm",
            checked && "translate-x-5"
          )}
        />
      </Pressable>
    );
  }
);

Switch.displayName = 'Switch';

export { Switch };