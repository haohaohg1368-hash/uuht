import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Best Air Fryers of 2026: Complete Buyer's Guide",
    excerpt: "Discover the best air fryers for healthy cooking. We tested 50+ models to find the top performers in capacity, features, and value.",
    category: "Kitchen Appliances",
    date: "June 15, 2026",
    readTime: "8 min read",
    image: "/images/air-fryer.jpg"
  },
  {
    id: 2,
    title: "Best Robot Vacuums for Pet Owners: 2026 Reviews",
    excerpt: "Tired of pet hair? These robot vacuums handle fur, dander, and debris with ease. Find the perfect cleaning companion for your home.",
    category: "Home Cleaning",
    date: "June 12, 2026",
    readTime: "10 min read",
    image: "/images/robot-vacuum.jpg"
  },
  {
    id: 3,
    title: "Massage Gun Showdown: Top 10 Recovery Tools Compared",
    excerpt: "From budget-friendly to premium options, we review the best massage guns for muscle recovery and pain relief.",
    category: "Fitness & Wellness",
    date: "June 10, 2026",
    readTime: "12 min read",
    image: "/images/massage-gun.jpg"
  },
  {
    id: 4,
    title: "Best Bedding Sets for Every Season: 2026 Guide",
    excerpt: "Sleep better with our top picks for sheets, comforters, and pillows. Expert recommendations for all budgets and preferences.",
    category: "Bedroom Essentials",
    date: "June 8, 2026",
    readTime: "9 min read",
    image: "/images/bedding.jpg"
  },
  {
    id: 5,
    title: "Air Purifiers That Actually Work: 2026 Testing Results",
    excerpt: "Clean air matters. We lab-tested popular air purifiers to find which ones truly remove allergens, pollutants, and odors.",
    category: "Home Health",
    date: "June 5, 2026",
    readTime: "11 min read",
    image: "/images/air-purifier.jpg"
  },
  {
    id: 6,
    title: "Best Running Shoes for Women: 2026 Expert Picks",
    excerpt: "Find your perfect stride with our comprehensive guide to women's running shoes. Tested by real runners for comfort and performance.",
    category: "Athletic Footwear",
    date: "June 3, 2026",
    readTime: "10 min read",
    image: "/images/running-shoes.jpg"
  },
  {
    id: 7,
    title: "Smart Home Security Cameras: Top 10 Choices for 2026",
    excerpt: "Protect your home with the best security cameras. Features, pricing, and privacy considerations explained.",
    category: "Smart Home",
    date: "May 30, 2026",
    readTime: "9 min read",
    image: "/images/security-camera.jpg"
  },
  {
    id: 8,
    title: "Best Jewelry Brands Under $100: Affordable Luxury Guide",
    excerpt: "Look expensive without breaking the bank. Our favorite affordable jewelry brands that deliver quality and style.",
    category: "Fashion Accessories",
    date: "May 28, 2026",
    readTime: "7 min read",
    image: "/images/jewelry.jpg"
  },
  {
    id: 9,
    title: "Coffee Makers Reviewed: From Espresso to Cold Brew",
    excerpt: "Start your day right. We tested drip coffee makers, espresso machines, and cold brew systems to find the best options.",
    category: "Kitchen Appliances",
    date: "May 25, 2026",
    readTime: "11 min read",
    image: "/images/coffee-maker.jpg"
  },
  {
    id: 10,
    title: "Best Yoga Mats for Every Practice: 2026 Comparison",
    excerpt: "Enhance your yoga practice with the right mat. Thickness, grip, durability, and eco-friendly options reviewed.",
    category: "Fitness Equipment",
    date: "May 22, 2026",
    readTime: "8 min read",
    image: "/images/yoga-mat.jpg"
  },
  {
    id: 11,
    title: "Stainless Steel Cookware Sets: Worth the Investment?",
    excerpt: "Professional-quality cookware for home chefs. We compare top stainless steel sets for durability and performance.",
    category: "Kitchen Essentials",
    date: "May 20, 2026",
    readTime: "10 min read",
    image: "/images/cookware.jpg"
  },
  {
    id: 12,
    title: "Best Sneakers for All-Day Comfort: 2026 Edition",
    excerpt: "Stand and walk comfortably all day long. Our top picks for work-appropriate sneakers that don't sacrifice style.",
    category: "Casual Footwear",
    date: "May 18, 2026",
    readTime: "8 min read",
    image: "/images/sneakers.jpg"
  },
  {
    id: 13,
    title: "Floor Cleaners Compared: Steam Mops vs. Traditional",
    excerpt: "Get sparkling clean floors. We test steam mops, spray mops, and traditional methods to find the most effective solutions.",
    category: "Cleaning Supplies",
    date: "May 15, 2026",
    readTime: "9 min read",
    image: "/images/floor-cleaner.jpg"
  },
  {
    id: 14,
    title: "Best Watches for Men Under $200: Style Meets Value",
    excerpt: "Elevate your wrist game without overspending. Quality timepieces that look expensive but won't break the bank.",
    category: "Men's Accessories",
    date: "May 12, 2026",
    readTime: "10 min read",
    image: "/images/watches.jpg"
  },
  {
    id: 15,
    title: "Essential Kitchen Gadgets You Didn't Know You Needed",
    excerpt: "Upgrade your cooking game with these clever kitchen tools. From prep to cleanup, make cooking easier and more fun.",
    category: "Kitchen Tools",
    date: "May 10, 2026",
    readTime: "7 min read",
    image: "/images/kitchen-gadgets.jpg"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Product Reviews & Buying Guides
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert reviews, honest opinions, and comprehensive buying guides to help you 
            make smart purchasing decisions for every aspect of your life.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All Posts", "Kitchen", "Home", "Fitness", "Fashion", "Electronics"].map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border-2 border-gray-300 text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-200">
              <Link href={`/blog/${post.id}`}>
                <div className="block">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <span className="text-primary-600 text-6xl">📦</span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-primary-600 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-primary-600 font-medium text-sm hover:text-primary-700">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Never Miss a Review
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Subscribe to get the latest product reviews, buying guides, and exclusive deals 
            delivered straight to your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}
