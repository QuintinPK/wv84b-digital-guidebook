
import { ChevronRight, MapPin, Utensils, Waves } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuidebookSection from "@/components/GuidebookSection";

const Explore = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Explore the Area</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the best local attractions, dining options, and beaches in the area during your stay.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Attractions Section */}
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
            
            {/* Dining Section */}
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
            
            {/* Beach Guide Section */}
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
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
