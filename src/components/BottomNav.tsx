import { NavLink } from "react-router-dom";
import { UtensilsCrossed, Clock, ListPlus, Eye } from "lucide-react";

const BottomNav = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex flex-col items-center gap-1 text-xs font-medium transition-colors ${
      isActive ? "text-accent" : "text-muted-foreground"
    }`;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border safe-bottom">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-4">
        <NavLink to="/" className={linkClass}>
          <UtensilsCrossed size={22} />
          Gerichte
        </NavLink>
        <NavLink to="/verwalten" className={linkClass}>
          <ListPlus size={22} />
          Verwalten
        </NavLink>
        <NavLink to="/verlauf" className={linkClass}>
          <Clock size={22} />
          Verlauf
        </NavLink>
        <NavLink to="/stefan" className={linkClass}>
          <Eye size={22} />
          Stefan
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNav;
