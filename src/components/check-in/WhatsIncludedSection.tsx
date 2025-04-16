
import { Bed, Utensils, Package, MessageSquareWarning } from "lucide-react";
import GuidebookSection from "@/components/GuidebookSection";

const WhatsIncludedSection = () => {
  return (
    <GuidebookSection 
      title="What's Included" 
      description="Everything provided for your comfort during your stay" 
      icon={<Package size={20} />} 
      className="mb-8"
    >
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
            <li className="flex items-start">
              <span className="text-vacation-600 mr-2">•</span>
              <span>220V to 110V power adapters</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 bg-vacation-50 p-4 rounded-lg flex items-center">
        <MessageSquareWarning className="mr-3 text-vacation-600" size={24} />
        <div>
          <p className="text-gray-700 font-medium mb-2">Fresh bedding, bath towels, and beach towels will be provided once a week.</p>
          <p className="text-gray-700 font-medium mb-2">Final cleaning is included in your stay. Want a little tidy-up halfway through? We can arrange that for an extra charge.</p>
          <p className="text-gray-600">If there's something that's not on this list but you want to know if we've got it at the Villa, just contact us.</p>
        </div>
      </div>
    </GuidebookSection>
  );
};

export default WhatsIncludedSection;
