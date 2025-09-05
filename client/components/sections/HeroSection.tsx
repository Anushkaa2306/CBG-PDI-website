import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";
import { useEffect, useState } from "react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

/**
 * Hero Section Component
 * 
 * This is the main hero section that appears at the top of the homepage.
 * It includes:
 * - Company branding and messaging
 * - Call-to-action button
 * - Trust indicators (statistics)
 * - Background image with car inspection theme
 */
export default function HeroSection() {
  // Animation state
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animations on component mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Trust indicators data
  const trustIndicators = [
    { value: "500+", label: "Inspections Completed" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "24h", label: "Report Delivery" }
  ];

  const email = "infocheckbeforego@gmail.com";
  const handleGetQuote = () => {
    const subject = encodeURIComponent("Get Quote Request");
    const mailto = `mailto:${email}?subject=${subject}`;
    window.open(mailto);
  };

  return (
    <section className="overflow-hidden" style={{ backgroundColor: '#2F4F4F' }}>
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-32">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">

          {/* Content - Mobile First (Slogan Priority) */}
          <div className="w-full lg:max-w-2xl text-center lg:text-left order-1 lg:order-1">

            {/* Badges - Subtle on mobile */}
            <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <Badge variant="secondary" className="bg-accent/80 text-accent-foreground transition-transform hover:scale-105 text-xs">
                Professional Inspections
              </Badge>
              <Badge variant="outline" className="border-white/30 text-white/90 transition-transform hover:scale-105 text-xs">
                Certified Experts
              </Badge>
            </div>

            {/* Main Heading - Supporting the slogan */}
            <h1 className={`text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6 leading-tight transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              Professional Vehicle Inspection Services
            </h1>

            {/* Slogan - Mobile Priority */}
            <div className={`mb-6 sm:mb-8 transition-all duration-700 ease-out delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2 leading-tight">
                We Check, You Go.
              </h2>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Your trusted vehicle inspection partner
              </p>
            </div>

            {/* Call to Action Button - Mobile Optimized */}
            <div className={`mb-6 sm:mb-8 transition-all duration-500 ease-out delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg sm:text-xl py-4 sm:py-5 px-8 sm:px-10 rounded-xl"
                onClick={handleGetQuote}
              >
                <Shield className="mr-3 h-6 w-6" />
                <span>Get Inspection Quote</span>
              </Button>
            </div>

            {/* Trust Indicators - Mobile Optimized */}
            <div className={`mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 text-white transition-all duration-1000 ease-out delay-800 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {trustIndicators.map((indicator, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-700 ease-out hover:scale-110 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${1000 + index * 200}ms` }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold">
                    <AnimatedCounter
                      target={indicator.value}
                      isVisible={isVisible}
                      duration={1500}
                    />
                  </div>
                  <div className="text-gray-200 text-xs sm:text-sm lg:text-base">{indicator.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image - Mobile Optimized (appears after slogan on mobile) */}
          <div className={`relative w-full transition-all duration-1000 ease-out delay-300 order-2 lg:order-2 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative h-40 sm:h-56 md:h-72 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500 hover:scale-105 transform transition-transform duration-700 mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              <img
                src="https://images.pexels.com/photos/13065692/pexels-photo-13065692.jpeg"
                alt="Professional car inspection - technician diagnosing vehicle"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              {/* Mobile-specific overlay text */}
              <div className="absolute bottom-4 left-4 right-4 lg:hidden">
                <p className="text-white text-sm font-medium bg-black/30 backdrop-blur-sm rounded px-3 py-2">
                  Professional Vehicle Inspection
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
