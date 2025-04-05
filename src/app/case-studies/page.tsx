"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import AnimatedCard from '@/components/AnimatedCard';

export default function CaseStudiesPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const caseStudies = [
    {
      id: 'healthcare-security',
      title: 'Healthcare Provider Strengthens Security & Compliance',
      industry: 'Healthcare',
      challenge: 'A regional healthcare provider with 12 facilities was struggling with outdated security protocols and compliance concerns. They faced increasing threats from ransomware and had experienced several minor data breaches that compromised patient information.',
      solution: 'We implemented a comprehensive security overhaul including a zero-trust architecture, enhanced endpoint protection, staff training programs, and automated compliance monitoring systems specifically designed for HIPAA requirements.',
      results: [
        'Achieved full HIPAA compliance across all facilities',
        '99.9% reduction in security incidents',
        '47% faster system performance',
        'Seamless patient data access with robust protection'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 'manufacturing-cloud',
      title: 'Manufacturing Firm Reduces Downtime with Cloud Migration',
      industry: 'Manufacturing',
      challenge: 'A manufacturing company with multiple locations was experiencing significant downtime and data synchronization issues. Their legacy systems were unable to keep pace with production demands and remote locations had limited access to critical data.',
      solution: 'We engineered a phased cloud migration strategy, implementing a hybrid cloud solution with real-time data synchronization, automated backup systems, and specialized manufacturing applications optimized for cloud deployment.',
      results: [
        '98% reduction in system downtime',
        'Real-time data synchronization across all facilities',
        '35% reduction in IT operational costs',
        'Improved production efficiency by 27%'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 'financial-scaling',
      title: 'Financial Services Firm Scales Infrastructure for Growth',
      industry: 'Financial Services',
      challenge: 'A rapidly growing financial services company was struggling with scalability issues as their client base expanded. Their IT infrastructure couldn\'t support the increased transaction volumes, and they were experiencing performance bottlenecks and reliability issues.',
      solution: 'We designed a scalable IT architecture with load-balanced servers, containerized applications, and implemented DevOps practices for continuous integration/delivery. We also deployed advanced monitoring tools to identify bottlenecks before they impacted service.',
      results: [
        'Increased transaction processing capacity by 400%',
        'Reduced page load times by 65%',
        'Achieved 99.99% uptime for critical financial systems',
        'Supported 300% client growth with no performance degradation'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'retail-digital',
      title: 'Retail Chain Completes Digital Transformation',
      industry: 'Retail',
      challenge: 'A multi-location retail chain with both brick-and-mortar and online presence was struggling with disparate systems, inventory management problems, and an inconsistent customer experience across channels.',
      solution: 'We implemented an integrated digital platform connecting all retail locations, warehouse management, e-commerce, and customer service systems. We developed a custom data integration layer and deployed unified point-of-sale systems with real-time inventory tracking.',
      results: [
        'Unified customer experience across all channels',
        '42% reduction in inventory discrepancies',
        'Increased online sales conversion by 28%',
        'Reduced checkout times by 35% in physical locations'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    }
  ];

  const caseStudiesIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );

  return (
    <main className="flex flex-col items-center">
      <PageHero
        title="Case Studies"
        description="Real success stories from businesses that transformed their operations with our IT solutions."
        icon={caseStudiesIcon}
      />

      {/* Case Studies Overview */}
      <section className="w-full py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="animate-on-scroll opacity-0" style={{ animationDelay: `${index * 150}ms` }}>
                <Link href={`#${study.id}`} className="block h-full">
                  <AnimatedCard className="bg-background p-6 h-full">
                    <div className="flex flex-col h-full">
                      <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                        {study.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-heading-color">{study.industry}</h3>
                      <p className="text-text-secondary flex-grow">{study.title}</p>
                    </div>
                  </AnimatedCard>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Case Studies */}
      {caseStudies.map((study, index) => (
        <section key={study.id} id={study.id} className={`w-full py-20 px-4 ${index % 2 === 0 ? 'bg-background' : 'bg-secondary'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1 animate-on-scroll opacity-0">
                <div className="sticky top-24">
                  <div className="flex items-center mb-6">
                    <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mr-4">
                      {study.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-heading-color">{study.industry}</h3>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-6 text-heading-color">{study.title}</h2>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      Success Story
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 animate-on-scroll opacity-0" style={{ animationDelay: '150ms' }}>
                <div className="bg-background rounded-2xl p-8 shadow-md">
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-heading-color">Challenge</h3>
                    <p className="text-text-secondary">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 text-heading-color">Solution</h3>
                    <p className="text-text-secondary">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-heading-color">Results</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="w-full py-16 px-4 bg-secondary">
        <div className="max-w-5xl mx-auto">
          <div className="bg-background rounded-3xl p-12 text-center animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold mb-6 text-heading-color">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-10 text-text-secondary">
              Our team of experts is ready to help you achieve similar results. Let's discuss your business challenges and create a tailored IT solution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="gradient-button py-4 px-8 font-medium text-lg">
                Get Started Today
              </Link>
              <Link href="/services" className="bg-background py-4 px-8 border border-primary/20 rounded-full font-medium text-lg hover:border-primary transition-colors text-heading-color">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 