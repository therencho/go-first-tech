"use client";

import PageHero from '@/components/PageHero';

export default function PrivacyPolicyPage() {
  const privacyIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );

  return (
    <main className="flex flex-col items-center">
      <PageHero
        title="Privacy Policy"
        description="How we collect, use, and protect your information"
        icon={privacyIcon}
      />

      <section className="w-full py-12 px-4">
        <div className="max-w-4xl mx-auto bg-secondary p-8 rounded-xl shadow-sm">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-heading-color">1. Introduction</h2>
              <p className="text-foreground">
                At GoFirst Tech, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-foreground">
                This policy applies to information we collect on our website, in email, text, or other electronic messages between you and our website, and when you interact with our services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-heading-color">2. Information We Collect</h2>
              <p className="text-foreground">
                We may collect several types of information from and about users of our website, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-foreground">
                <li>Personal information such as name, email address, phone number, and company name when you fill out our contact forms or sign up for our services.</li>
                <li>Information about your internet connection, the equipment you use to access our website, and usage details.</li>
                <li>Records and copies of your correspondence if you contact us.</li>
                <li>Details of transactions you carry out through our website and of the fulfillment of your orders.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-heading-color">3. How We Use Your Information</h2>
              <p className="text-foreground">We use information that we collect about you or that you provide to us:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-foreground">
                <li>To present our website and its contents to you.</li>
                <li>To provide you with information, products, or services that you request from us.</li>
                <li>To fulfill any other purpose for which you provide it.</li>
                <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
                <li>To notify you about changes to our website or any products or services we offer.</li>
                <li>To improve our website and customer service.</li>
                <li>In any other way we may describe when you provide the information.</li>
                <li>For any other purpose with your consent.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-heading-color">4. Data Security</h2>
              <p className="text-foreground">
                We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. All information you provide to us is stored on secure servers behind firewalls.
              </p>
              <p className="text-foreground">
                The safety and security of your information also depends on you. We urge you to be careful about providing information in public areas of the website. The information you share in public areas may be viewed by any user of the website.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-heading-color">5. Cookies and Tracking Technologies</h2>
              <p className="text-foreground">
                We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
              <p className="text-foreground">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-heading-color">6. Third-Party Disclosure</h2>
              <p className="text-foreground">
                We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-heading-color">7. Changes to Our Privacy Policy</h2>
              <p className="text-foreground">
                We may update our privacy policy from time to time. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the website home page.
              </p>
              <p className="text-foreground">
                You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically visiting our website and this privacy policy to check for any changes.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-heading-color">8. Contact Information</h2>
              <p className="text-foreground">
                If you have any questions or concerns about this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-foreground font-medium">GoFirst Tech</p>
                <p className="text-foreground">Email: privacy@gofirsttech.com</p>
                <p className="text-foreground">Phone: (555) 123-4567</p>
              </div>
            </div>

            <div className="pt-4 text-sm text-foreground/80">
              <p>Last updated: {new Date().toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 