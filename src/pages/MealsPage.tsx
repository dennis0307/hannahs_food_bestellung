import { useState, useCallback } from "react";
import { getMeals, Meal } from "@/data/meals";
import MealCard from "@/components/MealCard";
import ConfirmModal from "@/components/ConfirmModal";
import NotificationToast from "@/components/NotificationToast";
import BottomNav from "@/components/BottomNav";
import SnailIcon from "@/components/SnailIcon";
import { UtensilsCrossed } from "lucide-react";

export interface MealSelection {
  meal: Meal;
  date: string;
}

const MealsPage = () => {
  const meals = getMeals();
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const handleSelect = (meal: Meal) => {
    setSelectedMeal(meal);
  };

  const handleConfirm = useCallback(() => {
    if (!selectedMeal) return;
    const history: MealSelection[] = JSON.parse(localStorage.getItem("meal-history") || "[]");
    history.unshift({ meal: selectedMeal, date: new Date().toISOString() });
    localStorage.setItem("meal-history", JSON.stringify(history));
    setToast(selectedMeal.name);
    setSelectedMeal(null);
  }, [selectedMeal]);

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-30 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-lg mx-auto px-5 py-4 flex items-center gap-2">
          <SnailIcon size={24} className="text-primary" />
          <h1 className="font-heading text-2xl font-bold text-foreground tracking-tight">
            Hannah's Food
          </h1>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-5 pt-6">
        {meals.length === 0 ? (
          <div className="text-center py-20">
            <UtensilsCrossed size={48} className="mx-auto text-muted-foreground/40 mb-4" />
            <p className="text-muted-foreground font-medium">Noch keine Gerichte vorhanden</p>
            <p className="text-muted-foreground text-sm mt-1">
              Füge Gerichte in <code className="text-xs bg-secondary px-1 py-0.5 rounded">src/data/meals.json</code> hinzu.
            </p>
          </div>
        ) : (
          <>
            <p className="text-muted-foreground text-sm mb-5">
              Wähl das heutige Gericht — Stefan bekommt Bescheid 🍽️
            </p>
            <div className="grid grid-cols-1 gap-5">
              {meals.map((meal, i) => (
                <MealCard key={meal.id} meal={meal} onSelect={handleSelect} index={i} />
              ))}
            </div>
          </>
        )}
      </main>

      {selectedMeal && (
        <ConfirmModal
          meal={selectedMeal}
          onConfirm={handleConfirm}
          onCancel={() => setSelectedMeal(null)}
        />
      )}

      {toast && <NotificationToast mealName={toast} onDone={() => setToast(null)} />}

      <BottomNav />
    </div>
  );
};

export default MealsPage;
