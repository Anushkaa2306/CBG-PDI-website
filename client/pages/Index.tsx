import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/sections/PricingSection";
import SparePartsSection from "@/components/sections/SparePartsSection";

/**
 * Homepage Component (Index)
 * 
 * This is the main homepage that brings together all the key sections:
 * 1. Hero Section - Main introduction and call-to-action
 * 2. Pricing Section - Service offerings and pricing
 * 3. Spare Parts Section - Parts request functionality
 * 
 * The page has been refactored into separate components for:
 * - Better code organization and readability
 * - Easier maintenance and updates
 * - Reusable components across the application
 * - Clear separation of concerns
 */
export default function Index() {
  return (
    <div className="min-h-screen">
      
      {/* Main Hero Section */}
      <HeroSection />
      
      {/* Service Pricing Section */}
      <PricingSection />
      
      {/* Spare Parts Request Section */}
      <SparePartsSection />
      
    </div>
  );
}
