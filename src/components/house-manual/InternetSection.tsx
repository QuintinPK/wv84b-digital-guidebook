
import { ChevronRight, Wifi } from "lucide-react";
import GuidebookSection from "@/components/GuidebookSection";

const InternetSection = () => {
  return (
    <GuidebookSection
      title="Internet & Entertainment"
      description="WiFi and TV instructions"
      icon={<Wifi size={24} />}
    >
      <div className="space-y-4">
        <div>
          <h3 className="font-medium text-gray-900 mb-2">WiFi</h3>
          <ul className="space-y-1 text-gray-600">
            <li className="flex items-center">
              <ChevronRight size={16} className="mr-2 text-vacation-500" />
              Network: VacationHome_5G
            </li>
            <li className="flex items-center">
              <ChevronRight size={16} className="mr-2 text-vacation-500" />
              Password: Located on the fridge
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-900 mb-2">Smart TV</h3>
          <ul className="space-y-1 text-gray-600">
            <li className="flex items-center">
              <ChevronRight size={16} className="mr-2 text-vacation-500" />
              Use the Samsung remote for power and volume
            </li>
            <li className="flex items-center">
              <ChevronRight size={16} className="mr-2 text-vacation-500" />
              Netflix, Disney+, and HBO Max available
            </li>
            <li className="flex items-center">
              <ChevronRight size={16} className="mr-2 text-vacation-500" />
              Please log out of accounts before departure
            </li>
          </ul>
        </div>
      </div>
    </GuidebookSection>
  );
};

export default InternetSection;
