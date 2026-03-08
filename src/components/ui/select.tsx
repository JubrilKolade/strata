import React, { useState } from 'react';
import { Pressable, Text, View, Modal, FlatList, type ViewProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends ViewProps {
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onValueChange,
  placeholder = 'Select...',
  className,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(opt => opt.value === value);

  return (
    <>
      <Pressable
        className={cn(
          "h-12 flex-row items-center justify-between rounded-md border border-input bg-background px-4",
          className
        )}
        onPress={() => setIsOpen(true)}
        {...props}
      >
        <Text className={cn("text-base", !selectedOption && "text-muted-foreground")}>
          {selectedOption?.label || placeholder}
        </Text>
        <Text className="text-muted-foreground">▼</Text>
      </Pressable>

      <Modal visible={isOpen} transparent animationType="fade">
        <Pressable
          className="flex-1 bg-black/50 items-center justify-center"
          onPress={() => setIsOpen(false)}
        >
          <View className="bg-background rounded-lg w-4/5 max-h-96">
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <Pressable
                  className={cn(
                    "p-4 border-b border-border",
                    item.value === value && "bg-accent"
                  )}
                  onPress={() => {
                    onValueChange?.(item.value);
                    setIsOpen(false);
                  }}
                >
                  <Text className="text-base">{item.label}</Text>
                </Pressable>
              )}
            />
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

Select.displayName = 'Select';

export { Select };