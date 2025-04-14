import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GuidebookSection from "@/components/GuidebookSection";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Key, Clock, MapPin, ArrowLeft, Wifi, Thermometer, ShieldAlert, CarFront, Map, Bed, Utensils, Package, Image } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Camera } from "lucide-react";
const CheckIn = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const lockboxImages = ["/lovable-uploads/a44e2698-9bed-4a06-acd9-be9227d39962.png", "/lovable-uploads/4a10cb66-e714-4e66-9131-ce0a9ebea25f.png"];
  const gateKeypadImage = "/lovable-uploads/da9eaf81-9e05-4493-8ce0-8930a2be57e4.png";
  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % lockboxImages.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + lockboxImages.length) % lockboxImages.length);
  };
  return <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-10 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-vacation-600 hover:text-vacation-700">
              <ArrowLeft size={16} className="mr-2" />
              Back to Guidebook
            </Link>
          </div>
          
          <GuidebookSection title="First Thing Upon Arrival" description="Important information to get you settled in" icon={<ShieldAlert size={20} />} className="mb-8">
            <div className="grid md:grid-cols-3 gap-6">
              
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
                  <Wifi size={20} className="text-vacation-600 mr-2" />
                  <h3 className="font-medium text-gray-800">WiFi Information</h3>
                </div>
                <p className="text-gray-600 mb-2">Network: <span className="font-bold">Ochenti4A</span></p>
                <p className="text-gray-600 mb-2">Password: <span className="font-bold">WVOchenti4A</span></p>
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
                <li>Please be respectful of neighbors - keep noise to a minimum between 11:00 PM and 7:00 AM.</li>
                <li>Smoking is only allowed in outdoor areas, provided ashtrays are used. No open flames or candles indoors.</li>
                <li>Pets are not permitted unless specifically arranged prior to booking.</li>
                <li>Maximum occupancy is 4 guests. Unauthorized guests are not allowed.</li>
                <li>Towels are for use within the villa. Please do not take towels to the beach. Beach towels are available.</li>
                <li>Subletting is not allowed. The villa may only be used by the registered guests.</li>
              </ul>
            </div>
          </GuidebookSection>
          
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
                            <div className="flex space-x-2">
                              {lockboxImages.map((image, index) => <img key={index} src={image} alt={`Lockbox image ${index + 1}`} className="w-full rounded-lg" />)}
                            </div>
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
                    At check-out, you don’t need to worry about cleaning — we’ll take care of everything! Just make sure to check for any personal items, and we wish you a safe journey!
                  </p>
                  <p className="text-gray-600"> However, feel free to:</p>
                <ul className="list-disc ml-5 space-y-2 text-gray-600 mb-4">
                    <li>Leave all used towels in the bathroom.</li>
                    <li>Load and start the dishwasher before you leave.</li>
                    <li>Take any trash to the designated bins outside.</li>
                </ul>
                  <p className="text-gray-600"> In case of self check-out:</p>
                <ul className="list-disc ml-5 space-y-2 text-gray-600">
                    <li>Close and lock all doors.</li>
                    <li>Return the keys to the lockbox.</li>
                </ul>
                </div>
                              
                <Separator />
                
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Late Check-Out</h3>
                  <p className="text-gray-600">
                    If you’d like a late check-out, please inform us upon arrival .
                    Subject to availability and may incur additional charges.
                  </p>
                </div>
              </div>
            </GuidebookSection>
          </div>
          
          <GuidebookSection title="What's Included" description="Everything provided for your comfort during your stay" icon={<Package size={20} />} className="mb-8">
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div className="space-y-4">
                <div className="flex items-center mb-2">
                  <Bed size={20} className="text-vacation-600 mr-2" />
                  <h3 className="font-semibold text-gray-800 text-lg">Bed and Bath</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-vacation-600 mr-2">•</span>
                    <span>Beds are made on arrival and we supply one bath towel and hand towel per person</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vacation-600 mr-2">•</span>
                    <span>The kingsize bed has four pillows (two per person); the single beds have a single pillow each</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vacation-600 mr-2">•</span>
                    <span>Hand wash for each wash basin and the kitchen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vacation-600 mr-2">•</span>
                    <span>Shower gel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vacation-600 mr-2">•</span>
                    <span>A starter supply of toilet paper</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vacation-600 mr-2">•</span>
                    <span>Hairdryer</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center mb-2">
                  <Utensils size={20} className="text-vacation-600 mr-2" />
                  <h3 className="font-semibold text-gray-800 text-lg">Kitchen</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-vacation-600 mr-2">•</span>
                    <span>Washing up liquid, a dishcloth and sponge</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vacation-600 mr-2">•</span>
                    <span>Tea towel</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vacation-600 mr-2">•</span>
                    <span>General cleaning products</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vacation-600 mr-2">•</span>
                    <span>Dishwasher tablets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vacation-600 mr-2">•</span>
                    <span>Coffee starter pack</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vacation-600 mr-2">•</span>
                    <span>Tea starter pack</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vacation-600 mr-2">•</span>
                    <span>Cooking basics (Pots and pans, oil, salt and pepper)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vacation-600 mr-2">•</span>
                    <span>Dishes and silverware (Bowls, chopsticks, plates, cups, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vacation-600 mr-2">•</span>
                    <span>Toaster</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center mb-2">
                  <Package size={20} className="text-vacation-600 mr-2" />
                  <h3 className="font-semibold text-gray-800 text-lg">Other Stuff</h3>
                </div>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-vacation-600 mr-2">•</span>
                    <span>4 beach chairs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vacation-600 mr-2">•</span>
                    <span>4 beach towels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-vacation-600 mr-2">•</span>
                    <span>Cooler</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-vacation-50 p-4 rounded-lg">
              <p className="text-gray-700 font-medium mb-2">Fresh bedding, bath towels, and beach towels will be provided once a week.</p>
              <p className="text-gray-600">If there's something that's not on this list but you want to know if we've got it at the Villa, just contact us.</p>
            </div>
          </GuidebookSection>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default CheckIn;