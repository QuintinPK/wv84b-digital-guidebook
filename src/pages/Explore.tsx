
import { useState } from "react";
import { ChevronRight, MapPin, Utensils, Waves, ArrowLeft, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuidebookSection from "@/components/GuidebookSection";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Explore = () => {
  const [activeTab, setActiveTab] = useState("attractions");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-vacation-600 hover:text-vacation-700">
              <ArrowLeft size={16} className="mr-2" />
              Back to Guidebook
            </Link>
          </div>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Explore the Area</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the best local attractions, dining options, and beaches in the area during your stay.
            </p>
          </div>
          
          <Tabs defaultValue="attractions" className="mb-8" onValueChange={setActiveTab} value={activeTab}>
            <TabsList className="w-full max-w-2xl mx-auto mb-8 bg-gray-100">
              <TabsTrigger value="attractions" className="flex-1 data-[state=active]:bg-vacation-600 data-[state=active]:text-white">
                <MapPin size={16} className="mr-2" />
                Local Attractions
              </TabsTrigger>
              <TabsTrigger value="dining" className="flex-1 data-[state=active]:bg-vacation-600 data-[state=active]:text-white">
                <Utensils size={16} className="mr-2" />
                Dining
              </TabsTrigger>
              <TabsTrigger value="beaches" className="flex-1 data-[state=active]:bg-vacation-600 data-[state=active]:text-white">
                <Waves size={16} className="mr-2" />
                Beach Guide
              </TabsTrigger>
              <TabsTrigger value="shopping" className="flex-1 data-[state=active]:bg-vacation-600 data-[state=active]:text-white">
                <ShoppingBag size={16} className="mr-2" />
                Shopping
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="attractions" className="mt-0">
              <GuidebookSection
                title="Local Attractions"
                description="Discover the best places around"
                icon={<MapPin size={24} />}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Historic Downtown</h3>
                    <p className="text-gray-600 mb-2">
                      Explore charming shops, galleries, and historic sites just a 10-minute drive away.
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        Open daily from 10am to 8pm
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        Free parking available
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Nature Preserve</h3>
                    <p className="text-gray-600 mb-2">
                      Hiking trails with stunning views and wildlife observation areas.
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        Open sunrise to sunset
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        Trail maps available in the house
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Cultural Museum</h3>
                    <p className="text-gray-600 mb-2">
                      Learn about local history and culture through interactive exhibits.
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        Tuesday-Sunday, 9am-5pm
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        Discount tickets in welcome folder
                      </li>
                    </ul>
                  </div>
                </div>
              </GuidebookSection>
            </TabsContent>
            
            <TabsContent value="dining" className="mt-0">
              <GuidebookSection
                title="Dining Recommendations"
                description="Best places to eat nearby"
                icon={<Utensils size={24} />}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Seaside Bistro</h3>
                    <p className="text-gray-600 mb-2">
                      Fresh seafood and stunning ocean views just a 5-minute walk.
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        Dinner: 5pm-10pm daily
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        Reservations recommended
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Farm Table</h3>
                    <p className="text-gray-600 mb-2">
                      Farm-to-table restaurant featuring local produce and meats.
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        Lunch and dinner
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        15-minute drive
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Morning Café</h3>
                    <p className="text-gray-600 mb-2">
                      Delicious breakfast and brunch options with outdoor seating.
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        6am-2pm daily
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        10-minute walk
                      </li>
                    </ul>
                  </div>
                </div>
              </GuidebookSection>
            </TabsContent>
            
            <TabsContent value="beaches" className="mt-0">
              <GuidebookSection
                title="Beach Guide"
                description="Make the most of our beautiful coastline"
                icon={<Waves size={24} />}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Main Beach</h3>
                    <p className="text-gray-600 mb-2">
                      Sandy shores with lifeguards and amenities, 5-minute walk from the house.
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        Lifeguards 9am-5pm (summer)
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        Restrooms and showers available
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Secret Cove</h3>
                    <p className="text-gray-600 mb-2">
                      Secluded beach perfect for peaceful relaxation and snorkeling.
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        15-minute walk from the house
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        Best at low tide
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Beach Equipment</h3>
                    <p className="text-gray-600 mb-2">
                      Available equipment in the garage for your use during your stay.
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        Beach chairs and umbrellas
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        Snorkeling gear and beach toys
                      </li>
                    </ul>
                  </div>
                </div>
              </GuidebookSection>
            </TabsContent>
            
            <TabsContent value="shopping" className="mt-0">
              <GuidebookSection
                title="Shopping"
                description="Best places to shop in the area"
                icon={<ShoppingBag size={24} />}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Local Market</h3>
                    <p className="text-gray-600 mb-2">
                      Fresh local produce, handmade crafts, and delicious food stands.
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        Open Saturday and Sunday, 8am-2pm
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        10-minute drive from the house
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Town Center Mall</h3>
                    <p className="text-gray-600 mb-2">
                      Modern shopping mall with various retail stores and restaurants.
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        Open daily 10am-9pm
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        15-minute drive from the house
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Artisan Shops</h3>
                    <p className="text-gray-600 mb-2">
                      Local artist galleries and boutique shops with unique souvenirs.
                    </p>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        Most shops open 11am-6pm
                      </li>
                      <li className="flex items-center">
                        <ChevronRight size={16} className="mr-2 text-vacation-500" />
                        Located in the historic downtown area
                      </li>
                    </ul>
                  </div>
                </div>
              </GuidebookSection>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
