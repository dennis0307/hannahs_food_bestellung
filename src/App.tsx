import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MealsPage from "./pages/MealsPage";
import ManageMealsPage from "./pages/ManageMealsPage";
import HistoryPage from "./pages/HistoryPage";
import StefanPage from "./pages/StefanPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MealsPage />} />
          <Route path="/verwalten" element={<ManageMealsPage />} />
          <Route path="/verlauf" element={<HistoryPage />} />
          <Route path="/stefan" element={<StefanPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
