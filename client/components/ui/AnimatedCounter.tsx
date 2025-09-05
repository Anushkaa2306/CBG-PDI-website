import { useEffect, useState } from "react";

/**
 * Animated Counter Component
 * 
 * Creates a smooth counting animation from 0 to the target value.
 * Used for trust indicators and statistics.
 */

interface AnimatedCounterProps {
  target: string; // Target value (e.g., "500+", "98%")
  duration?: number; // Animation duration in milliseconds
  isVisible: boolean; // Trigger animation when visible
}

export default function AnimatedCounter({ target, duration = 2000, isVisible }: AnimatedCounterProps) {
  const [current, setCurrent] = useState(0);
  
  // Extract number from target string
  const numericValue = parseInt(target.replace(/[^\d]/g, ''));
  const suffix = target.replace(/[\d]/g, '');

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.floor(easeOut * numericValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, numericValue, duration]);

  return (
    <span className="inline-block">
      {current}{suffix}
    </span>
  );
}
