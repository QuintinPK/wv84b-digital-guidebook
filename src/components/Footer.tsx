
import { Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">About Us</h3>
            <p className="text-gray-600">
              We provide luxury vacation rentals with thoughtful amenities and exceptional service.
              Our digital guidebook ensures you have all the information you need for a perfect stay.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-vacation-600 hover:text-vacation-800 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-vacation-600 hover:text-vacation-800 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-vacation-600 hover:text-vacation-800 transition-colors">
                  House Rules
                </a>
              </li>
              <li>
                <a href="#" className="text-vacation-600 hover:text-vacation-800 transition-colors">
                  Booking Information
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Connect with Us</h3>
            <div className="flex space-x-4 mb-4">
              <a 
                href="#" 
                className="bg-vacation-100 hover:bg-vacation-200 text-vacation-600 rounded-full p-2 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="bg-vacation-100 hover:bg-vacation-200 text-vacation-600 rounded-full p-2 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="bg-vacation-100 hover:bg-vacation-200 text-vacation-600 rounded-full p-2 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <p className="text-gray-600">
              Email: contact@vacationguide.com<br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-gray-500 text-sm">
          <p className="flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-vacation-500" /> by Vacation Guide
          </p>
          <p className="mt-1">© {new Date().getFullYear()} Vacation Guide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
