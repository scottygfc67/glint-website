import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Link from "next/link";

// === BRAND COLORS ===
const BRAND = {
  primary: "#4A6B8A", // GLINT blue
  accent:  "#B8860B", // GLINT gold
};

// Paste your EXACT printed label here (verbatim, in order).
const FULL_INGREDIENTS_TEXT = `
INGREDIENTS: Aqua, Propylene Glycol, Bifida Ferment Filtrate, Niacinamide,
Hydrolyzed Vegetable Protein, Caffeine, (verify) Ginkgo Biloba Leaf Extract,
Aloe Barbadensis Leaf Extract, Panthenol, (verify) Saponins/Extract,
Glycerin, Ricinus Communis (Castor) Seed Oil, (verify) Squalane/Emollients,
Acer Palmatum (Japanese Maple) Leaf Extract, Aspergillus Ferment,
Glycyrrhiza Glabra (Licorice) Root Extract, 3-O-Ethyl Ascorbic Acid,
Hyaluronic Acid.
`;
// ↑ Replace with the exact text from your label/image when you copy it over.

// Focus ingredients to spotlight up top (short & benefit-forward)
const HIGHLIGHTS: { name: string; why: string }[] = [
  { name: "Niacinamide (B3)",           why: "Tone-evening & barrier support." },
  { name: "Bifida Ferment Filtrate",    why: "Postbiotic ferment to calm & fortify." },
  { name: "Caffeine",                   why: "De-puffs and energizes the look of skin." },
  { name: "Hyaluronic Acid",            why: "Binds water for instant plump hydration." },
  { name: "3-O-Ethyl Ascorbic Acid",    why: "Stable Vitamin C derivative for brightness." },
  { name: "Licorice Root Extract",      why: "Soothes & helps with the look of redness." },
  { name: "Aloe Barbadensis Leaf",      why: "Lightweight soothing hydration." },
  { name: "Ginkgo Biloba Leaf",         why: "Antioxidant support against daily stressors." },
  { name: "Hydrolyzed Vegetable Protein", why: "Conditioning peptides for a smooth feel." },
];

const FAQ = [
  {
    q: "Is GLINT okay for daily use?",
    a: "Yes—designed for everyday use. Patch test first and consult your professional if pregnant, nursing, or managing a condition.",
  },
  {
    q: "Will it feel heavy or sticky?",
    a: "Nope. The texture is lightweight and layers cleanly under SPF or makeup.",
  },
  {
    q: "Fragrance or harsh actives?",
    a: "We focus on gentle, effective actives (niacinamide, ferments, vitamin C derivative) and soothing botanicals. Check the full label below.",
  },
  {
    q: "What if I don’t see results?",
    a: "You’re covered by our 30-Day Money-Back Guarantee—try it completely risk-free.",
  },
];

export default function IngredientsPage() {
  return (
    <>
      <PageHero
        title="GLINT Ingredients"
        subtitle="Every drop, explained."
        description="Our formula blends proven actives with soothing botanicals for fast, visible results—without harshness."
        // Keep the hero visually in-family with your guarantee page
        // by using the same palette accents:
        // (Your PageHero likely handles background; if not, tweak styles there)
      />

      <div className="bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">

          {/* Focus / Highlights */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-3" style={{ color: BRAND.primary }}>
              The Focus Blend
            </h2>
            <p className="text-gray-700 mb-8">
              The hero actives & botanicals that define GLINT’s look-good, feel-good finish.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.name}
                  className="rounded-2xl border border-black/5 shadow-sm bg-white p-5"
                >
                  <div className="text-sm font-semibold" style={{ color: BRAND.primary }}>
                    {h.name}
                  </div>
                  <p className="mt-2 text-sm text-gray-700">{h.why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Full Ingredients */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-3" style={{ color: BRAND.primary }}>
              Full Ingredient List
            </h2>
            <p className="text-gray-700 mb-4">
              Exactly what’s on the label, in order:
            </p>
            <div className="rounded-2xl border border-black/5 bg-white p-6 leading-7 text-sm text-gray-800">
              <pre className="whitespace-pre-wrap font-sans">{FULL_INGREDIENTS_TEXT.trim()}</pre>
            </div>
            <p className="mt-3 text-xs text-gray-500">
              Patch test before first use. External use only. Store cool & dark.
            </p>
          </section>

          {/* FAQs / Objections */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6" style={{ color: BRAND.primary }}>
              Good to Know
            </h2>
            <div className="divide-y rounded-2xl border border-black/5 overflow-hidden">
              {FAQ.map((item, i) => (
                <details key={i} className="group">
                  <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-left font-medium">
                    <span>{item.q}</span>
                    <span className="ml-4 transition group-open:rotate-180">▾</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-700">{item.a}</div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mb-6">
            <div
              className="rounded-3xl p-8 sm:p-12 text-white"
              style={{
                background:
                  `linear-gradient(90deg, ${BRAND.primary} 0%, ${BRAND.accent} 100%)`,
              }}
            >
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold">
                    Ready to try GLINT?
                  </h3>
                  <p className="mt-2 text-white/90">
                    Covered by our 30-Day Money-Back Guarantee—no risk, all glow.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/api/checkout?qty=1"
                      className="inline-flex items-center rounded-2xl bg-white text-gray-900 px-6 py-3 font-semibold hover:opacity-90"
                      style={{ border: "1px solid rgba(0,0,0,0.06)" }}
                    >
                      Order Now
                    </Link>
                    <Link
                      href="/money-back-guarantee"
                      className="inline-flex items-center rounded-2xl bg-white/10 backdrop-blur px-6 py-3 font-semibold hover:bg-white/20"
                      style={{ border: "1px solid rgba(255,255,255,0.4)", color: "white" }}
                    >
                      Read the Guarantee
                    </Link>
                  </div>
                </div>
                <ul className="grid gap-2 text-sm">
                  <li className="flex items-center gap-2">• Gentle, effective actives</li>
                  <li className="flex items-center gap-2">• Ferments + antioxidants</li>
                  <li className="flex items-center gap-2">• Lightweight, non-greasy feel</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
}
