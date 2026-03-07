import React from 'react';
import { View, Image, Text, type ViewProps, type ImageProps } from 'react-native';
import { cn } from '../../lib/utils';

const Avatar = React.forwardRef<React.ElementRef<typeof View>, ViewProps & { size?: 'sm' | 'md' | 'lg' | 'xl' }>(
  ({ className, size = 'md', ...props }, ref) => {
    const sizes = {
      sm: "h-8 w-8",
      md: "h-10 w-10",
      lg: "h-12 w-12",
      xl: "h-16 w-16",
    };
    
    return (
      <View
        ref={ref}
        className={cn("relative flex items-center justify-center overflow-hidden rounded-full bg-muted", sizes[size], className)}
        {...props}
      />
    );
  }
);
Avatar.displayName = 'Avatar';

const AvatarImage = React.forwardRef<React.ElementRef<typeof Image>, ImageProps>(
  ({ className, ...props }, ref) => (
    <Image ref={ref} className={cn("h-full w-full", className)} {...props} />
  )
);
AvatarImage.displayName = 'AvatarImage';

const AvatarFallback = React.forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, children, ...props }, ref) => (
    <View ref={ref} className={cn("flex items-center justify-center", className)} {...props}>
      {typeof children === 'string' ? (
        <Text className="text-sm font-medium text-muted-foreground">{children}</Text>
      ) : children}
    </View>
  )
);
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarImage, AvatarFallback };