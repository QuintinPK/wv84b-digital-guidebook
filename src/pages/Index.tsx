import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import GuidebookSection from "@/components/GuidebookSection";
import AmenityIcon from "@/components/AmenityIcon";
import { 
  Wifi, 
  Coffee, 
  Tv, 
  UtensilsCrossed,
  Car,
  Bath, 
  Waves, 
  ChevronRight, 
  Info,
  Utensils,
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
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
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
        
        {/* Property Information */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">Our Beautiful Vacation Home</h2>
            
            <div className="mb-10">
              <PropertyCard 
                name="Ocean View Villa"
                location="Malibu, California"
                bedrooms={3}
                capacity={6}
                imageUrl="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
              />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
              <AmenityIcon icon={<Wifi size={24} />} label="Free WiFi" />
              <AmenityIcon icon={<Coffee size={24} />} label="Coffee Machine" />
              <AmenityIcon icon={<Tv size={24} />} label="Smart TV" />
              <AmenityIcon icon={<UtensilsCrossed size={24} />} label="Full Kitchen" />
              <AmenityIcon icon={<Car size={24} />} label="Free Parking" />
              <AmenityIcon icon={<Bath size={24} />} label="Jacuzzi" />
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
                      Self check-in with keypad
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
              
              <Link to="/attractions">
                <GuidebookSection 
                  title="Local Attractions" 
                  description="Discover the best places around"
                  icon={<MapPin size={24} />}
                >
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Beautiful beaches within walking distance
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Hiking trails with stunning views
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Historic downtown shopping district
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button variant="link" className="text-vacation-600 p-0 h-auto flex items-center">
                      Read More <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </GuidebookSection>
              </Link>
              
              <Link to="/">
                <GuidebookSection 
                  title="House Manual" 
                  description="Everything you need to know about the property"
                  icon={<Info size={24} />}
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
              
              <Link to="/">
                <GuidebookSection 
                  title="Dining Recommendations" 
                  description="Best places to eat nearby"
                  icon={<Utensils size={24} />}
                >
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Seafood restaurants with ocean views
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Local farm-to-table experiences
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Casual cafés and breakfast spots
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Button variant="link" className="text-vacation-600 p-0 h-auto flex items-center">
                      Read More <ChevronRight size={16} className="ml-1" />
                    </Button>
                  </div>
                </GuidebookSection>
              </Link>
              
              <Link to="/">
                <GuidebookSection 
                  title="Beach Guide" 
                  description="Make the most of our beautiful coastline"
                  icon={<Waves size={24} />}
                >
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Beach access and parking information
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Best times for swimming and surfing
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Beach equipment available at the house
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
