
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, MapPin, Clock, Phone, Info, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NavItem = ({ to, icon, label, isMobile = false }: { 
  to: string; 
  icon: React.ReactNode; 
  label: string;
  isMobile?: boolean;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <li className={cn(
      "transition-colors duration-200",
      isMobile ? "w-full" : "mx-1"
    )}>
      <Link
        to={to}
        className={cn(
          "flex items-center px-3 py-2 rounded-md",
          isActive 
            ? "bg-vacation-100 text-vacation-700" 
            : "text-gray-600 hover:bg-gray-100",
          isMobile ? "text-lg justify-center" : ""
        )}
      >
        <span className="mr-2">{icon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-vacation-600 font-semibold text-xl">
                Vacation (Home) Guide
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <ul className="flex items-center space-x-1">
              <NavItem to="/" icon={<Home size={18} />} label="Home" />
              <NavItem to="/checkin" icon={<Info size={18} />} label="Info" />
              <NavItem to="/house-manual" icon={<BookOpen size={18} />} label="House Manual" />
              <NavItem to="/explore" icon={<MapPin size={18} />} label="Explore" />
              <NavItem to="/contact" icon={<Phone size={18} />} label="Contact" />
            </ul>
          </div>
          
          <div className="flex md:hidden items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <ul className="flex flex-col space-y-2">
              <NavItem to="/" icon={<Home size={18} />} label="Home" isMobile />
              <NavItem to="/checkin" icon={<Info size={18} />} label="Info" isMobile />
              <NavItem to="/house-manual" icon={<BookOpen size={18} />} label="House Manual" isMobile />
              <NavItem to="/explore" icon={<MapPin size={18} />} label="Explore" isMobile />
              <NavItem to="/contact" icon={<Phone size={18} />} label="Contact" isMobile />
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
