export default function About() {
  return (
    <div className="min-h-screen bg-green-100 py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <section className="text-center mb-10 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About Check Before Go (CBG)
            </h1>
            <p className="text-lg text-muted-foreground">
              Buying a new or used vehicle should be one of the happiest moments of your life. But too often, dealerships make promises that don’t match reality.
            </p>
          </section>

          {/* Problems CBG Solves */}
          <section className="bg-background/60 border-2 p-6 rounded-lg mb-10 shadow-sm">
            <h2 className="text-2xl font-semibold text-primary mb-4 text-center">
              Common Customer Discoveries
            </h2>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground text-base">
              <li>Scratches, dents, or paint damage hidden under polish</li>
              <li>Odometers rolled back to show fewer kilometers</li>
              <li>“Brand new” vehicles that have already been test-driven roughly</li>
              <li>Low-quality or duplicate parts installed instead of genuine ones</li>
              <li>Commercial vehicles delivered with hidden mechanical issues that cause early breakdowns</li>
            </ul>
          </section>

          {/* What CBG Does */}
          <section className="space-y-6 text-muted-foreground text-base mb-10">
            <p>
              At Check Before Go (CBG), we are here to protect you from all these risks. We work only for customers — never for dealers. Our team specializes in independent Pre-Delivery Inspections (PDI) for both private and commercial vehicles. Every inspection comes with a detailed checklist, photos, videos, and OBD/diagnostic scans so you know the exact condition of your vehicle before taking delivery.
            </p>
            <p>
              But our service doesn’t stop at inspections. We also provide spare parts — both brand new and quality-tested second-hand parts — for cars, bikes, and commercial vehicles. Whether it’s a small replacement or a major component, we make sure you get genuine, reliable parts at a fair price.
            </p>
          </section>

          {/* Our Promise */}
          <section className="bg-background/60  border-2 p-6 rounded-lg shadow-inner mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4 text-center">Our Promise</h2>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground text-base">
              <li>100% independent and unbiased reporting</li>
              <li>Genuine parts for both private and commercial vehicles</li>
              <li>Affordable and transparent pricing</li>
              <li>No false promises, only honest service</li>
              <li>Customer-first approach for peace of mind</li>
            </ul>
          </section>

          {/* Tagline */}
          <section className="text-center">
            <p className="text-lg text-muted-foreground mb-4 italic">
              "When you choose CBG, you’re not just buying a car, bike, or spare part — you’re buying trust, safety, and confidence on the road. Because when it comes to vehicles, don’t rely on dealer words… always Check Before Go."
            </p>
            <p className="text-sm text-muted-foreground">— Check Before Go (CBG) Team</p>
          </section>
        </div>
      </div>
    </div>
  );
}
