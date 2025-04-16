import { Plug } from "lucide-react";
import GuidebookSection from "@/components/GuidebookSection";
const PowerOutletsSection = () => {
  return <GuidebookSection title="Power outlets" icon={<Plug size={24} />} className="lg:col-span-full bg-red-50 border-2 border-red-200">
      <div className="space-y-1 text-gray-600">
        <p>Most power outlets in the house are 220V (European standard).</p>
        <p>No worries if you're bringing 110V (American standard) devices – we provide a few power converters/adapters so you can easily charge and use your electronics anywhere without a problem</p>
      </div>
    </GuidebookSection>;
};
export default PowerOutletsSection;