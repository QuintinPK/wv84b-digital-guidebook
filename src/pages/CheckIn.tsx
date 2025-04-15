
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ArrivalSection from "@/components/check-in/ArrivalSection";
import CheckInOutSection from "@/components/check-in/CheckInOutSection";
import WhatsIncludedSection from "@/components/check-in/WhatsIncludedSection";

const CheckIn = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const lockboxImages = ["/lovable-uploads/a44e2698-9bed-4a06-acd9-be9227d39962.png", "/lovable-uploads/4a10cb66-e714-4e66-9131-ce0a9ebea25f.png"];
  const gateKeypadImage = "/lovable-uploads/da9eaf81-9e05-4493-8ce0-8930a2be57e4.png";

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % lockboxImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + lockboxImages.length) % lockboxImages.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-10 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-vacation-600 hover:text-vacation-700">
              <ArrowLeft size={16} className="mr-2" />
              Back to Guidebook
            </Link>
          </div>
          
          <ArrivalSection gateKeypadImage={gateKeypadImage} />
          
          <CheckInOutSection
            lockboxImages={lockboxImages}
            currentImageIndex={currentImageIndex}
            onNextImage={nextImage}
            onPrevImage={prevImage}
          />
          
          <WhatsIncludedSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckIn;
