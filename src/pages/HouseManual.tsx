
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HouseManualHeader from "@/components/house-manual/HouseManualHeader";
import HouseManualSections from "@/components/house-manual/HouseManualSections";

const HouseManual = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <HouseManualHeader />
          <HouseManualSections />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HouseManual;
