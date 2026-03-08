import React, { createContext, useContext, useState } from 'react';
import { View, Text, Pressable, type ViewProps } from 'react-native';
import { cn } from '../../lib/utils';

interface Toast {
  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
}

interface ToastContextType {
  toasts: Toast[];
  toast: (props: Omit<Toast, 'id'>) => void;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = (props: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36);
    setToasts(prev => [...prev, { ...props, id }]);
    
    setTimeout(() => {
      dismiss(id);
    }, 3000);
  };

  const dismiss = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
      <View className="absolute bottom-0 left-0 right-0 p-4 gap-2">
        {toasts.map(t => (
          <View
            key={t.id}
            className={cn(
              "rounded-lg border p-4 shadow-lg",
              t.variant === 'destructive' ? "bg-destructive border-destructive" : "bg-background border-border"
            )}
          >
            {t.title && (
              <Text className={cn("font-semibold mb-1", t.variant === 'destructive' && "text-destructive-foreground")}>
                {t.title}
              </Text>
            )}
            {t.description && (
              <Text className={cn("text-sm", t.variant === 'destructive' ? "text-destructive-foreground" : "text-muted-foreground")}>
                {t.description}
              </Text>
            )}
          </View>
        ))}
      </View>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
};