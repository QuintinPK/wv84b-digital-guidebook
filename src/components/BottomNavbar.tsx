
import { Link, useLocation } from "react-router-dom";
import { Home, Info, BookOpen, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const BottomNavItem = ({ to, icon }: { to: string; icon: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={cn(
        "flex flex-col items-center justify-center p-2",
        isActive 
          ? "text-vacation-700" 
          : "text-gray-500 hover:text-gray-700"
      )}
    >
      {icon}
    </Link>
  );
};

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 md:hidden z-10">
      <div className="flex justify-around items-center h-16">
        <BottomNavItem to="/" icon={<Home size={24} />} />
        <BottomNavItem to="/checkin" icon={<Info size={24} />} />
        <BottomNavItem to="/house-manual" icon={<BookOpen size={24} />} />
        <BottomNavItem to="/explore" icon={<MapPin size={24} />} />
        <BottomNavItem to="/contact" icon={<Phone size={24} />} />
      </div>
    </nav>
  );
};

export default BottomNavbar;
