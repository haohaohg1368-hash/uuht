import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Best Air Fryers of 2026: Complete Buyer's Guide",
    excerpt: "Transform your kitchen with healthy cooking. Discover how air fryers make crispy meals with 80% less oil, perfect for busy families.",
    category: "Kitchen Appliances",
    date: "June 15, 2026",
    readTime: "8 min read",
    image: "/images/blog-air-fryer.jpg"
  },
  {
    id: 2,
    title: "Best Robot Vacuums for Pet Owners: 2026 Reviews",
    excerpt: "Say goodbye to pet hair struggles. Smart robot vacuums that keep your home spotless while you enjoy quality time with your furry friends.",
    category: "Home Cleaning",
    date: "June 12, 2026",
    readTime: "10 min read",
    image: "/images/blog-robot-vacuum.jpg"
  },
  {
    id: 3,
    title: "Massage Gun Showdown: Top 10 Recovery Tools Compared",
    excerpt: "Level up your fitness recovery. Professional-grade massage guns that help athletes and gym-goers bounce back faster after intense workouts.",
    category: "Fitness & Wellness",
    date: "June 10, 2026",
    readTime: "12 min read",
    image: "/images/blog-massage-gun.jpg"
  },
  {
    id: 4,
    title: "Best Bedding Sets for Every Season: 2026 Guide",
    excerpt: "Create your dream bedroom sanctuary. Luxury bedding that transforms your sleep experience and makes every morning feel like a vacation.",
    category: "Bedroom Essentials",
    date: "June 8, 2026",
    readTime: "9 min read",
    image: "/images/blog-bedding.jpg"
  },
  {
    id: 5,
    title: "Air Purifiers That Actually Work: 2026 Testing Results",
    excerpt: "Breathe easier at home. Discover which air purifiers truly deliver clean, fresh air for allergy sufferers and health-conscious families.",
    category: "Home Health",
    date: "June 5, 2026",
    readTime: "11 min read",
    image: "/images/blog-air-purifier.jpg"
  },
  {
    id: 6,
    title: "Best Running Shoes for Women: 2026 Expert Picks",
    excerpt: "Find your perfect running companion. Comfortable, stylish shoes that support your fitness journey from morning jogs to weekend adventures.",
    category: "Athletic Footwear",
    date: "June 3, 2026",
    readTime: "10 min read",
    image: "/images/blog-running-shoes.jpg"
  },
  {
    id: 7,
    title: "Smart Home Security Cameras: Top 10 Choices for 2026",
    excerpt: "Protect what matters most. Modern security cameras that give you peace of mind with smart features and crystal-clear monitoring.",
    category: "Smart Home",
    date: "May 30, 2026",
    readTime: "9 min read",
    image: "/images/blog-security-camera.jpg"
  },
  {
    id: 8,
    title: "Best Jewelry Brands Under $100: Affordable Luxury Guide",
    excerpt: "Elevate your style without breaking the bank. Elegant jewelry pieces that add sophistication to any outfit, from office to evening.",
    category: "Fashion Accessories",
    date: "May 28, 2026",
    readTime: "7 min read",
    image: "/images/blog-jewelry.jpg"
  },
  {
    id: 9,
    title: "Coffee Makers Reviewed: From Espresso to Cold Brew",
    excerpt: "Start your day with café-quality coffee. Discover machines that bring barista-level brewing to your kitchen counter every morning.",
    category: "Kitchen Appliances",
    date: "May 25, 2026",
    readTime: "11 min read",
    image: "/images/blog-coffee-maker.jpg"
  },
  {
    id: 10,
    title: "Best Yoga Mats for Every Practice: 2026 Comparison",
    excerpt: "Enhance your mindfulness journey. Premium yoga mats that provide stability, comfort, and grip for practitioners of all levels.",
    category: "Fitness Equipment",
    date: "May 22, 2026",
    readTime: "8 min read",
    image: "/images/blog-yoga-mat.jpg"
  },
  {
    id: 11,
    title: "Stainless Steel Cookware Sets: Worth the Investment?",
    excerpt: "Unleash your inner chef. Professional-quality cookware that makes home cooking a joy and lasts for generations.",
    category: "Kitchen Essentials",
    date: "May 20, 2026",
    readTime: "10 min read",
    image: "/images/blog-cookware.jpg"
  },
  {
    id: 12,
    title: "Best Sneakers for All-Day Comfort: 2026 Edition",
    excerpt: "Step into urban style. Versatile sneakers that seamlessly transition from work meetings to weekend outings in comfort.",
    category: "Casual Footwear",
    date: "May 18, 2026",
    readTime: "8 min read",
    image: "/images/blog-sneakers.jpg"
  },
  {
    id: 13,
    title: "Floor Cleaners Compared: Steam Mops vs. Traditional",
    excerpt: "Achieve sparkling floors effortlessly. Modern cleaning solutions that make household chores quick and satisfying.",
    category: "Cleaning Supplies",
    date: "May 15, 2026",
    readTime: "9 min read",
    image: "/images/blog-floor-cleaner.jpg"
  },
  {
    id: 14,
    title: "Best Watches for Men Under $200: Style Meets Value",
    excerpt: "Complete your professional look. Quality timepieces that add elegance to any outfit without the luxury price tag.",
    category: "Men's Accessories",
    date: "May 12, 2026",
    readTime: "10 min read",
    image: "/images/blog-watch.jpg"
  },
  {
    id: 15,
    title: "Essential Kitchen Gadgets You Didn't Know You Needed",
    excerpt: "Upgrade your cooking game. Clever tools that save time, reduce stress, and make meal prep actually enjoyable.",
    category: "Kitchen Tools",
    date: "May 10, 2026",
    readTime: "7 min read",
    image: "/images/blog-kitchen-gadgets.jpg"
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
            <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 group">
              <Link href={`/blog/${post.id}`}>
                <div className="block">
                  {/* Blog Image */}
                  <div className="h-48 relative overflow-hidden bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-primary-600 uppercase tracking-wide">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors">
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
