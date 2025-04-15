
import { Car, Map, Thermometer, CarFront, Camera, ShieldAlert } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import GuidebookSection from "@/components/GuidebookSection";

interface ArrivalSectionProps {
  gateKeypadImage: string;
}

const ArrivalSection = ({ gateKeypadImage }: ArrivalSectionProps) => {
  return (
    <GuidebookSection 
      title="First Thing Upon Arrival" 
      description="Important information to get you settled in" 
      icon={<ShieldAlert size={20} />} 
      className="mb-8"
    >
      <div className="grid md:grid-cols-3 gap-6">
        <div className="border border-gray-100 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <Car size={20} className="text-vacation-600 mr-2" />
            <h3 className="font-medium text-gray-800">Getting here</h3>
          </div>
          <p className="text-gray-600 mb-2">
            Kaya Watervillas 84 <br /><br />
          </p>
          <div className="flex flex-col space-y-3">
            <Button 
              size="sm" 
              className="bg-vacation-600 hover:bg-vacation-700 text-white" 
              onClick={() => window.open('https://maps.app.goo.gl/VfAdWYULB9TYtB2j7', '_blank')}
            >
              <Map size={16} className="mr-2" />
              Route from the airport
            </Button>
          </div>
        </div>
        
        <div className="border border-gray-100 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <Thermometer size={20} className="text-vacation-600 mr-2" />
            <h3 className="font-medium text-gray-800">Community gate</h3>
          </div>
          <p className="text-gray-600">
            Gate closed? Use <span className="font-semibold">23670#</span> on the keypad, found on a pole to the left.
            <Dialog>
              <DialogTrigger className="text-left">
                <Button variant="ghost" className="ml-2 inline-flex items-center my-0 py-0 bg-vacation-50 px-[7px] text-base rounded-none mx-0">
                  <Camera size={16} className="text-vacation-600 mr-1" />
                  <span className="text-vacation-600 text-sm text-left">View photo</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <div className="relative">
                  <img src={gateKeypadImage} alt="Gate keypad" className="w-full rounded-lg" />
                </div>
              </DialogContent>
            </Dialog>
          </p>
        </div>
        
        <div className="border border-gray-100 rounded-lg p-4">
          <div className="flex items-center mb-3">
            <CarFront size={20} className="text-vacation-600 mr-2" />
            <h3 className="font-medium text-gray-800">Parking Information</h3>
          </div>
          <p className="text-gray-600">
            Free parking is available right in front. Please park in front of the apartment to ensure space for others.
          </p>
        </div>
      </div>
      
      <div className="mt-6 rounded-lg p-4 bg-vacation-50">
        <h3 className="font-medium text-gray-800 mb-2">Important Notes</h3>
        <ul className="list-disc ml-5 space-y-1 text-gray-600">
          <li>Mindful A/C Use: Enjoy a comfortable temperature, but please don't leave it running when you're away.</li>
          <li>Please be respectful of neighbors - keep noise to a minimum between 10:00 PM and 7:00 AM.</li>
          <li>Smoking is only allowed in outdoor areas, provided ashtrays are used. No open flames or candles indoors.</li>
          <li>Pets are not permitted unless specifically arranged prior to booking.</li>
          <li>Maximum occupancy is 4 guests. Unauthorized guests are not allowed.</li>
          <li>Towels are for use within the villa. Please do not take towels to the beach. Beach towels are available.</li>
          <li>Subletting is not allowed. The villa may only be used by the registered guests.</li>
        </ul>
      </div>
    </GuidebookSection>
  );
};

export default ArrivalSection;
