import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
            <span className="text-sm font-semibold">Trusted by 50,000+ Shoppers</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Find the <span className="text-primary-600">Best Products</span> for Your Everyday Life
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            Expert reviews and honest recommendations for kitchen appliances, home essentials, 
            fitness gear, fashion, and more. We test so you don't have to.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="#featured-products"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Browse Top Reviews
            </Link>
            <Link
              href="/blog"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors duration-200"
            >
              Read Latest Guides
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">Products Tested</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">50K+</div>
              <div className="text-sm text-gray-600">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-1">4.9★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-50 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-300 rounded-full opacity-30 blur-2xl"></div>
    </section>
  );
}
