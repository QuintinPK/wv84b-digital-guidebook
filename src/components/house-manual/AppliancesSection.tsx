
import { ChevronRight, Coffee } from "lucide-react";
import GuidebookSection from "@/components/GuidebookSection";

const AppliancesSection = () => {
  return (
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
  );
};

export default AppliancesSection;
