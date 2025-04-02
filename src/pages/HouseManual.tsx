
import { ChevronRight, Wifi, Thermometer, Home, ShowerHead, Coffee } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuidebookSection from "@/components/GuidebookSection";

const HouseManual = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">House Manual</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about the property for a comfortable and enjoyable stay.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GuidebookSection
              title="Internet & Entertainment"
              description="WiFi and TV instructions"
              icon={<Wifi size={24} />}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">WiFi</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Network: VacationHome_5G
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Password: Located on the fridge
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Smart TV</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Use the Samsung remote for power and volume
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Netflix, Disney+, and HBO Max available
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Please log out of accounts before departure
                    </li>
                  </ul>
                </div>
              </div>
            </GuidebookSection>
            
            <GuidebookSection
              title="Climate Control"
              description="Heating and cooling instructions"
              icon={<Thermometer size={24} />}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Smart Thermostat</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Located in the main hallway
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Set between 68-76°F for optimal efficiency
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Please turn off when windows are open
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Ceiling Fans</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Use remote controls found in each room
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Please turn off when leaving the house
                    </li>
                  </ul>
                </div>
              </div>
            </GuidebookSection>
            
            <GuidebookSection
              title="Appliances"
              description="Kitchen and laundry instructions"
              icon={<Coffee size={24} />}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Kitchen</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Coffee maker: instructions in drawer below
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Dishwasher: please run before checkout
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Microwave: press "Kitchen Timer" for clock
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Laundry</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Washer/dryer located in hallway closet
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Detergent provided under sink
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Please clean lint trap after each use
                    </li>
                  </ul>
                </div>
              </div>
            </GuidebookSection>
            
            <GuidebookSection
              title="House Rules"
              description="Important guidelines for your stay"
              icon={<Home size={24} />}
            >
              <div className="space-y-1 text-gray-600">
                <li className="flex items-center">
                  <ChevronRight size={16} className="mr-2 text-vacation-500" />
                  No smoking inside the house
                </li>
                <li className="flex items-center">
                  <ChevronRight size={16} className="mr-2 text-vacation-500" />
                  Quiet hours from 10pm-8am
                </li>
                <li className="flex items-center">
                  <ChevronRight size={16} className="mr-2 text-vacation-500" />
                  No parties or events
                </li>
                <li className="flex items-center">
                  <ChevronRight size={16} className="mr-2 text-vacation-500" />
                  Please remove shoes inside
                </li>
                <li className="flex items-center">
                  <ChevronRight size={16} className="mr-2 text-vacation-500" />
                  Lock all doors when leaving
                </li>
                <li className="flex items-center">
                  <ChevronRight size={16} className="mr-2 text-vacation-500" />
                  Pets must be approved in advance
                </li>
              </div>
            </GuidebookSection>
            
            <GuidebookSection
              title="Bathroom Features"
              description="How to use the shower and amenities"
              icon={<ShowerHead size={24} />}
            >
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Master Bathroom</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Pull knob up for shower, turn for temperature
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Heated floor switch by light switch
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Guest Bathroom</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Turn handle left for hot water
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Bathroom fan runs on timer
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Amenities</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Extra towels in linen closet
                    </li>
                    <li className="flex items-center">
                      <ChevronRight size={16} className="mr-2 text-vacation-500" />
                      Hairdryers in each bathroom
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

export default HouseManual;
