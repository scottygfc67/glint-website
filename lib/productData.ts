import { BAItem, Highlight, FAQItem, Step } from '@/components/BeforeAfterSection';

// Before & After Data
export const beforeAfterItems: BAItem[] = [
  {
    id: "emma",
    before: "/ba/emma-before.jpg",
    after: "/ba/emma-after.jpg",
    altBefore: "Emma under-eye before treatment",
    altAfter: "Emma under-eye after 3 weeks of GLINT",
    duration: "3 weeks",
    name: "Emma R.",
    location: "Glasgow, UK",
    concern: "Puffiness"
  },
  {
    id: "sarah",
    before: "/ba/sarah-before.jpg",
    after: "/ba/sarah-after.jpg",
    altBefore: "Sarah under-eye before treatment",
    altAfter: "Sarah under-eye after 2 weeks of GLINT",
    duration: "2 weeks",
    name: "Sarah M.",
    location: "Birmingham, UK",
    concern: "Dark circles"
  },
  {
    id: "jessica",
    before: "/ba/jessica-before.jpg",
    after: "/ba/jessica-after.jpg",
    altBefore: "Jessica under-eye before treatment",
    altAfter: "Jessica under-eye after 4 weeks of GLINT",
    duration: "4 weeks",
    name: "Jessica L.",
    location: "Manchester, UK",
    concern: "Puffiness"
  },
  {
    id: "charlotte",
    before: "/ba/charlotte-before.jpg",
    after: "/ba/charlotte-after.jpg",
    altBefore: "Charlotte under-eye before treatment",
    altAfter: "Charlotte under-eye after 3 weeks of GLINT",
    duration: "3 weeks",
    name: "Charlotte W.",
    location: "Edinburgh, UK",
    concern: "Dark circles"
  }
];

// How It Works Data
export const howItWorksSteps: Step[] = [
  {
    title: "Cool Metal Roller",
    body: "The stainless-steel roller delivers an instant cooling massage to help reduce morning puffiness."
  },
  {
    title: "Actives that Target Darkness",
    body: "Caffeine and a peptide complex visibly brighten the under-eye area and improve the look of dark circles."
  },
  {
    title: "Hydration Lock",
    body: "Hyaluronic acid + niacinamide attract and retain moisture so makeup sits smoother."
  }
];

// Ingredients Highlights Data
export const ingredientHighlights: Highlight[] = [
  {
    name: "Caffeine (3%)",
    benefit: "Helps de-puff and brighten the look of dark circles"
  },
  {
    name: "Peptide Complex",
    benefit: "Smoother, firmer-looking under-eyes"
  },
  {
    name: "Niacinamide (2%)",
    benefit: "Evens tone; supports barrier function"
  },
  {
    name: "Hyaluronic Acid",
    benefit: "Deep hydration; dewy finish"
  }
];

export const ingredientBadges = [
  "Fragrance-free",
  "Vegan",
  "Cruelty-free",
  "Suitable for daily AM/PM use"
];

// FAQ Data
export const faqItems: FAQItem[] = [
  {
    q: "Can I use it with concealer?",
    a: "Yes—allow ~60 seconds to absorb first."
  },
  {
    q: "Is it safe for sensitive skin?",
    a: "Fragrance-free and dermatologist reviewed; patch test advised."
  },
  {
    q: "Will it help with dark circles?",
    a: "Caffeine and niacinamide help brighten the look of darkness over time."
  },
  {
    q: "How quickly will I see results?",
    a: "Cooling effect is immediate for many; brightness improves with consistent AM/PM use."
  },
  {
    q: "Can I refrigerate it?",
    a: "Yes, chilling increases the cooling sensation."
  },
  {
    q: "Is it vegan and cruelty-free?",
    a: "Yes."
  },
  {
    q: "What's the shelf life?",
    a: "12 months after opening."
  },
  {
    q: "What if it doesn't work for me?",
    a: "30-day money-back guarantee."
  }
];

// Product Information Data - Simple structure without JSX
export const productInfoData = {
  "product-details": {
    title: "Product Details",
    sections: [
      { label: "What it is:", text: "A brightening, hydrating under-eye serum with a cooling metal roller for easy, mess-free application." },
      { label: "Feels like:", text: "Lightweight gel-serum that absorbs quickly without pilling." },
      { label: "Smells like:", text: "Fragrance-free." },
      { label: "Skin types:", text: "All, including sensitive (patch test advised)." },
      { label: "Size:", text: "10 ml / 0.35 fl oz." },
      { label: "Made with:", text: "Recyclable frosted glass." }
    ]
  },
  "key-benefits": {
    title: "Key Benefits",
    benefits: [
      "Helps reduce the look of puffiness in the morning",
      "Visibly brightens dark circles for a fresher look", 
      "Instant cooling roller feels like a mini eye massage",
      "Layers well under concealer; non-greasy, fast-absorbing"
    ]
  },
  "key-ingredients": {
    title: "Key Ingredients",
    ingredients: [
      { name: "Caffeine (3%)", description: "Energises and de-puffs the under-eye area" },
      { name: "Peptide Complex", description: "Smooths and firms the appearance" },
      { name: "Niacinamide (2%)", description: "Brightens and supports barrier function" },
      { name: "Hyaluronic Acid", description: "Long-lasting hydration" }
    ],
    additional: "Glycerin, Allantoin – comfort and soothe"
  },
  "how-to-use": {
    title: "How to Use",
    steps: [
      "Roll under each eye AM and/or PM on clean skin",
      "Tap gently with your ring finger to help absorption", 
      "Wait 60 seconds before makeup",
      "Pro tip: keep in the fridge for extra cooling"
    ]
  },
  "clinicals": {
    title: "Clinicals / User Trial",
    study: {
      description: "In a consumer study (n=52, 4 weeks):",
      results: [
        "92% said eyes looked less puffy in the morning",
        "88% said the under-eye area looked brighter", 
        "95% agreed the roller felt cooling and soothing"
      ],
      disclaimer: "Self-reported results; individual results vary."
    }
  },
  "shipping-returns": {
    title: "Shipping & Returns",
    shipping: [
      "Free worldwide shipping on qualifying orders",
      "Typical delivery: UK 2–4 days, EU 4–7 days, US 5–8 days"
    ],
    returns: [
      "30-day money-back guarantee",
      "See policy for details"
    ]
  }
};
