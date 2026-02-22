import { Meal } from "@/data/meals";
import { UtensilsCrossed } from "lucide-react";

interface MealCardProps {
  meal: Meal;
  onSelect: (meal: Meal) => void;
  index: number;
}

const MealCard = ({ meal, onSelect, index }: MealCardProps) => {
  return (
    <button
      onClick={() => onSelect(meal)}
      className="w-full bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 text-left animate-slide-up"
      style={{ animationDelay: `${index * 80}ms`, opacity: 0 }}
    >
      {meal.image ? (
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={meal.image}
            alt={meal.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
          <UtensilsCrossed size={48} className="text-muted-foreground/30" />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-heading text-lg font-semibold text-foreground mb-1">
          {meal.name}
        </h3>
        {meal.description && (
          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
            {meal.description}
          </p>
        )}
        {meal.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {meal.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </button>
  );
};

export default MealCard;
