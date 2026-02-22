import { Check } from "lucide-react";
import { useEffect } from "react";

interface NotificationToastProps {
  mealName: string;
  onDone: () => void;
}

const NotificationToast = ({ mealName, onDone }: NotificationToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onDone, 3000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-sm animate-fade-in">
      <div className="bg-primary text-primary-foreground rounded-lg px-5 py-4 shadow-lg flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
          <Check size={18} className="animate-check-bounce" />
        </div>
        <div>
          <p className="font-semibold text-sm">Stefan wurde benachrichtigt!</p>
          <p className="text-xs opacity-80 mt-0.5">Heute Abend: {mealName}</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationToast;
