
import { ChevronRight, ShowerHead } from "lucide-react";
import GuidebookSection from "@/components/GuidebookSection";

const BathroomFeaturesSection = () => {
  return (
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
  );
};

export default BathroomFeaturesSection;
