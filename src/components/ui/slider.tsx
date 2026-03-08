import React, { useState } from 'react';
import { View, type ViewProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface SliderProps extends ViewProps {
  value?: number;
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

const Slider = React.forwardRef<React.ElementRef<typeof View>, SliderProps>(
  ({ className, value = 50, min = 0, max = 100, ...props }, ref) => {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
      <View ref={ref} className={cn("h-2 w-full relative", className)} {...props}>
        <View className="absolute h-full w-full rounded-full bg-secondary" />
        <View
          className="absolute h-full rounded-full bg-primary"
          style={{ width: `${percentage}%` }}
        />
        <View
          className="absolute h-5 w-5 rounded-full border-2 border-primary bg-background shadow-sm -translate-y-1.5"
          style={{ left: `${percentage}%`, marginLeft: -10 }}
        />
      </View>
    );
  }
);

Slider.displayName = 'Slider';

export { Slider };