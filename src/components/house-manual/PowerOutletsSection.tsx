
import { ChevronRight, Plug } from "lucide-react";
import GuidebookSection from "@/components/GuidebookSection";

const PowerOutletsSection = () => {
  return (
    <GuidebookSection
      title="Power outlets"
      icon={<Plug size={24} />}
      className="bg-red-50 border-2 border-red-200"
    >
      <div className="space-y-1 text-gray-600">
        <li className="flex items-center">
          <ChevronRight size={16} className="mr-2 text-vacation-500" />
          Most power outlets in the house are 220V (European standard)
        </li>
        <li className="flex items-start">
          <ChevronRight size={16} className="mr-2 mt-1 text-vacation-500" />
          <span>No worries if you're bringing 110V (American standard) devices – we provide a few power converters/adapters so you can easily charge and use your electronics anywhere without a problem</span>
        </li>
      </div>
    </GuidebookSection>
  );
};

export default PowerOutletsSection;
