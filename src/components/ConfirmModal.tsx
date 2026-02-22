import { Meal } from "@/data/meals";
import { Check, X } from "lucide-react";

interface ConfirmModalProps {
  meal: Meal;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal = ({ meal, onConfirm, onCancel }: ConfirmModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative w-full max-w-sm mx-4 mb-6 bg-card rounded-lg shadow-xl animate-scale-in overflow-hidden">
        <div className="p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary flex items-center justify-center bg-secondary">
            {meal.image ? (
              <img src={meal.image} alt={meal.name} className="w-full h-full object-cover" />
            ) : (
              <span className="text-2xl">🍽️</span>
            )}
          </div>
          <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
            {meal.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            Stefan sagen, dass wir das heute kochen?
          </p>
          <div className="flex gap-3">
            <button
              onClick={onCancel}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-border text-muted-foreground font-medium text-sm hover:bg-secondary transition-colors"
            >
              <X size={18} />
              Noch nicht
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            >
              <Check size={18} />
              Los geht's!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
