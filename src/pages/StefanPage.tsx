import { useEffect, useState } from "react";
import { MealSelection } from "@/pages/MealsPage";
import BottomNav from "@/components/BottomNav";
import SnailIcon from "@/components/SnailIcon";
import { Bell, ChefHat } from "lucide-react";

const StefanPage = () => {
  const [latest, setLatest] = useState<MealSelection | null>(null);

  useEffect(() => {
    const data: MealSelection[] = JSON.parse(localStorage.getItem("meal-history") || "[]");
    if (data.length > 0) setLatest(data[0]);
  }, []);

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-30 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-lg mx-auto px-5 py-4 flex items-center gap-2">
          <SnailIcon size={24} className="text-primary" />
          <h1 className="font-heading text-2xl font-bold text-foreground tracking-tight">
            Stefans Vorschau
          </h1>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-5 pt-8">
        {latest ? (
          <div className="animate-fade-in">
            <div className="bg-card rounded-lg shadow-md overflow-hidden">
              <div className="bg-primary px-5 py-3 flex items-center gap-2">
                <Bell size={18} className="text-primary-foreground" />
                <p className="text-primary-foreground text-sm font-semibold">
                  Neue Nachricht von Hannah
                </p>
              </div>
              <div className="p-5">
                {latest.meal.image ? (
                  <div className="aspect-[16/9] rounded-lg overflow-hidden mb-4">
                    <img src={latest.meal.image} alt={latest.meal.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="aspect-[16/9] rounded-lg bg-secondary flex items-center justify-center mb-4">
                    <span className="text-5xl">🍽️</span>
                  </div>
                )}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
                  {latest.meal.name}
                </h3>
                {latest.meal.description && (
                  <p className="text-muted-foreground text-sm mb-4">
                    {latest.meal.description}
                  </p>
                )}
                <div className="flex items-center gap-2 text-accent text-sm font-medium">
                  <ChefHat size={18} />
                  <span>Das Abendessen steht fest!</span>
                </div>
              </div>
            </div>
            <p className="text-center text-muted-foreground text-xs mt-6">
              Das ist eine Vorschau, was Stefan sehen würde
            </p>
          </div>
        ) : (
          <div className="text-center py-20">
            <Bell size={48} className="mx-auto text-muted-foreground/40 mb-4" />
            <p className="text-muted-foreground">Noch keine Benachrichtigungen.</p>
            <p className="text-muted-foreground text-sm mt-1">
              Hannah hat noch kein Gericht ausgewählt!
            </p>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default StefanPage;
