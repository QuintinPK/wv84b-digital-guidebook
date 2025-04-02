
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const HouseManualHeader = () => {
  return (
    <>
      <div className="mb-6">
        <Link to="/" className="inline-flex items-center text-vacation-600 hover:text-vacation-700">
          <ArrowLeft size={16} className="mr-2" />
          Back to Guidebook
        </Link>
      </div>
      
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">House Manual</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Everything you need to know about the property for a comfortable and enjoyable stay.
        </p>
      </div>
    </>
  );
};

export default HouseManualHeader;
