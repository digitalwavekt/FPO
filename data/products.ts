export interface Product {
  slug: string;
  name: string;
  price: number;
  unit: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  usage: string[];
  image: string;
  origin: string;
  qualityNote: string;
  availability: string;
  packaging: string;
  category: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    slug: "coriander-powder",
    name: "Coriander Powder",
    price: 230,
    unit: "kg",
    shortDescription: "Farm-fresh coriander powder with authentic aroma and flavor.",
    description: "Our premium Coriander Powder is sourced directly from FPO-linked farmer collectives, ensuring unmatched freshness and purity. Carefully dried and ground to preserve essential oils, this powder adds a distinctive warm, citrusy flavor to your culinary creations.",
    benefits: [
      "Rich in dietary fiber and antioxidants",
      "Supports healthy digestion",
      "Adds authentic Indian flavor to dishes",
      "100% pure with no artificial additives"
    ],
    usage: [
      "Essential in curry powders and garam masala",
      "Perfect for marinades and chutneys",
      "Enhances flavor of soups and stews",
      "Ideal for tempering and garnishing"
    ],
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
    origin: "Sourced from FPO-certified farmer collectives in Rajasthan and Madhya Pradesh",
    qualityNote: "Lab-tested for purity. No added colors or preservatives.",
    availability: "Currently available at Jasrapur outlet",
    packaging: "Available in eco-friendly 500g and 1kg packs",
    category: "Spices",
    featured: true
  },
  {
    slug: "red-chilli-powder",
    name: "Red Chilli Powder",
    price: 290,
    unit: "kg",
    shortDescription: "Vibrant, pungent red chilli powder for bold Indian cooking.",
    description: "Experience the true heat and color of authentic Indian red chillies. Our Red Chilli Powder is made from carefully selected, sun-dried chillies ground to perfection. It delivers consistent pungency and vibrant color that elevates every dish.",
    benefits: [
      "High capsaicin content for natural metabolism support",
      "Rich source of Vitamin C and antioxidants",
      "Adds vibrant natural color to food",
      "Authentic taste from traditional varieties"
    ],
    usage: [
      "Base for curries, dals, and vegetable dishes",
      "Essential for pickles and preserves",
      "Used in spice blends and masalas",
      "Perfect for tandoori and barbecue marinades"
    ],
    image: "https://images.unsplash.com/photo-1588165171080-c89acfa5ee83?w=800&q=80",
    origin: "Handpicked from Guntur and Byadgi variety farms through FPO networks",
    qualityNote: "Premium grade, sun-dried and cold-ground for maximum flavor retention.",
    availability: "In stock at Jasrapur outlet",
    packaging: "Available in 250g, 500g, and 1kg packs",
    category: "Spices",
    featured: true
  },
  {
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    price: 290,
    unit: "kg",
    shortDescription: "Golden turmeric powder with high curcumin content.",
    description: "Our Turmeric Powder is crafted from the finest rhizomes, boiled, dried, and ground using traditional methods combined with modern hygiene standards. Known for its brilliant golden hue and high curcumin content, it is a staple of healthy Indian cooking.",
    benefits: [
      "High curcumin content with anti-inflammatory properties",
      "Powerful antioxidant support",
      "Promotes healthy skin and immunity",
      "Natural preservative and coloring agent"
    ],
    usage: [
      "Fundamental ingredient in all Indian curries",
      "Used in golden milk and health drinks",
      "Essential for rice dishes and lentils",
      "Traditional medicinal and cosmetic applications"
    ],
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&q=80",
    origin: "Cultivated by FPO member farmers using sustainable agricultural practices",
    qualityNote: "Salem and Erode variety blend. Minimum 3% curcumin content.",
    availability: "Available now at Jasrapur outlet",
    packaging: "Hygienic 500g and 1kg packaging options",
    category: "Spices",
    featured: true
  },
  {
    slug: "corn-daliya",
    name: "Corn Daliya",
    price: 40,
    unit: "kg",
    shortDescription: "Nutritious broken corn for wholesome meals and porridge.",
    description: "Corn Daliya (broken corn) is a nutritious, gluten-free alternative to wheat daliya. Sourced directly from local farmer organizations, it retains the natural goodness of whole corn. Perfect for healthy breakfasts, porridge, and traditional recipes.",
    benefits: [
      "High in dietary fiber and B-vitamins",
      "Gluten-free and easy to digest",
      "Good source of energy and complex carbohydrates",
      "Supports heart health and digestion"
    ],
    usage: [
      "Healthy breakfast porridge and upma",
      "Used in traditional Rajasthani dishes",
      "Ideal for soups and stews",
      "Can be used in baking and as thickener"
    ],
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800&q=80",
    origin: "Procured directly from local FPO corn growers",
    qualityNote: "Cleaned, sorted, and hygienically processed. No chemical treatment.",
    availability: "Available at Jasrapur outlet",
    packaging: "Standard 1kg and 5kg packs",
    category: "Grains",
    featured: true
  }
];

export const comingSoonProducts: Product[] = [
  {
    slug: "coming-soon-1",
    name: "New Product Coming Soon",
    price: 0,
    unit: "kg",
    shortDescription: "Exciting new farmer-linked product launching shortly.",
    description: "We are working with our farmer partners to bring you another authentic agricultural product. Stay tuned for updates.",
    benefits: [],
    usage: [],
    image: "",
    origin: "",
    qualityNote: "",
    availability: "Launching soon",
    packaging: "Details coming soon",
    category: "Coming Soon",
    featured: false
  },
  {
    slug: "coming-soon-2",
    name: "Seasonal Special Coming Soon",
    price: 0,
    unit: "kg",
    shortDescription: "Seasonal farmer special product arriving next harvest.",
    description: "A special seasonal offering directly from our FPO farmer network. Available soon after the next harvest cycle.",
    benefits: [],
    usage: [],
    image: "",
    origin: "",
    qualityNote: "",
    availability: "Coming next season",
    packaging: "Details coming soon",
    category: "Coming Soon",
    featured: false
  }
];

export const allProducts: Product[] = [...products, ...comingSoonProducts];
