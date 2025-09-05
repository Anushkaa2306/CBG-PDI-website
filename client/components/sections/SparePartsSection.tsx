import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Users } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Spare Parts Section Component
 * 
 * This section allows customers to request spare parts for their vehicles.
 * Features:
 * - Information about the spare parts service
 * - List of required information for parts request
 * - Link to Google Form for parts requests
 * - Custom styling with dark theme
 */
export default function SparePartsSection() {
  // Animation state
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('#spare-parts-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Required information for spare parts request
  const requiredInformation = [
    "Vehicle Make & Model",
    "Year of Manufacture", 
    "VIN Number",
    "Part Description",
    "Quantity Needed",
    "Urgency Level"
  ];

  // Handle spare parts request - opens Google Forms
  const handleSparePartsRequest = () => {
    // You can replace this with your actual Google Form URL
    const googleFormUrl = 'https://forms.google.com/create';
    window.open(googleFormUrl, '_blank');
  };

  return (
    <section id="spare-parts-section" className="py-12 sm:py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">

        {/* Main Container with Custom Styling - Mobile Optimized */}
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}
          style={{
            backgroundColor: '#2f4f4f',
            margin: '2px auto 0',
            padding: '1.5rem',
            borderRadius: '1rem'
          }}
        >

          {/* Section Icon - Mobile Optimized */}
          <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-primary/10 rounded-full flex items-center justify-center transition-all duration-700 ease-out delay-200 hover:scale-110 hover:bg-primary/20 ${
            isVisible ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'
          }`}>
            <Wrench
              className="h-8 w-8 sm:h-10 sm:w-10 transition-transform duration-300 hover:rotate-12"
              style={{ color: 'rgba(100, 242, 19, 1)' }}
            />
          </div>

          {/* Section Title - Mobile Optimized */}
          <h2
            className={`text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 transition-all duration-700 ease-out delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
            style={{ color: 'rgba(229, 233, 241, 1)' }}
          >
            Need Spare Parts?
          </h2>

          {/* Section Description - Mobile Optimized */}
          <p
            className={`text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-2 transition-all duration-700 ease-out delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ color: 'rgba(181, 192, 211, 1)' }}
          >
            Get genuine spare parts for your vehicle. Fill out our detailed form
            and we'll provide you with the best options and pricing.
          </p>
          
          {/* Information Card - Mobile Optimized */}
          <Card className={`max-w-2xl mx-auto bg-white transition-all duration-700 ease-out delay-800 hover:shadow-xl hover:scale-105 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>

            {/* Card Header - Mobile Optimized */}
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="flex items-center justify-center space-x-2 text-lg sm:text-xl">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 hover:scale-110" />
                <span>Spare Parts Request</span>
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Fill out all necessary information and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>

            {/* Card Content - Required Information - Mobile Optimized */}
            <CardContent className="px-4 sm:px-6">
              <div className="space-y-3 sm:space-y-4 text-left">
                <h4 className="font-semibold text-center mb-3 sm:mb-4 text-sm sm:text-base">Required Information:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                  {requiredInformation.map((info, index) => (
                    <div
                      key={index}
                      className={`flex items-center transition-all duration-500 ease-out hover:text-primary py-1 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${1000 + index * 100}ms` }}
                    >
                      <span className="mr-2 text-primary">•</span>
                      <span>{info}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>

            {/* Card Footer - Action Button - Mobile Optimized */}
            <CardFooter className="px-4 sm:px-6 pt-4 sm:pt-6">
              <Button
                className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform text-sm sm:text-base py-3 sm:py-4"
                size="lg"
                onClick={handleSparePartsRequest}
              >
                <Wrench className="mr-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 hover:rotate-12" />
                Request Spare Parts
              </Button>
            </CardFooter>

          </Card>

          {/* Additional Information */}
          <div className={`mt-8 transition-all duration-700 ease-out delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p
              className="text-sm transition-colors duration-300 hover:opacity-100"
              style={{ color: 'rgba(181, 192, 211, 0.8)' }}
            >
              Our parts specialists will contact you within 24 hours with availability and pricing
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
