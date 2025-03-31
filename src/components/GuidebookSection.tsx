
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GuidebookSectionProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const GuidebookSection = ({
  title,
  description,
  icon,
  children,
  className,
}: GuidebookSectionProps) => {
  return (
    <Card className={cn("border-0 shadow-sm hover:shadow transition-shadow duration-300", className)}>
      <CardHeader className="pb-2">
        <div className="flex items-center">
          {icon && <div className="mr-3 text-vacation-600">{icon}</div>}
          <CardTitle>{title}</CardTitle>
        </div>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default GuidebookSection;
