import { getMeals, Meal } from "@/data/meals";
import BottomNav from "@/components/BottomNav";
import SnailIcon from "@/components/SnailIcon";

const ManageMealsPage = () => {
  const meals: Meal[] = getMeals();

  return (
    <div className="min-h-screen bg-background pb-24">
      <header className="sticky top-0 z-30 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-lg mx-auto px-5 py-4 flex items-center gap-2">
          <SnailIcon size={24} className="text-primary" />
          <h1 className="font-heading text-2xl font-bold text-foreground tracking-tight">
            Gerichte verwalten
          </h1>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-5 pt-6">
        <p className="text-sm text-muted-foreground mb-5">
          Gerichte werden in <code className="text-xs bg-secondary px-1 py-0.5 rounded">src/data/meals.json</code> verwaltet.
        </p>

        {meals.length === 0 ? (
          <p className="text-center text-muted-foreground text-sm py-10">
            Noch keine Gerichte in <code>meals.json</code> eingetragen.
          </p>
        ) : (
          <div className="space-y-3">
            {meals.map((meal, i) => (
              <div
                key={meal.id}
                className="flex items-center gap-4 bg-card rounded-lg p-4 shadow-sm animate-fade-in"
                style={{ animationDelay: `${i * 60}ms`, opacity: 0 }}
              >
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm truncate">{meal.name}</p>
                  {meal.description && (
                    <p className="text-xs text-muted-foreground mt-0.5 truncate">
                      {meal.description}
                    </p>
                  )}
                  {meal.tags.length > 0 && (
                    <div className="flex gap-1.5 flex-wrap mt-2">
                      {meal.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
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

export default ManageMealsPage;
