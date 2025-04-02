
import { ChevronRight, Thermometer } from "lucide-react";
import GuidebookSection from "@/components/GuidebookSection";

const ClimateControlSection = () => {
  return (
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
  );
};

export default ClimateControlSection;
