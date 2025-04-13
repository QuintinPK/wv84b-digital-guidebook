import { useState } from "react";
import { ChevronRight, MapPin, Utensils, Waves, ArrowLeft, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuidebookSection from "@/components/GuidebookSection";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger 
} from "@/components/ui/accordion";

const Explore = () => {
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
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full border rounded-lg overflow-hidden">
              <AccordionItem value="attractions">
                <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                  <div className="flex items-center">
                    <MapPin size={20} className="mr-2 text-vacation-600" />
                    <span className="font-medium">Local Attractions</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-6 pt-2">
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
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="dining">
                <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                  <div className="flex items-center">
                    <Utensils size={20} className="mr-2 text-vacation-600" />
                    <span className="font-medium">Dining</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-6 pt-2">
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
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="beaches">
                <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                  <div className="flex items-center">
                    <Waves size={20} className="mr-2 text-vacation-600" />
                    <span className="font-medium">Beach Guide</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-6 pt-2">
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
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="supermarkets">
                <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                  <div className="flex items-center">
                    <ShoppingBag size={20} className="mr-2 text-vacation-600" />
                    <span className="font-medium">Supermarkets</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-6 pt-2">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">
                        <a href="https://maps.google.com/?q=Van+den+Tweel+Supermarket+Bonaire" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="hover:text-vacation-600">
                          Van den Tweel Supermarket
                        </a>
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Large, well-stocked store with international and local products.
                      </p>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-center">
                          <ChevronRight size={16} className="mr-2 text-vacation-500" />
                          Open daily 8am–8pm
                        </li>
                        <li className="flex items-center">
                          <ChevronRight size={16} className="mr-2 text-vacation-500" />
                          6-minute drive
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">
                        <a href="https://maps.google.com/?q=Warehouse+Bonaire" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="hover:text-vacation-600">
                          Warehouse Bonaire
                        </a>
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Grocery store with a wide selection of fresh produce and household items.
                      </p>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-center">
                          <ChevronRight size={16} className="mr-2 text-vacation-500" />
                          Open daily 8am–8pm
                        </li>
                        <li className="flex items-center">
                          <ChevronRight size={16} className="mr-2 text-vacation-500" />
                          5-minute drive
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">
                        <a href="https://maps.google.com/?q=Bondigro+Supermarket+Bonaire" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="hover:text-vacation-600">
                          Bondigro Supermarket
                        </a>
                      </h3>
                      <p className="text-gray-600 mb-2">
                        Wholesale-style supermarket with groceries, drinks, and household goods.
                      </p>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-center">
                          <ChevronRight size={16} className="mr-2 text-vacation-500" />
                          Open Sunday 9am–1pm, Monday–Saturday 7:30am–7:30pm
                        </li>
                        <li className="flex items-center">
                          <ChevronRight size={16} className="mr-2 text-vacation-500" />
                          5-minute drive
                        </li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Explore;
