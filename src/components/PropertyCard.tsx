
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bed, Users, MapPin } from "lucide-react";

interface PropertyCardProps {
  name: string;
  location: string;
  bedrooms: number;
  capacity: number;
  imageUrl: string;
}

const PropertyCard = ({
  name,
  location,
  bedrooms,
  capacity,
  imageUrl,
}: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg animate-fade-in">
      <div className="relative h-64 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <h2 className="text-white font-semibold text-2xl drop-shadow-sm">
            {name}
          </h2>
          <div className="flex items-center text-white/90 mt-1 drop-shadow-sm">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <div className="flex items-center text-gray-600">
              <Bed size={18} className="mr-1.5" />
              <span className="text-sm">{bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users size={18} className="mr-1.5" />
              <span className="text-sm">Up to {capacity} guests</span>
            </div>
          </div>
          <Button variant="outline" className="text-vacation-600 border-vacation-200 hover:bg-vacation-50">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
