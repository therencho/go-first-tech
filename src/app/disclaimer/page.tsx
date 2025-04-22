"use client";

import PageHero from '@/components/PageHero';

export default function DisclaimerPage() {
  const disclaimerIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  );

  return (
    <main className="flex flex-col items-center">
      <PageHero
        title="Disclaimer"
        description="Important information about our website and services"
        icon={disclaimerIcon}
      />

      <section className="w-full py-12 px-4">
        <div className="max-w-4xl mx-auto bg-secondary p-8 rounded-xl shadow-sm">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-heading-color">Website Disclaimer</h2>
              <p className="text-foreground">
                The information provided by GoFirst Tech ("we," "us," or "our") on our website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-heading-color">No Liability</h2>
              <p className="text-foreground">
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-heading-color">External Links</h2>
              <p className="text-foreground">
                The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
              </p>
              <p className="text-foreground">
                We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-heading-color">Professional Disclaimer</h2>
              <p className="text-foreground">
                The site cannot and does not contain IT advice. The IT information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
              </p>
              <p className="text-foreground">
                We do not provide any kind of IT advice. The use or reliance of any information contained on this site is solely at your own risk.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-heading-color">Errors and Omissions</h2>
              <p className="text-foreground">
                While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, GoFirst Tech is not responsible for any errors or omissions, or for the results obtained from the use of this information.
              </p>
              <p className="text-foreground">
                All information in this site is provided "as is," with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability, and fitness for a particular purpose.
              </p>
              <p className="text-foreground">
                In no event will GoFirst Tech, its related partnerships or corporations, or the partners, agents or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information in this site or for any consequential, special or similar damages, even if advised of the possibility of such damages.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-heading-color">Fair Use Disclaimer</h2>
              <p className="text-foreground">
                This site may contain copyrighted material the use of which has not always been specifically authorized by the copyright owner. We are making such material available in our efforts to advance understanding of IT issues. We believe this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the US Copyright Law.
              </p>
              <p className="text-foreground">
                If you wish to use copyrighted material from this site for your own purposes that go beyond fair use, you must obtain permission from the copyright owner.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-heading-color">Changes to Disclaimer</h2>
              <p className="text-foreground">
                We reserve the right to make changes and updates to this disclaimer without prior notice. Please review this disclaimer periodically for changes.
              </p>
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