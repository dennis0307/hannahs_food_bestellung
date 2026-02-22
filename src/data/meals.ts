import mealsData from "./meals.json";

import mealPommes from "@/assets/meal-pommes.jpg";
import mealFruehlingsrollen from "@/assets/meal-fruehlingsrollen.jpg";
import mealLasagne from "@/assets/meal-lasagne.jpg";
import mealCouscous from "@/assets/meal-couscous.jpg";
import mealWraps from "@/assets/meal-wraps.jpg";

const imageMap: Record<string, string> = {
  "Pommes Spezial": mealPommes,
  "Frühlingsrollen": mealFruehlingsrollen,
  "Lasagne": mealLasagne,
  "Couscous Salat": mealCouscous,
  "Wraps": mealWraps,
};

export interface Meal {
  id: string;
  name: string;
  description: string;
  image?: string;
  tags: string[];
}

export function getMeals(): Meal[] {
  return mealsData.map((meal, i) => ({
    ...meal,
    id: String(i),
    image: imageMap[meal.name],
  }));
}
