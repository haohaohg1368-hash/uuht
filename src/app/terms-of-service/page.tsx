import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last Updated: June 15, 2026</p>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using the UUHT website ("Website"), you agree to be bound 
              by these Terms of Service ("Terms"). If you disagree with any part of these Terms, 
              you may not access the Website. These Terms apply to all visitors, users, and others 
              who access or use the Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              UUHT provides product reviews, buying guides, and recommendations across 
              various categories including home appliances, fitness equipment, fashion, and lifestyle 
              products. Our content is for informational purposes only and should not be considered 
              as professional advice.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We earn commissions through affiliate partnerships with retailers. When you click on 
              affiliate links and make purchases, we receive a commission at no additional cost to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree to use the Website only for lawful purposes and in accordance with these Terms. 
              You agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Use the Website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the Website</li>
              <li>Use automated systems to access the Website without our permission</li>
              <li>Interfere with or disrupt the integrity or performance of the Website</li>
              <li>Collect information about other users without their consent</li>
              <li>Post or transmit harmful code, viruses, or malware</li>
              <li>Impersonate another person or entity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Website and its original content, features, and functionality are owned by 10Best 
              Reviews and are protected by international copyright, trademark, patent, trade secret, 
              and other intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, 
              publicly perform, republish, download, store, or transmit any of the material on our 
              Website without our prior written consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Product Information and Reviews</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we strive to provide accurate and up-to-date information, product details, prices, 
              and availability are subject to change without notice. We do not warrant that product 
              descriptions or other content is accurate, complete, reliable, current, or error-free.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our reviews represent our honest opinions based on research and testing. However, individual 
              experiences may vary. We encourage you to conduct your own research before making purchasing 
              decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Affiliate Disclosure</h2>
            <p className="text-gray-700 leading-relaxed">
              This Website contains affiliate links. This means that if you click on certain links and 
              make a purchase, we receive a commission. These commissions help support our work and allow 
              us to continue providing free content. Our editorial content is never influenced by these 
              affiliate relationships. For more information, please see our Affiliate Disclosure page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To the fullest extent permitted by law, UUHT shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including without limitation, loss 
              of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Your access to or use of or inability to access or use the Website</li>
              <li>Any conduct or content of any third party on the Website</li>
              <li>Any content obtained from the Website</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Website is provided on an "AS IS" and "AS AVAILABLE" basis. We disclaim all warranties 
              of any kind, whether express or implied, including but not limited to implied warranties 
              of merchantability, fitness for a particular purpose, and non-infringement.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We do not warrant that the Website will be uninterrupted, timely, secure, or error-free, 
              that defects will be corrected, or that the Website is free of viruses or other harmful 
              components.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to defend, indemnify, and hold harmless UUHT and its licensors, 
              service providers, employees, agents, officers, and directors from and against any claims, 
              liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of 
              or relating to your violation of these Terms or your use of the Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, 
              we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes 
              a material change will be determined at our sole discretion. By continuing to access or use 
              our Website after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed and construed in accordance with the laws of the State of New York, 
              United States, without regard to its conflict of law provisions. Any legal action or proceeding 
              arising under these Terms will be brought exclusively in the federal or state courts located in 
              New York County, New York.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="text-gray-700"><strong>Email:</strong> legal@10bestreviews.com</p>
              <p className="text-gray-700"><strong>Address:</strong> UUHT, New York, NY 10001</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
