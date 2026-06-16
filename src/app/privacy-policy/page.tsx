import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: June 15, 2026</p>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to UUHT ("we," "our," or "us"). We are committed to protecting your 
              privacy and ensuring the security of your personal information. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you visit 
              our website at www.10bestreviews.com.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Please read this Privacy Policy carefully. By accessing or using our website, you 
              acknowledge that you have read, understood, and agree to be bound by all the terms 
              of this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 ml-4">
              <li>Subscribe to our newsletter</li>
              <li>Contact us through our contact form</li>
              <li>Submit product reviews or comments</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              This information may include your name, email address, phone number, and any other 
              information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you visit our website, we automatically collect certain information about your device, 
              including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages viewed and time spent on pages</li>
              <li>Date and time of visits</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>To provide and maintain our website</li>
              <li>To send you newsletters and marketing communications (with your consent)</li>
              <li>To respond to your inquiries and comments</li>
              <li>To improve our website and user experience</li>
              <li>To analyze usage patterns and trends</li>
              <li>To detect and prevent fraud or abuse</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience 
              and gather information about how you use our website. Cookies are small data files 
              stored on your device.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can control cookies through your browser settings. However, disabling cookies may 
              limit your ability to use certain features of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Affiliate Links and Third-Party Services</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website contains affiliate links to third-party retailers. When you click on these 
              links and make a purchase, we may receive a commission. These third-party sites have 
              their own privacy policies, and we encourage you to review them.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We also use third-party services such as Google Analytics to understand how visitors 
              interact with our website. These services may collect information sent by your browser 
              as part of a web page request.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the Internet is 100% secure, and we cannot guarantee 
              absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, 
              including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>The right to access your personal information</li>
              <li>The right to correct inaccurate information</li>
              <li>The right to delete your personal information</li>
              <li>The right to object to processing</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website is not intended for children under the age of 13. We do not knowingly collect 
              personal information from children under 13. If you believe we have collected information 
              from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last Updated" date. You are 
              advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mt-4">
              <p className="text-gray-700"><strong>Email:</strong> privacy@10bestreviews.com</p>
              <p className="text-gray-700"><strong>Address:</strong> UUHT, New York, NY 10001</p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
