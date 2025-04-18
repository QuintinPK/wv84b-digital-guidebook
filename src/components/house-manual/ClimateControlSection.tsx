import { ChevronRight, Thermometer } from "lucide-react";
import GuidebookSection from "@/components/GuidebookSection";

const ClimateControlSection = () => {
  return <GuidebookSection title="Temperature control" description="Instructions for the AC's and fan's" icon={<Thermometer size={24} />}>
      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-gray-900 mb-2">AC remote</h3>
          <ul className="space-y-1 text-gray-600">
            <li className="flex items-center">
              <ChevronRight size={16} className="mr-2 text-vacation-500" />
              Located in the each room room with an AC
            </li>
            <li className="flex items-center">
              <ChevronRight size={16} className="mr-2 text-vacation-500" />
              Set between 20-24°C / 68-76°F for optimal efficiency
            </li>
            <li className="flex items-center">
              <ChevronRight size={16} className="mr-2 text-vacation-500" />
              Please turn off when windows are open
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-900 mb-2">Fans</h3>
          <ul className="space-y-1 text-gray-600">
            <li className="flex items-center">
              <ChevronRight size={16} className="mr-2 text-vacation-500" />
              Two portable standing fans for flexible cooling
            </li>
            <li className="flex items-center">
              <ChevronRight size={16} className="mr-2 text-vacation-500" />
              Easily movable to any desired location for convenient airflow
            </li>
          </ul>
        </div>
      </div>
    </GuidebookSection>;
};

export default ClimateControlSection;
