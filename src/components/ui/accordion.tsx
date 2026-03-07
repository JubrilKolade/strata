import React, { useState } from 'react';
import { View, Pressable, Text, type ViewProps } from 'react-native';
import { cn } from '../../lib/utils';

interface AccordionItemProps extends ViewProps {
  value: string;
  trigger: string;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ value, trigger, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View className={cn("border-b border-border", className)}>
      <Pressable
        className="flex-row items-center justify-between py-4"
        onPress={() => setIsOpen(!isOpen)}
      >
        <Text className="text-base font-medium">{trigger}</Text>
        <Text className="text-muted-foreground">{isOpen ? '−' : '+'}</Text>
      </Pressable>
      {isOpen && (
        <View className="pb-4">
          {children}
        </View>
      )}
    </View>
  );
};

const Accordion: React.FC<ViewProps> = ({ children, className, ...props }) => (
  <View className={cn("w-full", className)} {...props}>
    {children}
  </View>
);

Accordion.displayName = 'Accordion';
AccordionItem.displayName = 'AccordionItem';

export { Accordion, AccordionItem };