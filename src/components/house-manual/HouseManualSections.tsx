
import InternetSection from "./InternetSection";
import ClimateControlSection from "./ClimateControlSection";
import AppliancesSection from "./AppliancesSection";
import HouseRulesSection from "./HouseRulesSection";
import BathroomFeaturesSection from "./BathroomFeaturesSection";

const HouseManualSections = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <InternetSection />
      <ClimateControlSection />
      <AppliancesSection />
      <HouseRulesSection />
      <BathroomFeaturesSection />
    </div>
  );
};

export default HouseManualSections;
