import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6 leading-relaxed">
            Welcome to <strong>UUHT</strong>, your trusted source for product recommendations 
            that enhance everyday life. We're passionate about helping you discover the best products 
            across home, kitchen, fitness, fashion, and daily essentials.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our mission is simple: to save you time and money by providing honest, thorough reviews 
            of products we genuinely believe in. We test, research, and compare products so you don't 
            have to, ensuring you make informed purchasing decisions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Cover</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-6">
            <li><strong>Kitchen & Dining:</strong> From air fryers to coffee makers, we review appliances that make cooking easier</li>
            <li><strong>Home Essentials:</strong> Bedding, cleaning devices like robot vacuums, and air purifiers</li>
            <li><strong>Fitness & Wellness:</strong> Massage guns, yoga mats, and home gym equipment</li>
            <li><strong>Fashion & Accessories:</strong> Clothing, shoes, jewelry, and accessories for every occasion</li>
            <li><strong>Daily Necessities:</strong> Products that make your everyday life more convenient</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Review Process</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Every product we recommend goes through rigorous evaluation. We consider factors like quality, 
            value for money, user feedback, expert opinions, and real-world performance. Our team spends 
            hours researching and testing to ensure our recommendations are trustworthy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Trust Us?</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We're independent reviewers who prioritize your interests. While we earn commissions through 
            affiliate partnerships, our recommendations are never influenced by these relationships. 
            We only recommend products we would personally use and trust.
          </p>

          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mt-8">
            <p className="text-gray-700 italic">
              "We believe everyone deserves access to quality products without the guesswork. 
              Let us help you find the perfect items for your lifestyle."
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
