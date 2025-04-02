
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuidebookSection from "@/components/GuidebookSection";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Key, 
  Clock, 
  MapPin, 
  ArrowLeft, 
  Wifi, 
  Thermometer,
  ShieldAlert,
  CarFront,
  Map
} from "lucide-react";
import { Link } from "react-router-dom";

const CheckIn = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-vacation-600 hover:text-vacation-700">
              <ArrowLeft size={16} className="mr-2" />
              Back to Guidebook
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
            <div className="p-6 sm:p-8">
              <div className="flex items-center mb-4">
                <Clock size={24} className="text-vacation-600 mr-3" />
                <h1 className="text-3xl font-semibold text-gray-900">Check-In & Check-Out Information</h1>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Everything you need to know for a smooth arrival and departure from our vacation rental.
                Please read this information carefully before your stay.
                
                <br />
                
                We love to welcome our guests personally whenever possible! If you’d like an in-person 
                greeting when you arrive, just let us know your estimated time of arrival. We’ll be happy to meet you, 
                give you a quick tour, and share our favorite local tips to make your stay unforgettable. 
                If you prefer a more self-guided check-in, that’s no problem — we’ve got a seamless self-check-in process, too!
                
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <GuidebookSection
              title="Check-In Details"
              icon={<Key size={20} />}
              className="h-full"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Check-In Time</h3>
                  <p className="text-gray-600">3:00 PM - 12:00 PM</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Early check-in may be available with prior arrangement.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Self Check-In Process</h3>
                  <ol className="list-decimal ml-5 space-y-2 text-gray-600">
                    <li>If the gate is closed upon arrival, enter code 123456#.</li>
                    <li>Enter code <span className="font-semibold">4286</span> on the keypad lockbox.</li>
                    <li>Remove the key from the lockbox.</li>
                    <li>Use the key to unlock the front door.</li>
                    <li>Return the key to the lockbox when you leave the property.</li>
                  </ol>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Address & Directions</h3>
                  <p className="text-gray-600 mb-2">
                    Kaya Watervillas 84<br />
                    Bonaire
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-vacation-600 hover:bg-vacation-700 text-white"
                  >
                    <Map size={16} className="mr-2" />
                    Open in Maps
                  </Button>
                </div>
              </div>
            </GuidebookSection>
            
            <GuidebookSection
              title="Check-Out Details"
              icon={<ArrowLeft size={20} />}
              className="h-full"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Check-Out Time</h3>
                  <p className="text-gray-600">11:00 AM</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Late check-out may result in additional charges.
                  </p>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Check-Out Procedure</h3>
                  <ul className="list-disc ml-5 space-y-2 text-gray-600">
                    <li>Leave all used towels in the bathtub or shower.</li>
                    <li>Load and start the dishwasher before leaving.</li>
                    <li>Take all trash to the designated bins outside.</li>
                    <li>Turn off all lights and appliances.</li>
                    <li>Close and lock all windows and doors.</li>
                    <li>Return keys to the lockbox.</li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Late Check-Out</h3>
                  <p className="text-gray-600">
                    If you need a late check-out, please contact us at least 24 hours in advance.
                    Subject to availability, late check-out until 2:00 PM may be arranged for an additional fee.
                  </p>
                </div>
              </div>
            </GuidebookSection>
          </div>
          
          <GuidebookSection
            title="First Thing Upon Arrival"
            description="Important information to get you settled in"
            icon={<ShieldAlert size={20} />}
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Wifi size={20} className="text-vacation-600 mr-2" />
                  <h3 className="font-medium text-gray-800">WiFi Information</h3>
                </div>
                <p className="text-gray-600 mb-2">Network: OceanView_Guest</p>
                <p className="text-gray-600">Password: BeachLife2024</p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Thermometer size={20} className="text-vacation-600 mr-2" />
                  <h3 className="font-medium text-gray-800">Temperature Control</h3>
                </div>
                <p className="text-gray-600">
                  The thermostat is located in the main hallway. Please set between 68-78°F to conserve energy.
                </p>
              </div>
              
              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <CarFront size={20} className="text-vacation-600 mr-2" />
                  <h3 className="font-medium text-gray-800">Parking Information</h3>
                </div>
                <p className="text-gray-600">
                  Park in the designated spot #12. Additional street parking is available without permits.
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-vacation-50 rounded-lg p-4">
              <h3 className="font-medium text-gray-800 mb-2">Important Notes</h3>
              <ul className="list-disc ml-5 space-y-1 text-gray-600">
                <li>Please be respectful of neighbors - quiet hours are from 10 PM to 8 AM.</li>
                <li>No smoking is allowed anywhere on the property, including balconies and patios.</li>
                <li>Pets are not permitted unless specifically arranged prior to booking.</li>
                <li>Maximum occupancy is 6 guests. Unauthorized guests are not allowed.</li>
              </ul>
            </div>
          </GuidebookSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckIn;
