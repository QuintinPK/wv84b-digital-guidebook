
import { ChevronRight, Home } from "lucide-react";
import GuidebookSection from "@/components/GuidebookSection";

const HouseRulesSection = () => {
  return (
    <GuidebookSection
      title="House Rules"
      description="Important guidelines for your stay"
      icon={<Home size={24} />}
    >
      <div className="space-y-1 text-gray-600">
        <li className="flex items-center">
          <ChevronRight size={16} className="mr-2 text-vacation-500" />
          No smoking inside
        </li>
        <li className="flex items-center">
          <ChevronRight size={16} className="mr-2 text-vacation-500" />
          Quiet hours from 11pm-7am
        </li>
        <li className="flex items-center">
          <ChevronRight size={16} className="mr-2 text-vacation-500" />
          No parties or events
        </li>
        <li className="flex items-center">
          <ChevronRight size={16} className="mr-2 text-vacation-500" />
          Maximum occupancy is 4 overnight guests
        </li>
        <li className="flex items-center">
          <ChevronRight size={16} className="mr-2 text-vacation-500" />
          Lock all doors when leaving
        </li>
        <li className="flex items-center">
          <ChevronRight size={16} className="mr-2 text-vacation-500" />
          Pets are not permitted unless specifically arranged prior to booking
        </li>
      </div>
    </GuidebookSection>
  );
};

export default HouseRulesSection;
