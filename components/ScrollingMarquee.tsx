export default function ScrollingMarquee() {
  const benefits = [
    "✨ Clinically Proven Results",
    "💧 Deep Hydration",
    "🌟 Brightens Dark Circles", 
    "❄️ Cooling Metallic Roller",
    "🚀 Fast Absorption",
    "✨ Reduces Puffiness",
    "💎 Premium Ingredients",
    "🎯 Targeted Application"
  ];

  return (
    <section className="relative overflow-hidden bg-[var(--surface)] border-t border-[var(--hairline)]">
      <div className="flex">
        {/* First set */}
        <div className="flex animate-marquee whitespace-nowrap">
          {benefits.map((benefit, index) => (
            <div key={`first-${index}`} className="flex items-center px-8 py-4 text-sm font-medium text-[var(--ink)]/80">
              {benefit}
            </div>
          ))}
        </div>
        
        {/* Second set for seamless loop */}
        <div className="flex animate-marquee whitespace-nowrap">
          {benefits.map((benefit, index) => (
            <div key={`second-${index}`} className="flex items-center px-8 py-4 text-sm font-medium text-[var(--ink)]/80">
              {benefit}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
