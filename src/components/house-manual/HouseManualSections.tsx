
import InternetSection from "./InternetSection";
import ClimateControlSection from "./ClimateControlSection";
import HouseRulesSection from "./HouseRulesSection";
import GarbageRecyclingSection from "./GarbageRecyclingSection";

const HouseManualSections = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <InternetSection />
      <ClimateControlSection />
      <GarbageRecyclingSection />
      <HouseRulesSection className="lg:col-span-full bg-vacation-50 border-2 border-vacation-500" />
    </div>
  );
};

export default HouseManualSections;
