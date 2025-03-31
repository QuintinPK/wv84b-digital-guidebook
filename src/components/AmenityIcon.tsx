
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AmenityIconProps {
  icon: ReactNode;
  label: string;
  className?: string;
}

const AmenityIcon = ({
  icon,
  label,
  className,
}: AmenityIconProps) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="w-12 h-12 rounded-full bg-vacation-50 flex items-center justify-center text-vacation-600 mb-2">
        {icon}
      </div>
      <span className="text-sm text-gray-600 text-center">{label}</span>
    </div>
  );
};

export default AmenityIcon;
