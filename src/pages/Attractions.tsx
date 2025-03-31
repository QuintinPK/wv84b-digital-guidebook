
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuidebookSection from "@/components/GuidebookSection";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  ArrowLeft, 
  Utensils, 
  Waves, 
  TreePine, 
  Store, 
  Ticket, 
  Clock, 
  Car
} from "lucide-react";
import { Link } from "react-router-dom";

const AttractionCard = ({ 
  name, 
  description, 
  distance, 
  address, 
  imageUrl, 
  website 
}: { 
  name: string; 
  description: string; 
  distance: string; 
  address: string; 
  imageUrl: string;
  website?: string;
}) => (
  <div className="flex flex-col md:flex-row overflow-hidden border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div className="md:w-1/3 h-48 md:h-auto relative">
      <img 
        src={imageUrl} 
        alt={name} 
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
    <div className="p-5 md:w-2/3 flex flex-col">
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-medium text-gray-900">{name}</h3>
          <span className="bg-vacation-50 text-vacation-700 text-xs px-2 py-1 rounded">
            {distance}
          </span>
        </div>
        <p className="text-gray-600 mt-2">{description}</p>
        <p className="text-sm text-gray-500 mt-3 flex items-center">
          <MapPin size={14} className="mr-1" /> {address}
        </p>
      </div>
      <div className="mt-4 pt-4 border-t flex justify-between items-center">
        <div className="text-sm text-gray-500 flex items-center">
          <Clock size={14} className="mr-1" /> Opens daily 9 AM - 6 PM
        </div>
        {website && (
          <Button variant="outline" size="sm" className="text-vacation-600 border-vacation-200" asChild>
            <a href={website} target="_blank" rel="noopener noreferrer">Visit Website</a>
          </Button>
        )}
      </div>
    </div>
  </div>
);

const Attractions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-vacation-600 hover:text-vacation-700">
              <ArrowLeft size={16} className="mr-2" />
              Back to Guidebook
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                alt="Local attractions" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="flex items-center mb-2">
                  <MapPin size={24} className="text-white mr-3" />
                  <h1 className="text-3xl font-semibold text-white">Local Attractions</h1>
                </div>
                <p className="text-lg text-white/90 max-w-3xl">
                  Discover the best places to visit during your stay. We've hand-picked our favorite attractions so you can make the most of your vacation.
                </p>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="restaurants" className="mb-8">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="restaurants" className="flex items-center">
                <Utensils size={16} className="mr-2" /> Dining
              </TabsTrigger>
              <TabsTrigger value="beaches" className="flex items-center">
                <Waves size={16} className="mr-2" /> Beaches
              </TabsTrigger>
              <TabsTrigger value="outdoors" className="flex items-center">
                <TreePine size={16} className="mr-2" /> Outdoors
              </TabsTrigger>
              <TabsTrigger value="shopping" className="flex items-center">
                <Store size={16} className="mr-2" /> Shopping
              </TabsTrigger>
              <TabsTrigger value="entertainment" className="flex items-center">
                <Ticket size={16} className="mr-2" /> Entertainment
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="restaurants" className="space-y-6">
              <GuidebookSection
                title="Our Favorite Restaurants"
                description="Delicious dining options nearby"
                icon={<Utensils size={20} />}
              >
                <div className="space-y-6 mt-4">
                  <AttractionCard
                    name="Coastline Seafood"
                    description="Fresh, locally-caught seafood with stunning ocean views. Try their famous clam chowder and grilled catch of the day."
                    distance="0.8 miles"
                    address="2467 Pacific Coast Hwy, Malibu, CA"
                    imageUrl="https://images.unsplash.com/photo-1493962853295-0fd70327578a"
                    website="https://example.com"
                  />
                  
                  <AttractionCard
                    name="Vineyard Bistro"
                    description="Farm-to-table Mediterranean cuisine with an extensive wine list featuring local California vintages."
                    distance="1.2 miles"
                    address="187 Cross Creek Rd, Malibu, CA"
                    imageUrl="https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
                    website="https://example.com"
                  />
                  
                  <AttractionCard
                    name="Sunrise Café"
                    description="Perfect for breakfast and brunch, with organic ingredients and vegetarian options. Don't miss their avocado toast."
                    distance="0.5 miles"
                    address="22333 Pacific Coast Hwy, Malibu, CA"
                    imageUrl="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                    website="https://example.com"
                  />
                </div>
              </GuidebookSection>
            </TabsContent>
            
            <TabsContent value="beaches" className="space-y-6">
              <GuidebookSection
                title="Beautiful Beaches"
                description="Sun, sand, and surf within easy reach"
                icon={<Waves size={20} />}
              >
                <div className="space-y-6 mt-4">
                  <AttractionCard
                    name="Malibu Beach"
                    description="Wide, sandy beach perfect for swimming and sunbathing. Lifeguards on duty during summer months."
                    distance="0.3 miles"
                    address="23000 Pacific Coast Hwy, Malibu, CA"
                    imageUrl="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                    website="https://example.com"
                  />
                  
                  <AttractionCard
                    name="Surfrider Beach"
                    description="World-famous surf spot with consistent waves. Great for experienced surfers and people-watching."
                    distance="1.5 miles"
                    address="23050 Pacific Coast Hwy, Malibu, CA"
                    imageUrl="https://images.unsplash.com/photo-1466721591366-2d5fba72006d"
                    website="https://example.com"
                  />
                </div>
              </GuidebookSection>
            </TabsContent>
            
            <TabsContent value="outdoors" className="space-y-6">
              <GuidebookSection
                title="Outdoor Activities"
                description="Explore the natural beauty around us"
                icon={<TreePine size={20} />}
              >
                <div className="space-y-6 mt-4">
                  <AttractionCard
                    name="Solstice Canyon Trails"
                    description="Beautiful hiking trails with waterfalls and stunning coastal views. Suitable for all skill levels."
                    distance="4.2 miles"
                    address="Solstice Canyon Rd, Malibu, CA"
                    imageUrl="https://images.unsplash.com/photo-1472396961693-142e6e269027"
                    website="https://example.com"
                  />
                </div>
              </GuidebookSection>
            </TabsContent>
            
            <TabsContent value="shopping" className="space-y-6">
              <GuidebookSection
                title="Shopping Destinations"
                description="Retail therapy for all tastes"
                icon={<Store size={20} />}
              >
                <div className="space-y-6 mt-4">
                  <AttractionCard
                    name="Malibu Country Mart"
                    description="Upscale outdoor shopping center with boutiques, galleries, and restaurants in a beautiful garden setting."
                    distance="2.1 miles"
                    address="3835 Cross Creek Rd, Malibu, CA"
                    imageUrl="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                    website="https://example.com"
                  />
                </div>
              </GuidebookSection>
            </TabsContent>
            
            <TabsContent value="entertainment" className="space-y-6">
              <GuidebookSection
                title="Entertainment Options"
                description="Fun activities for all ages"
                icon={<Ticket size={20} />}
              >
                <div className="space-y-6 mt-4">
                  <AttractionCard
                    name="Malibu Playhouse"
                    description="Intimate theater featuring local productions and occasional celebrity performances."
                    distance="3.5 miles"
                    address="29243 Pacific Coast Hwy, Malibu, CA"
                    imageUrl="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
                    website="https://example.com"
                  />
                </div>
              </GuidebookSection>
            </TabsContent>
          </Tabs>
          
          <GuidebookSection
            title="Getting Around"
            description="Transportation options and tips"
            icon={<Car size={20} />}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Transportation Options</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-full bg-vacation-100 text-vacation-700 h-5 w-5 text-sm mr-2 mt-0.5">1</span>
                    <span><strong>Rental Car</strong>: Recommended for flexibility. Parking available at the property.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-full bg-vacation-100 text-vacation-700 h-5 w-5 text-sm mr-2 mt-0.5">2</span>
                    <span><strong>Ride Sharing</strong>: Uber and Lyft are readily available in the area.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center rounded-full bg-vacation-100 text-vacation-700 h-5 w-5 text-sm mr-2 mt-0.5">3</span>
                    <span><strong>Public Transit</strong>: Limited bus service along Pacific Coast Highway.</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Distances From Property</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex justify-between">
                    <span>Malibu Beach</span>
                    <span className="text-vacation-700">0.3 miles</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Downtown Malibu</span>
                    <span className="text-vacation-700">1.5 miles</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Los Angeles International Airport (LAX)</span>
                    <span className="text-vacation-700">29 miles</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Santa Monica</span>
                    <span className="text-vacation-700">18 miles</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Beverly Hills</span>
                    <span className="text-vacation-700">24 miles</span>
                  </li>
                </ul>
              </div>
            </div>
          </GuidebookSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Attractions;
