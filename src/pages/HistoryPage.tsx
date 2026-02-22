import { useEffect, useState } from "react";
import { MealSelection } from "@/pages/MealsPage";
import BottomNav from "@/components/BottomNav";
import SnailIcon from "@/components/SnailIcon";
import { CalendarDays } from "lucide-react";

const HistoryPage = () => {
  const [history, setHistory] = useState<MealSelection[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("meal-history") || "[]");
    setHistory(data);
  }, []);

  const formatDate = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleDateString("de-DE", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  const formatTime = (iso: string) => {
    const d = new Date(iso);
    return d.toLocaleTimeString("de-DE", { hour: "numeric", minute: "2-digit" });
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-30 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-lg mx-auto px-5 py-4 flex items-center gap-2">
          <SnailIcon size={24} className="text-primary" />
          <h1 className="font-heading text-2xl font-bold text-foreground tracking-tight">
            Verlauf
          </h1>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-5 pt-6">
        {history.length === 0 ? (
          <div className="text-center py-20">
            <CalendarDays size={48} className="mx-auto text-muted-foreground/40 mb-4" />
            <p className="text-muted-foreground">Noch keine Gerichte ausgewählt.</p>
            <p className="text-muted-foreground text-sm mt-1">
              Wähle ein Gericht und es erscheint hier!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {history.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-card rounded-lg p-3 shadow-sm animate-fade-in"
                style={{ animationDelay: `${i * 60}ms`, opacity: 0 }}
              >
                <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-secondary flex items-center justify-center">
                  {item.meal.image ? (
                    <img src={item.meal.image} alt={item.meal.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xl">🍽️</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm truncate">
                    {item.meal.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {formatDate(item.date)} · {formatTime(item.date)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default HistoryPage;
