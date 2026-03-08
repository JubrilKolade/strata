import React, { useEffect } from 'react';
import { type ViewProps } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming
} from 'react-native-reanimated';
import { cn } from '../../lib/utils';

const Skeleton = React.forwardRef<React.ElementRef<typeof Animated.View>, ViewProps>(
  ({ className, ...props }, ref) => {
    const opacity = useSharedValue(0.5);

    useEffect(() => {
      opacity.value = withRepeat(
        withSequence(
          withTiming(1, { duration: 1000 }),
          withTiming(0.5, { duration: 1000 })
        ),
        -1,
        true
      );
    }, []);

    const animatedStyle = useAnimatedStyle(() => ({
      opacity: opacity.value,
    }));

    return (
      <Animated.View
        ref={ref}
        className={cn("bg-muted rounded-md", className)}
        style={[animatedStyle]}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';

export { Skeleton };