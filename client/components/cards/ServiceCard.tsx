import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, LucideIcon } from "lucide-react";

/**
 * Service Card Component
 * 
 * Reusable card component for displaying service pricing and features.
 * Used in the pricing section to show different inspection services.
 */

// Define the structure of service data
export interface ServiceData {
  title: string;
  price: string;
  originalPrice: string;
  discount: string;
  icon: LucideIcon;
  features: string[];
  isHighlighted?: boolean; // Optional: to highlight a popular service
}

// Component props interface
interface ServiceCardProps {
  service: ServiceData;
  onBookNow?: () => void; // Optional callback for book now button
}

export default function ServiceCard({ service, onBookNow }: ServiceCardProps) {
  const { title, price, originalPrice, discount, icon: IconComponent, features, isHighlighted } = service;

  return (
    <Card className={`relative border-2 hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 hover:scale-105 transform ${
      isHighlighted ? ' ring-1 ring-primary/20' : ''
    }`}>

      {/* Card Header - Mobile Optimized */}
      <CardHeader className="text-center pb-3 sm:pb-4">
        {/* Service Icon */}
        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary/20 hover:scale-110">
          <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary transition-transform duration-300 hover:scale-110" />
        </div>

        {/* Service Title */}
        <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>

        {/* Discount Badge */}
        <div className="text-xs sm:text-sm">
          <Badge variant="destructive" className="mb-2 text-xs inline-flex">
            {discount}
          </Badge>
        </div>
      </CardHeader>
      
      {/* Card Content - Mobile Optimized */}
      <CardContent className="pt-0 px-4 sm:px-6">
        {/* Pricing Display */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="flex items-baseline justify-center space-x-2">
            <span className="text-2xl sm:text-3xl font-bold text-primary transition-all duration-300 hover:scale-110 inline-block">{price}</span>
            <span className="text-base sm:text-lg text-muted-foreground line-through transition-opacity duration-300 hover:opacity-70">{originalPrice}</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">Starting price</p>
        </div>

        {/* Features List - Mobile Optimized */}
        <ul className="space-y-2 sm:space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      {/* Card Footer - Mobile Optimized */}
      <CardFooter className="px-4 sm:px-6 pt-3 sm:pt-6">
        <Button
          className="w-full hover:bg-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-lg transform text-sm sm:text-base py-2 sm:py-3 "
          onClick={onBookNow}

        >
          Book Now
        </Button>
      </CardFooter>
      
    </Card>
  );
}
