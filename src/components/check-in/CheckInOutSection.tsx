
import { Clock, Key, ArrowLeft } from "lucide-react";
import GuidebookSection from "@/components/GuidebookSection";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Camera } from "lucide-react";

interface CheckInOutSectionProps {
  lockboxImages: string[];
  currentImageIndex: number;
  onNextImage: () => void;
  onPrevImage: () => void;
}

const CheckInOutSection = ({ 
  lockboxImages, 
  currentImageIndex, 
  onNextImage, 
  onPrevImage 
}: CheckInOutSectionProps) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
        <div className="p-6 sm:p-8">
          <div className="flex items-center mb-4">
            <Clock size={24} className="text-vacation-600 mr-3" />
            <h1 className="text-3xl font-semibold text-gray-900">Check-In & Check-Out Information</h1>
          </div>
          <p className="text-lg text-gray-600 mb-4">
            Everything you need to know for a smooth arrival and departure from our vacation rental.
            Please read this information carefully before your stay.
          </p>
          <p className="text-lg text-gray-600">
            Our preferred check-in method is in person, as we love the opportunity to welcome you, 
            show you around, and share our top local tips to make your stay truly unforgettable. 
            That said, we completely understand if you prefer a more independent arrival — our smooth 
            self-check-in process is available for your convenience, whenever suits you best.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <GuidebookSection title="Check-In Details" icon={<Key size={20} />} className="h-full">
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
                <li>If the gate is closed upon arrival, enter code <span className="font-semibold">23670#</span>.</li>
                <li>
                  Access the lockbox using the code that has been/or will be provided (1 day before arrival). 
                  <Dialog>
                    <DialogTrigger>
                      <Button variant="ghost" className="ml-2 inline-flex items-center mx-0 bg-vacation-50 px-[7px] py-0 my-0">
                        <Camera size={16} className="text-vacation-600 mr-1" />
                        <span className="text-vacation-600 text-sm">View photo</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <div className="relative">
                        <img src={lockboxImages[currentImageIndex]} alt={`Lockbox image ${currentImageIndex + 1}`} className="w-full rounded-lg" />
                        {lockboxImages.length > 1 && (
                          <div className="absolute inset-x-0 bottom-0 flex justify-center p-2 bg-black bg-opacity-50 rounded-b-lg">
                            <Button variant="outline" size="sm" onClick={onPrevImage} className="mr-2">Previous</Button>
                            <span className="text-white self-center">{currentImageIndex + 1}/{lockboxImages.length}</span>
                            <Button variant="outline" size="sm" onClick={onNextImage} className="ml-2">Next</Button>
                          </div>
                        )}
                      </div>
                    </DialogContent>
                  </Dialog>
                </li>
                <li>Retrieve the front door key from the lockbox.</li>
                <li>Return the key to the lockbox after your stay.</li>
              </ol>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Address & Directions</h3>
              <p className="text-gray-600 mb-2">
                Kaya Watervillas 84 <br /><br />
              </p>
              
              <div className="flex flex-col space-y-3">
                <Button size="sm" className="bg-vacation-600 hover:bg-vacation-700 text-white" onClick={() => window.open('https://maps.app.goo.gl/ERwpYVEs9uKZn8Ub9', '_blank')}>
                  <Map size={16} className="mr-2" />
                  Open in Maps
                </Button>
                <Button size="sm" className="bg-vacation-600 hover:bg-vacation-700 text-white" onClick={() => window.open('https://maps.app.goo.gl/VfAdWYULB9TYtB2j7', '_blank')}>
                  <Map size={16} className="mr-2" />
                  Route from the airport
                </Button>
              </div>
            </div>
          </div>
        </GuidebookSection>
        
        <GuidebookSection title="Check-Out Details" icon={<ArrowLeft size={20} />} className="h-full">
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
              <p className="text-gray-600 mb-4">
                At check-out, you don't need to worry about cleaning — we'll take care of everything! Just make sure to check for any personal items, and we wish you a safe journey!
              </p>
              <p className="text-gray-600">However, feel free to:</p>
              <ul className="list-disc ml-5 space-y-2 text-gray-600 mb-4">
                <li>Leave all used towels in the bathroom.</li>
                <li>Load and start the dishwasher before you leave.</li>
                <li>Take any trash to the designated bins outside.</li>
              </ul>
              <p className="text-gray-600">In case of self check-out:</p>
              <ul className="list-disc ml-5 space-y-2 text-gray-600">
                <li>Close and lock all doors.</li>
                <li>Return the keys to the lockbox.</li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Late Check-Out</h3>
              <p className="text-gray-600">
                If you'd like a late check-out, please inform us upon arrival.
                Subject to availability and may incur additional charges.
              </p>
            </div>
          </div>
        </GuidebookSection>
      </div>
    </>
  );
};

export default CheckInOutSection;
