
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigationType } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import CheckIn from "./pages/CheckIn";
import Explore from "./pages/Explore";
import Contact from "./pages/Contact";
import HouseManual from "./pages/HouseManual";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import BottomNavbar from "./components/BottomNavbar";

const queryClient = new QueryClient();

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Only scroll to top if it's a PUSH navigation (not REPLACE or POP)
    if (navigationType === 'PUSH') {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);

  return null;
};

const AppContent = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/checkin" element={<CheckIn />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/house-manual" element={<HouseManual />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomNavbar />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
