import React,{ useState } from "react";

type NotificationContextType = {
    messages: string | null;
    showNotification: (message: string) => void;
    hideNotification: () => void;
};

export const NotificationContext = React.createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [messages, setMessages] = useState<string | null>(null);

    const hideNotification = () => {
        setMessages(null);
    }

    const showNotification = (message: string) => {
        setMessages(message);
        setTimeout(() => {
            hideNotification();
        }, 3000);
    }

    return (
        <NotificationContext.Provider value={{ messages, showNotification, hideNotification }}>
            {children}
        </NotificationContext.Provider>
    );  
}