import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Affiliate Disclosure</h1>
        <p className="text-gray-600 mb-8">Last Updated: June 15, 2026</p>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="text-3xl mr-3">⚠️</span>
              Important Notice
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              This website contains affiliate links. When you click on these links and make a purchase, 
              we may receive a commission at no additional cost to you. This helps support our work and 
              allows us to continue providing free, high-quality content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Affiliate Links?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Affiliate links are special URLs that contain a tracking code. When you click on an 
              affiliate link and make a purchase, the retailer can identify that the sale came from 
              our website, and we receive a small commission.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These commissions help cover our operational costs, including product testing, research, 
              content creation, and website maintenance. Importantly, <strong>you never pay extra</strong> 
              when using our affiliate links—the price you see is the same as if you had visited the 
              retailer directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Honest Reviews</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We want to be completely transparent about how affiliate relationships work and how they 
              do—and do not—affect our content:
            </p>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="text-green-600 mr-2">✓</span> What We Do
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Test products thoroughly before reviewing them</li>
                <li>Research extensively using multiple sources</li>
                <li>Provide honest opinions based on actual performance</li>
                <li>Update reviews when products change or improve</li>
                <li>Disclose any sponsored content clearly</li>
                <li>Maintain editorial independence in all recommendations</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <span className="text-red-600 mr-2">✗</span> What We Don't Do
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Accept payment for positive reviews</li>
                <li>Let affiliate commissions influence our rankings</li>
                <li>Promote products we haven't researched or tested</li>
                <li>Hide our affiliate relationships from readers</li>
                <li>Recommend products solely for higher commissions</li>
                <li>Allow advertisers to control our editorial content</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Choose Products to Review</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our product selection process is driven by reader interest and market relevance, not by 
              commission rates. We consider:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Reader Requests:</strong> We regularly review products that our audience asks about</li>
              <li><strong>Market Trends:</strong> Popular and trending products in various categories</li>
              <li><strong>Expert Recommendations:</strong> Products recommended by industry professionals</li>
              <li><strong>Customer Feedback:</strong> Items with significant user reviews (positive or negative)</li>
              <li><strong>New Releases:</strong> Innovative products that represent advances in their category</li>
              <li><strong>Value Proposition:</strong> Products that offer good value at different price points</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Affiliate Partners</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We partner with reputable retailers and brands through established affiliate networks 
              including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Amazon Associates</li>
              <li>ShareASale</li>
              <li>CJ Affiliate (Commission Junction)</li>
              <li>Rakuten Advertising</li>
              <li>Impact</li>
              <li>Individual brand affiliate programs</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              These partnerships allow us to earn commissions on qualifying purchases made through 
              our links. We only promote products from retailers we trust and would personally shop with.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">FTC Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In accordance with the Federal Trade Commission's guidelines on endorsements and testimonials 
              (16 CFR Part 255), we disclose our material connections with companies whose products we review.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The FTC requires that we clearly and conspicuously disclose any relationship that might affect 
              the credibility of our endorsements. This Affiliate Disclosure page, along with individual 
              disclosures on relevant pages, fulfills this requirement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Affiliate Practices?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We believe in complete transparency. If you have questions about our affiliate relationships, 
              how we select products, or anything else related to our review process, please don't hesitate 
              to contact us.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> affiliates@10bestreviews.com</p>
              <p className="text-gray-700"><strong>Contact Form:</strong> <a href="/contact" className="text-primary-600 hover:text-primary-700 underline">Visit our Contact Page</a></p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You for Your Support</h2>
            <p className="text-gray-700 leading-relaxed">
              By using our affiliate links when making purchases, you're helping us continue to provide 
              free, independent product reviews and buying guides. We appreciate your trust and are 
              committed to earning it every day with honest, thorough, and helpful content.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
