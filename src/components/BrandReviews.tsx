import Link from 'next/link';
import Image from 'next/image';

const products = [
  {
    id: 1,
    title: "Best Air Fryers 2026",
    category: "Kitchen Appliances",
    description: "Top-rated air fryers for healthy cooking. Compare capacity, features, and prices.",
    price: "$89-$299",
    rating: 4.8,
    reviews: 2847,
    image: "/images/air-fryer.jpg",
    affiliateLink: "#",
    seoContent: {
      intro: "Air fryers have revolutionized home cooking, offering a healthier alternative to traditional frying while maintaining that crispy texture we all love. After testing over 50 models in 2026, we've identified the top performers that deliver exceptional results.",
      keyFeatures: [
        "Rapid air circulation technology for even cooking",
        "Digital controls with preset programs",
        "Easy-to-clean non-stick baskets",
        "Energy-efficient operation",
        "Compact designs for small kitchens"
      ],
      bestFor: "Health-conscious families looking to reduce oil consumption without sacrificing taste",
      pros: ["Uses 70-80% less oil than traditional frying", "Faster cooking times", "Easier cleanup", "Versatile cooking options"],
      cons: ["Learning curve for timing", "Limited capacity in smaller models", "Can be noisy during operation"]
    }
  },
  {
    id: 2,
    image: "/images/robot-vacuum.jpg",
    title: "Top Robot Vacuums for Pet Hair",
    category: "Home Cleaning",
    description: "Say goodbye to pet hair with these powerful robot vacuums designed for fur removal.",
    price: "$199-$799",
    rating: 4.7,
    reviews: 3521,
    affiliateLink: "#",
    seoContent: {
      intro: "Pet owners know the struggle of constant shedding. Modern robot vacuums have evolved to tackle this challenge head-on with specialized brushes, powerful suction, and smart navigation that ensures no corner is left untouched.",
      keyFeatures: [
        "Tangle-free brush rolls designed for pet hair",
        "HEPA filtration for allergen capture",
        "Smart mapping technology",
        "Self-emptying bases available",
        "App control and scheduling"
      ],
      bestFor: "Pet owners who want automated cleaning without constant maintenance",
      pros: ["Handles pet hair exceptionally well", "Reduces daily cleaning time", "Smart obstacle avoidance", "Long battery life"],
      cons: ["Higher initial investment", "Replacement parts can be expensive", "May struggle with very thick carpets"]
    }
  },
  {
    id: 3,
    image: "/images/massage-gun.jpg",
    title: "Best Massage Guns for Recovery",
    category: "Fitness & Wellness",
    description: "Professional-grade massage guns for muscle recovery and pain relief at home.",
    price: "$59-$399",
    rating: 4.6,
    reviews: 1893,
    affiliateLink: "#",
    seoContent: {
      intro: "Massage guns have become essential tools for athletes and fitness enthusiasts seeking effective muscle recovery. These percussion therapy devices help reduce soreness, improve circulation, and enhance flexibility—all from the comfort of your home.",
      keyFeatures: [
        "Multiple speed settings (1800-3200 RPM)",
        "Interchangeable massage heads",
        "Quiet operation technology",
        "Long battery life (4-6 hours)",
        "Portable carrying cases"
      ],
      bestFor: "Athletes, gym-goers, and anyone experiencing muscle tension or soreness",
      pros: ["Effective pain relief", "Improves blood flow", "Reduces recovery time", "Easy to use"],
      cons: ["Can be heavy for extended use", "Learning curve for proper technique", "Not suitable for certain medical conditions"]
    }
  },
  {
    id: 4,
    image: "/images/bedding.jpg",
    title: "Premium Bedding Sets Guide",
    category: "Bedroom Essentials",
    description: "Luxury bedding sets that transform your sleep experience. Thread counts, materials, and more.",
    price: "$79-$299",
    rating: 4.9,
    reviews: 4156,
    affiliateLink: "#",
    seoContent: {
      intro: "Quality bedding is an investment in better sleep and overall well-being. The right sheets, comforter, and pillows can regulate temperature, feel luxurious against your skin, and last for years with proper care.",
      keyFeatures: [
        "100% long-staple cotton or bamboo",
        "Thread counts between 300-600",
        "Hypoallergenic materials",
        "Deep pocket fitted sheets",
        "Machine washable convenience"
      ],
      bestFor: "Anyone looking to upgrade their sleep quality and bedroom aesthetics",
      pros: ["Noticeably softer feel", "Better temperature regulation", "Durable construction", "Washes well"],
      cons: ["Higher upfront cost", "May require special care", "True thread count claims vary by brand"]
    }
  },
  {
    id: 5,
    image: "/images/air-purifier.jpg",
    title: "Best Air Purifiers 2026",
    category: "Home Health",
    description: "Clean air solutions for allergies, pets, and pollution. HEPA filters tested.",
    price: "$149-$599",
    rating: 4.7,
    reviews: 2634,
    affiliateLink: "#",
    seoContent: {
      intro: "Indoor air quality significantly impacts health, especially for those with allergies or respiratory conditions. Modern air purifiers use advanced filtration systems to remove pollutants, allergens, and odors from your living space.",
      keyFeatures: [
        "True HEPA H13 filtration",
        "Activated carbon layers for odors",
        "Smart sensors and auto mode",
        "Quiet sleep modes (<25dB)",
        "Coverage up to 1500 sq ft"
      ],
      bestFor: "Allergy sufferers, pet owners, and those concerned about indoor air quality",
      pros: ["Noticeable air quality improvement", "Reduces allergy symptoms", "Removes odors effectively", "Energy efficient"],
      cons: ["Filter replacement costs", "Larger units take up space", "Some models are noisy on high settings"]
    }
  },
  {
    id: 6,
    image: "/images/running-shoes.jpg",
    title: "Women's Running Shoes Reviews",
    category: "Athletic Footwear",
    description: "Find your perfect running companion. Cushioning, support, and style combined.",
    price: "$89-$189",
    rating: 4.8,
    reviews: 5247,
    affiliateLink: "#",
    seoContent: {
      intro: "The right running shoes can prevent injuries, improve performance, and make every mile more enjoyable. We've tested hundreds of pairs to find the best options for different foot types, running styles, and budgets.",
      keyFeatures: [
        "Responsive cushioning technology",
        "Breathable mesh uppers",
        "Arch support options",
        "Durable rubber outsoles",
        "Lightweight construction (under 10oz)"
      ],
      bestFor: "Regular runners seeking comfort, support, and injury prevention",
      pros: ["Excellent shock absorption", "Comfortable for long distances", "Stylish designs", "Good durability"],
      cons: ["Break-in period required", "Need replacement every 300-500 miles", "Sizing varies by brand"]
    }
  },
  {
    id: 7,
    image: "/images/security-camera.jpg",
    title: "Smart Security Cameras Compared",
    category: "Smart Home",
    description: "Protect your home with intelligent security cameras featuring night vision and alerts.",
    price: "$79-$299",
    rating: 4.5,
    reviews: 3892,
    affiliateLink: "#",
    seoContent: {
      intro: "Home security has never been more accessible. Smart cameras offer real-time monitoring, motion detection, two-way audio, and cloud storage—all controllable from your smartphone.",
      keyFeatures: [
        "1080p or 4K video resolution",
        "Night vision capabilities",
        "Motion detection with person recognition",
        "Two-way audio communication",
        "Cloud and local storage options"
      ],
      bestFor: "Homeowners wanting affordable, DIY security solutions",
      pros: ["Easy installation", "Remote monitoring", "Deters potential intruders", "Records evidence"],
      cons: ["Subscription fees for cloud storage", "Requires stable WiFi", "Privacy concerns with some brands"]
    }
  },
  {
    id: 8,
    image: "/images/jewelry.jpg",
    title: "Affordable Jewelry Brands Under $100",
    category: "Fashion Accessories",
    description: "Look expensive on a budget. Quality jewelry that won't break the bank.",
    price: "$25-$99",
    rating: 4.6,
    reviews: 2156,
    affiliateLink: "#",
    seoContent: {
      intro: "You don't need to spend a fortune to look polished and stylish. These affordable jewelry brands offer quality pieces with genuine materials, thoughtful designs, and lasting appeal—all under $100.",
      keyFeatures: [
        "Sterling silver and gold-plated options",
        "Hypoallergenic materials",
        "Tarnish-resistant coatings",
        "Minimalist and statement designs",
        "Gift-ready packaging"
      ],
      bestFor: "Fashion-conscious shoppers seeking versatile accessories on a budget",
      pros: ["Affordable pricing", "Trendy designs", "Good quality for price", "Easy to layer"],
      cons: ["May tarnish over time", "Not heirloom quality", "Limited warranty"]
    }
  },
  {
    id: 9,
    image: "/images/coffee-maker.jpg",
    title: "Coffee Makers: Complete Guide",
    category: "Kitchen Appliances",
    description: "From drip to espresso, find the perfect coffee maker for your morning routine.",
    price: "$49-$399",
    rating: 4.7,
    reviews: 4523,
    affiliateLink: "#",
    seoContent: {
      intro: "A great cup of coffee starts with the right machine. Whether you prefer quick drip coffee, rich espresso, or smooth cold brew, there's a coffee maker designed to meet your specific preferences and schedule.",
      keyFeatures: [
        "Programmable brewing schedules",
        "Temperature control options",
        "Built-in grinders (select models)",
        "Thermal carafes for heat retention",
        "Single-serve compatibility"
      ],
      bestFor: "Coffee lovers who want café-quality drinks at home",
      pros: ["Saves money vs. coffee shops", "Customizable strength", "Convenient morning routine", "Various brewing methods"],
      cons: ["Daily cleaning required", "Counter space needed", "Quality beans add to cost"]
    }
  },
  {
    id: 10,
    image: "/images/yoga-mat.jpg",
    title: "Best Yoga Mats 2026",
    category: "Fitness Equipment",
    description: "Enhance your practice with premium yoga mats offering grip, cushioning, and durability.",
    price: "$29-$129",
    rating: 4.8,
    reviews: 3267,
    affiliateLink: "#",
    seoContent: {
      intro: "Your yoga mat is the foundation of your practice. The right mat provides stability for standing poses, cushioning for joints, and grip to prevent slipping—whether you're practicing gentle hatha or intense hot yoga.",
      keyFeatures: [
        "Non-slip textured surfaces",
        "Optimal thickness (4-6mm)",
        "Eco-friendly materials (natural rubber, cork)",
        "Lightweight and portable",
        "Easy to clean"
      ],
      bestFor: "Yoga practitioners of all levels seeking comfort and stability",
      pros: ["Excellent grip", "Joint protection", "Durable construction", "Eco-friendly options"],
      cons: ["Heavier mats less portable", "Natural materials cost more", "Requires regular cleaning"]
    }
  },
  {
    id: 11,
    image: "/images/cookware.jpg",
    title: "Stainless Steel Cookware Sets",
    category: "Kitchen Essentials",
    description: "Professional-quality stainless steel cookware for serious home cooks.",
    price: "$199-$599",
    rating: 4.9,
    reviews: 1876,
    affiliateLink: "#",
    seoContent: {
      intro: "Stainless steel cookware offers unmatched durability, even heating, and versatility. Unlike non-stick pans, stainless steel can handle high heat, metal utensils, and decades of daily use while maintaining its appearance.",
      keyFeatures: [
        "Tri-ply or five-ply construction",
        "Aluminum or copper cores for heat distribution",
        "Oven-safe to 500°F+",
        "Dishwasher safe",
        "Lifetime warranties available"
      ],
      bestFor: "Serious home cooks wanting restaurant-quality equipment",
      pros: ["Extremely durable", "Even heating", "No coating to wear off", "Versatile cooking methods"],
      cons: ["Learning curve for non-stick cooking", "Heavier than other materials", "Higher initial cost"]
    }
  },
  {
    id: 12,
    image: "/images/sneakers.jpg",
    title: "All-Day Comfort Sneakers",
    category: "Casual Footwear",
    description: "Stylish sneakers designed for all-day wear at work or on weekends.",
    price: "$69-$149",
    rating: 4.7,
    reviews: 4891,
    affiliateLink: "#",
    seoContent: {
      intro: "Modern work environments increasingly accept sneakers as appropriate footwear. The key is finding pairs that balance professional appearance with all-day comfort, arch support, and versatile styling.",
      keyFeatures: [
        "Memory foam or EVA cushioning",
        "Arch support technology",
        "Breathable materials",
        "Slip-resistant soles",
        "Neutral colors for versatility"
      ],
      bestFor: "Professionals who stand or walk frequently and value comfort",
      pros: ["All-day comfort", "Versatile styling", "Good arch support", "Lightweight"],
      cons: ["May show wear quickly", "Limited formal occasions", "Need multiple pairs for rotation"]
    }
  },
  {
    id: 13,
    image: "/images/floor-cleaner.jpg",
    title: "Floor Cleaners: Steam vs Traditional",
    category: "Cleaning Supplies",
    description: "Achieve sparkling floors with the most effective cleaning methods and tools.",
    price: "$39-$299",
    rating: 4.6,
    reviews: 2543,
    affiliateLink: "#",
    seoContent: {
      intro: "Clean floors are essential for a healthy home, but choosing between steam mops, spray mops, and traditional methods can be overwhelming. Each approach has distinct advantages depending on your floor type and cleaning needs.",
      keyFeatures: [
        "Chemical-free steam cleaning option",
        "Microfiber pads for trapping dirt",
        "Spray mechanisms for solution application",
        "Swivel heads for maneuverability",
        "Reusable/washable components"
      ],
      bestFor: "Households with hard flooring seeking efficient cleaning solutions",
      pros: ["Effective dirt removal", "Quick drying", "Less physical effort", "Sanitizes surfaces"],
      cons: ["Steam not suitable for all floors", "Pad replacement costs", "Water tank refilling needed"]
    }
  },
  {
    id: 14,
    image: "/images/watch.jpg",
    title: "Men's Watches Under $200",
    category: "Men's Accessories",
    description: "Quality timepieces that elevate your style without the luxury price tag.",
    price: "$79-$199",
    rating: 4.5,
    reviews: 3124,
    affiliateLink: "#",
    seoContent: {
      intro: "A good watch completes any outfit and serves as both a functional tool and style statement. You don't need to spend thousands to own a quality timepiece—these sub-$200 watches offer excellent craftsmanship and design.",
      keyFeatures: [
        "Quartz or automatic movements",
        "Scratch-resistant mineral crystal",
        "Water resistance (50m+)",
        "Leather or stainless steel bands",
        "Classic or sport designs"
      ],
      bestFor: "Men seeking versatile watches for work and casual wear",
      pros: ["Great value", "Reliable timekeeping", "Versatile styling", "Good build quality"],
      cons: ["Not investment pieces", "Bands may need replacement", "Limited resale value"]
    }
  },
  {
    id: 15,
    image: "/images/kitchen-gadgets.jpg",
    title: "Essential Kitchen Gadgets 2026",
    category: "Kitchen Tools",
    description: "Clever kitchen tools that save time and make cooking more enjoyable.",
    price: "$15-$79",
    rating: 4.7,
    reviews: 5678,
    affiliateLink: "#",
    seoContent: {
      intro: "The right kitchen gadgets can transform cooking from a chore into a pleasure. These innovative tools solve common problems, save prep time, and add functionality to your kitchen without taking up excessive space.",
      keyFeatures: [
        "Multi-functional designs",
        "Space-saving storage",
        "Dishwasher safe",
        "Durable materials",
        "Intuitive operation"
      ],
      bestFor: "Home cooks looking to streamline meal preparation",
      pros: ["Time-saving benefits", "Easy to use", "Affordable upgrades", "Fun to use"],
      cons: ["Can accumulate clutter", "Some are single-use", "Quality varies by brand"]
    }
  }
];

export default function BrandReviews() {
  return (
    <section id="featured-products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Product Reviews
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In-depth reviews and comparisons of the best products across every category. 
            Expert-tested recommendations to help you shop with confidence.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <article key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden flex flex-col group">
              {/* Product Image */}
              <div className="h-56 relative overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    {product.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded shadow-lg">
                    ⭐ {product.rating}
                  </span>
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3 flex-1">
                  {product.description}
                </p>

                {/* Rating & Reviews */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center text-yellow-500 mr-2">
                    {'★'.repeat(Math.floor(product.rating))}
                    {product.rating % 1 !== 0 && '½'}
                  </div>
                  <span className="text-sm text-gray-500">
                    ({product.reviews.toLocaleString()} reviews)
                  </span>
                </div>

                {/* Price Range */}
                <div className="mb-4">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                </div>

                {/* CTA Button */}
                <Link
                  href={`/products/${product.id}`}
                  className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:bg-primary-700 transition-colors duration-200 block"
                >
                  Read Full Review →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-colors duration-200"
          >
            View All Reviews
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
