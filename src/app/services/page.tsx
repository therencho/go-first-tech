"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import AnimatedCard from '@/components/AnimatedCard';

export default function ServicesPage() {
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

  const services = [
    {
      id: 'strategic-it',
      title: 'Strategic IT Planning',
      description: 'Comprehensive technology strategy aligned with your business goals and future growth plans.',
      features: [
        'IT strategy development and roadmap planning',
        'Technology asset inventory and lifecycle management',
        'Vendor management and procurement assistance',
        'IT budget planning and cost optimization'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-primary">
          <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
          <line x1="2" y1="20" x2="2" y2="20"></line>
          <path d="M12 8v4"></path>
          <path d="M9 12h6"></path>
          <circle cx="9" cy="8" r="1"></circle>
          <circle cx="15" cy="8" r="1"></circle>
          <path d="M18 12a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v3c0 .6.4 1 1 1h10c.6 0 1-.4 1-1v-3z"></path>
        </svg>
      )
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure Assessment & Optimization',
      description: 'Evaluate and enhance your current IT infrastructure for optimal performance and scalability.',
      features: [
        'Network architecture review and optimization',
        'Server infrastructure assessment',
        'Storage solution evaluation and recommendations',
        'Performance monitoring and optimization'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-primary">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6" y2="6"></line>
          <line x1="6" y1="18" x2="6" y2="18"></line>
          <path d="M10 6h8"></path>
          <path d="M10 18h8"></path>
          <path d="M20 10v4"></path>
          <path d="M4 10v4"></path>
          <path d="M12 10v4"></path>
        </svg>
      )
    },
    {
      id: 'cloud',
      title: 'Cloud Computing Solutions',
      description: 'Expert guidance on cloud adoption, migration, and management strategies for your business.',
      features: [
        'Cloud readiness assessment',
        'Migration planning and execution',
        'Multi-cloud and hybrid cloud architecture',
        'Cloud cost management and optimization'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-primary">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
          <path d="M13 14l3-3-3-3"></path>
          <line x1="16" y1="11" x2="8" y2="11"></line>
        </svg>
      )
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Services',
      description: 'Protect your business from evolving threats with comprehensive security solutions.',
      features: [
        'Security assessment and vulnerability testing',
        'Compliance guidance (GDPR, HIPAA, PCI DSS)',
        'Security policy development',
        'Employee security awareness training'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-primary">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
      )
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation Services',
      description: 'Modernize your business operations through strategic technological innovation.',
      features: [
        'Business process automation',
        'Legacy system modernization',
        'Digital workplace solutions',
        'Technology adoption and change management'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-primary">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
          <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
          <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      )
    }
  ];

  const supportServices = [
    {
      id: 'remote-support',
      title: 'Remote Troubleshooting for PCs',
      description: 'Quick resolution of computer issues without the need for on-site visits.',
      features: [
        'Remote desktop support',
        'Hardware diagnostics and troubleshooting',
        'Performance optimization',
        'User access and permission management'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-primary">
          <rect x="3" y="3" width="18" height="12" rx="2" ry="2"></rect>
          <line x1="7" y1="15" x2="17" y2="15"></line>
          <line x1="12" y1="15" x2="12" y2="20"></line>
          <line x1="8" y1="20" x2="16" y2="20"></line>
          <path d="M10 7h4"></path>
          <path d="M12 7v4"></path>
        </svg>
      )
    },
    {
      id: 'software',
      title: 'Software Installation & Updates',
      description: 'Professional deployment and maintenance of software across your organization.',
      features: [
        'Software installation and configuration',
        'Patch management and updates',
        'License management',
        'Software compatibility assessment'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-primary">
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
          <path d="M9.5 11.5 V14"></path>
          <path d="M8 13 h3"></path>
        </svg>
      )
    },
    {
      id: 'network',
      title: 'Network Setup & Maintenance',
      description: 'Reliable network infrastructure design and ongoing support services.',
      features: [
        'Network design and implementation',
        'WiFi optimization and troubleshooting',
        'Router and switch configuration',
        'VPN setup and management'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-primary">
          <path d="M4 7h16M4 12h16M4 17h16"></path>
          <circle cx="9" cy="7" r="1"></circle>
          <circle cx="15" cy="12" r="1"></circle>
          <circle cx="9" cy="17" r="1"></circle>
          <path d="M5 7v5"></path>
          <path d="M19 12v5"></path>
          <path d="M9 8v3"></path>
          <path d="M15 13v3"></path>
        </svg>
      )
    },
    {
      id: 'security',
      title: 'Virus & Malware Removal',
      description: 'Effective remediation of security threats and preventative measures.',
      features: [
        'Malware detection and removal',
        'System cleaning and recovery',
        'Security software installation',
        'Prevention strategy implementation'
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-primary">
          <path d="M12 22c-4.41 0-8-3.59-8-8a8 8 0 0 1 8-8c.34 0 .67.03 1 .08"></path>
          <path d="M12 8v4l3 3"></path>
          <path d="M20.3 13.5c.4.6.7 1.3.7 2 0 0 0 2.5-4 2.5s-4-2.5-4-2.5a4 4 0 0 1 6.7-3.4"></path>
          <path d="M22 13.5h-2.5"></path>
          <path d="M18 9v2.5"></path>
          <path d="M20.3 13.5l-1.8-1.8"></path>
          <path d="M19.5 17l-1.8-1.8"></path>
        </svg>
      )
    }
  ];

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <PageHero
        title="Our Services"
        description="Comprehensive IT solutions designed to optimize your technology infrastructure and drive business growth."
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        }
      />

      {/* IT Consultancy Services */}
      <section className="w-full py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center animate-on-scroll opacity-0 text-heading-color">
            IT Consultancy Services
          </h2>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 animate-on-scroll opacity-0`}
              >
                <div className="lg:w-1/2">
                  <AnimatedCard className="h-full p-8 flex items-center justify-center">
                    <div className="w-full max-w-md h-64">
                      <div className="w-full h-full text-primary">
                        {service.icon}
                      </div>
                    </div>
                  </AnimatedCard>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 text-heading-color">{service.title}</h3>
                  <p className="text-text-secondary mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Support Services */}
      <section className="w-full py-16 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center animate-on-scroll opacity-0 text-heading-color">
            IT Support & Online Tech Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {supportServices.map((service) => (
              <div key={service.id} id={service.id} className="animate-on-scroll opacity-0">
                <AnimatedCard className="bg-background h-full">
                  <div className="p-8">
                    <div className="h-36 mb-6 flex items-center justify-center">
                      <div className="w-full max-w-[180px] h-full">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-heading-color">{service.title}</h3>
                    <p className="text-text-secondary mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center animate-on-scroll opacity-0 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-heading-color">
            Ready to elevate your IT infrastructure?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Contact us today to discuss how our services can help your business achieve its technology goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="gradient-button py-4 px-8 font-medium text-lg">
              Contact Us
            </Link>
            <Link href="/pricing" className="service-outline-hover py-4 px-8 border border-text-secondary/20 rounded-full font-medium text-lg hover:bg-secondary hover:text-foreground hover:border-transparent transition-colors text-text-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 