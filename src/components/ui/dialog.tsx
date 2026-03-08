import React from 'react';
import { Modal, View, Pressable, Text, type ViewProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
  return (
    <Modal visible={open} transparent animationType="fade">
      <Pressable
        className="flex-1 bg-black/50 items-center justify-center p-4"
        onPress={() => onOpenChange(false)}
      >
        <Pressable onPress={(e) => e.stopPropagation()}>
          {children}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const DialogContent = React.forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn("bg-background rounded-lg p-6 w-full max-w-lg shadow-lg", className)}
      {...props}
    />
  )
);
DialogContent.displayName = 'DialogContent';

const DialogHeader = React.forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn("mb-4", className)} {...props} />
  )
);
DialogHeader.displayName = 'DialogHeader';

const DialogTitle: React.FC<{ children?: React.ReactNode; className?: string }> = ({ className, children }) => (
  <Text className={cn("text-xl font-semibold", className)}>{children}</Text>
);
DialogTitle.displayName = 'DialogTitle';

const DialogDescription: React.FC<{ children?: React.ReactNode; className?: string }> = ({ className, children }) => (
  <Text className={cn("text-sm text-muted-foreground", className)}>{children}</Text>
);
DialogDescription.displayName = 'DialogDescription';

const DialogFooter = React.forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn("flex-row justify-end gap-2 mt-4", className)} {...props} />
  )
);
DialogFooter.displayName = 'DialogFooter';

export { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter };