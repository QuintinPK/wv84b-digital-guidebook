
import { ChevronRight, Trash } from "lucide-react";
import GuidebookSection from "@/components/GuidebookSection";

const GarbageRecyclingSection = () => {
  return (
    <GuidebookSection
      title="Garbage & Recycling"
      description="Trash and recycling information"
      icon={<Trash size={24} />}
    >
      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-gray-900 mb-2">Trash Pickup</h3>
          <ul className="space-y-1 text-gray-600">
            <li className="flex items-center">
              <ChevronRight size={16} className="mr-2 text-vacation-500" />
              The outside green garbage bins are emptied every Tuesday morning
            </li>
            <li className="flex items-center">
              <ChevronRight size={16} className="mr-2 text-vacation-500" />
              Please make sure to dispose of your trash before then
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-900 mb-2">Recycling</h3>
          <ul className="space-y-1 text-gray-600">
            <li className="flex items-center">
              <ChevronRight size={16} className="mr-2 text-vacation-500" />
              Waste separation at home is not yet common on Bonaire
            </li>
          </ul>
        </div>
      </div>
    </GuidebookSection>
  );
};

export default GarbageRecyclingSection;
