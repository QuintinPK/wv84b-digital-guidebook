
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuidebookSection from "@/components/GuidebookSection";
import { 
  ChevronRight, 
  Info,
  BookOpen,
  MapPin,
  Clock,
  PhoneCall
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="relative h-[70vh] bg-gray-900">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="/lovable-uploads/5b01f351-6428-4dc0-ad0e-e06123631e3b.png" 
              alt="Vacation rental" 
              className="h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
          </div>
          
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-xl animate-fade-in">
              Welcome to Your Vacation Home
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-xl animate-fade-in">
              Everything you need to know for a perfect stay at our luxury vacation rental.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 animate-fade-in">
              <Button size="lg" className="bg-vacation-600 hover:bg-vacation-700 text-white">
                Explore Guidebook
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
                Contact Host
              </Button>
            </div>
          </div>
        </section>
        
        {/* Guidebook Sections */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6">Digital Guidebook</h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Everything you need to know about your stay, from check-in instructions to local recommendations.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/checkin">
                <GuidebookSection 
                  title="Check-In & Check-Out" 
                  description="Easy access instructions and departure information"
                  icon={<Clock size={24} />}
                >
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Self check-in with lockbox
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Check-in after 3:00 PM
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Check-out before 11:00 AM
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button variant="link" className="text-vacation-600 p-0 h-auto flex items-center">
                      Read More <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </GuidebookSection>
              </Link>
              
              <Link to="/explore">
                <GuidebookSection 
                  title="Explore" 
                  description="Discover attractions, dining, and beaches"
                  icon={<MapPin size={24} />}
                >
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Beautiful beaches within walking distance
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Local dining recommendations
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Historic downtown and hiking trails
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button variant="link" className="text-vacation-600 p-0 h-auto flex items-center">
                      Read More <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </GuidebookSection>
              </Link>
              
              <Link to="/house-manual">
                <GuidebookSection 
                  title="House Manual" 
                  description="Everything you need to know about the property"
                  icon={<BookOpen size={24} />}
                >
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      WiFi access and TV instructions
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Heating and cooling information
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Appliance guides and house rules
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button variant="link" className="text-vacation-600 p-0 h-auto flex items-center">
                      Read More <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </GuidebookSection>
              </Link>
              
              <Link to="/contact">
                <GuidebookSection 
                  title="Contact Information" 
                  description="Need help? We're here for you"
                  icon={<PhoneCall size={24} />}
                >
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      24/7 host support
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Local emergency numbers
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Property management contacts
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button variant="link" className="text-vacation-600 p-0 h-auto flex items-center">
                      Read More <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </GuidebookSection>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
