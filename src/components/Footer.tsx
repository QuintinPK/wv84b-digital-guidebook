
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">About Us</h3>
            <p className="text-gray-600">
              We provide luxury vacation rentals with thoughtful amenities and exceptional service.
              Our digital guidebook ensures you have all the information you need for a perfect stay.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-vacation-600 hover:text-vacation-800 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/house-manual" className="text-vacation-600 hover:text-vacation-800 transition-colors">
                  House Rules
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Connect with Us</h3>
            
            <p className="text-gray-600">
              Email: <a href="mailto:contact@seasideserenitybonaire.com" className="text-vacation-600 hover:text-vacation-800 transition-colors">contact@seasideserenitybonaire.com</a><br />
              Phone: <a href="tel:+5997951826" className="text-vacation-600 hover:text-vacation-800 transition-colors">+599 795 1826</a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-vacation-500" /> by Seaside Serenity Villas Bonaire
          </p>
          <p className="mt-1">© {new Date().getFullYear()} Vacation Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};

export default Footer;
