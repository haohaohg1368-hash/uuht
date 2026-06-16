import { notFound } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

// 模拟产品数据（实际项目中应从数据库或CMS获取）
const products = [
  {
    id: 1,
    title: "Best Air Fryers 2026",
    category: "Kitchen Appliances",
    description: "Top-rated air fryers for healthy cooking. Compare capacity, features, and prices.",
    price: "$89-$299",
    rating: 4.8,
    reviews: 2847,
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
  // ... 其他产品数据省略，实际使用时应完整填充
];

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm text-gray-600">
          <ol className="flex items-center space-x-2">
            <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-primary-600">Reviews</Link></li>
            <li>/</li>
            <li className="text-gray-900">{product.title}</li>
          </ol>
        </nav>

        {/* Product Header */}
        <div className="mb-8">
          <span className="inline-block bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
            {product.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{product.title}</h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center text-yellow-500 text-xl">
              {'★'.repeat(Math.floor(product.rating))}
              {product.rating % 1 !== 0 && '½'}
            </div>
            <span className="text-gray-600">
              {product.reviews.toLocaleString()} verified reviews
            </span>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed mb-6">{product.description}</p>
          
          <div className="text-2xl font-bold text-gray-900 mb-8">Price Range: {product.price}</div>
        </div>

        {/* Product Image Placeholder */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-96 flex items-center justify-center mb-12">
          <span className="text-9xl opacity-30">📦</span>
        </div>

        {/* Affiliate CTA */}
        <div className="bg-primary-50 border-2 border-primary-200 rounded-xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Buy?</h3>
          <p className="text-gray-700 mb-6">Click below to check current prices and availability on retailer websites.</p>
          <a
            href={product.affiliateLink}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-block bg-primary-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Check Price & Buy Now →
          </a>
          <p className="text-sm text-gray-500 mt-4">*Affiliate link - we may earn a commission at no extra cost to you</p>
        </div>

        {/* SEO Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed">{product.seoContent.intro}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
            <ul className="space-y-3">
              {product.seoContent.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Who Is This Best For?</h2>
            <p className="text-gray-700 leading-relaxed">{product.seoContent.bestFor}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Pros & Cons</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                  <span className="mr-2"></span> Pros
                </h3>
                <ul className="space-y-2">
                  {product.seoContent.pros.map((pro, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-green-600 mr-2">•</span>
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                  <span className="mr-2"></span> Cons
                </h3>
                <ul className="space-y-2">
                  {product.seoContent.cons.map((con, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-red-600 mr-2">•</span>
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Final Verdict</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Based on our comprehensive testing and research, this product stands out as one of the 
              best options in its category. It offers excellent value for money, reliable performance, 
              and features that meet the needs of most users.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're a first-time buyer or looking to upgrade, this product deserves serious 
              consideration. The combination of quality construction, user-friendly design, and positive 
              customer feedback makes it a safe choice for anyone in the market.
            </p>
          </section>
        </div>

        {/* Back to Reviews */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700"
          >
            ← Back to All Reviews
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
