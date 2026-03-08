import React, { useState } from 'react';
import { View, Pressable, Text, type ViewProps } from 'react-native';
import { cn } from '../../lib/utils';

export interface TabsProps extends ViewProps {
  defaultValue?: string;
  children: React.ReactNode;
}

const TabsContext = React.createContext<{
  value: string;
  setValue: (value: string) => void;
}>({ value: '', setValue: () => {} });

const Tabs: React.FC<TabsProps> = ({ defaultValue = '', children, className, ...props }) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <View className={cn("w-full", className)} {...props}>
        {children}
      </View>
    </TabsContext.Provider>
  );
};

const TabsList = React.forwardRef<React.ElementRef<typeof View>, ViewProps>(
  ({ className, ...props }, ref) => (
    <View
      ref={ref}
      className={cn("flex-row bg-muted p-1 rounded-md", className)}
      {...props}
    />
  )
);
TabsList.displayName = 'TabsList';

interface TabsTriggerProps extends Omit<ViewProps, 'children'> {
  value: string;
  children: string;
}

const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children, className, ...props }) => {
  const { value: selectedValue, setValue } = React.useContext(TabsContext);
  const isSelected = value === selectedValue;

  return (
    <Pressable
      className={cn(
        "flex-1 px-3 py-1.5 rounded-sm",
        isSelected && "bg-background shadow-sm",
        className
      )}
      onPress={() => setValue(value)}
      {...props}
    >
      <Text className={cn("text-sm font-medium text-center", isSelected ? "text-foreground" : "text-muted-foreground")}>
        {children}
      </Text>
    </Pressable>
  );
};
TabsTrigger.displayName = 'TabsTrigger';

interface TabsContentProps extends ViewProps {
  value: string;
}

const TabsContent: React.FC<TabsContentProps> = ({ value, children, className, ...props }) => {
  const { value: selectedValue } = React.useContext(TabsContext);

  if (value !== selectedValue) return null;

  return (
    <View className={cn("mt-2", className)} {...props}>
      {children}
    </View>
  );
};
TabsContent.displayName = 'TabsContent';

export { Tabs, TabsList, TabsTrigger, TabsContent };