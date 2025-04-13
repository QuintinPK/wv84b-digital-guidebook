
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
                      <h3 className="font-medium text-gray-900 mb-2">Van den Tweel Supermarket</h3>
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
                        <li className="flex items-center">
                          <ChevronRight size={16} className="mr-2 text-vacation-500" />
                          <a 
                            href="https://maps.google.com/?q=Van+den+Tweel+Supermarket+Bonaire" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-vacation-600 hover:underline flex items-center"
                          >
                            Location
                          </a>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Warehouse Bonaire</h3>
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
                        <li className="flex items-center">
                          <ChevronRight size={16} className="mr-2 text-vacation-500" />
                          <a 
                            href="https://maps.google.com/?q=Warehouse+Bonaire" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-vacation-600 hover:underline flex items-center"
                          >
                            Location
                          </a>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Bondigro Supermarket</h3>
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
                        <li className="flex items-center">
                          <ChevronRight size={16} className="mr-2 text-vacation-500" />
                          <a 
                            href="https://maps.google.com/?q=Bondigro+Supermarket+Bonaire" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-vacation-600 hover:underline flex items-center"
                          >
                            Location
                          </a>
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
                    <span className="font-medium">Nearest Beaches</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-6 pt-2">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Te Amo Beach</h3>
                      <p className="text-gray-600 mb-2">
                        Sandy beach with shallow waters, perfect for swimming and snorkeling.
                      </p>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-center">
                          <ChevronRight size={16} className="mr-2 text-vacation-500" />
                          750 meters (0.5 miles) from the villa, 2-minute drive or 10-minute walk
                        </li>
                        <li className="flex items-center">
                          <ChevronRight size={16} className="mr-2 text-vacation-500" />
                          Food trucks often nearby
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Donkey Beach (Palu di Mangel)</h3>
                      <p className="text-gray-600 mb-2">
                        The beach can be relatively quiet, offering a more private and natural experience.
                      </p>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-center">
                          <ChevronRight size={16} className="mr-2 text-vacation-500" />
                          1 km (0.6 miles) from the villa, 3-minute drive or 12-minute walk
                        </li>
                        <li className="flex items-center">
                          <ChevronRight size={16} className="mr-2 text-vacation-500" />
                          Great for plane spotting!
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Bachelor's beach (Playa Kalki)</h3>
                      <p className="text-gray-600 mb-2">
                        Small sandy strip at low tide, excellent for snorkeling and sunset views.
                      </p>
                      <ul className="space-y-1 text-gray-600">
                        <li className="flex items-center">
                          <ChevronRight size={16} className="mr-2 text-vacation-500" />
                          2 km (1.2 miles) from the villa, 4-minute drive
                        </li>
                        <li className="flex items-center">
                          <ChevronRight size={16} className="mr-2 text-vacation-500" />
                          Access via a short staircase
                        </li>
                      </ul>
                    </div>
                    
                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-vacation-600">
                        <a 
                          href="https://bonaireisland.com/map/?type=beach_site" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center hover:underline"
                        >
                          For a complete guide to Bonaire's beaches, visit bonaireisland.com
                          <ChevronRight size={16} className="ml-1" />
                        </a>
                      </p>
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
                    
                    <div className="pt-3 border-t border-gray-200">
                      <p className="text-vacation-600">
                        <a 
                          href="https://bonaireisland.com/experiences/cuisine/restaurants/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center hover:underline"
                        >
                          For a guide to dining options in Bonaire, check out bonaireisland.com
                          <ChevronRight size={16} className="ml-1" />
                        </a>
                      </p>
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
