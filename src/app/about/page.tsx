"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedCard from '@/components/AnimatedCard';
import PageHero from '@/components/PageHero';

export default function AboutPage() {
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

  const team = [
    {
      name: 'Alex Morgan',
      role: 'CEO & Founder',
      bio: 'Over 15 years of experience in IT leadership and strategic planning.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Jamie Chen',
      role: 'CTO',
      bio: 'Expert in cloud architecture and cybersecurity implementation.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Taylor Williams',
      role: 'Head of Support',
      bio: 'Leads our world-class technical support team with a focus on client satisfaction.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Sam Rivera',
      role: 'Senior Consultant',
      bio: 'Specializes in digital transformation and enterprise IT strategy.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const values = [
    {
      title: 'Client-Focused Solutions',
      description: 'We prioritize understanding your unique business needs to deliver tailored IT solutions that drive real results.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Technical Excellence',
      description: 'Our team maintains the highest standards of technical expertise, continuously learning to stay ahead of industry trends.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Integrity & Transparency',
      description: 'We believe in honest communication and transparent business practices in all our client relationships.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Proactive Support',
      description: 'We anticipate potential issues and address them before they impact your business operations.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const aboutIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );

  return (
    <main className="flex flex-col items-center">
      {/* Use the PageHero component */}
      <PageHero 
        title="About Us"
        description="Helping businesses leverage technology for growth and innovation since 2010."
        icon={aboutIcon}
      />

      {/* Our Story */}
      <section className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold mb-6 text-custom-heading">Our Story</h2>
            <div className="space-y-4 text-custom">
              <p>
                GoFirst Tech was founded with a simple mission: to provide businesses with enterprise-level IT solutions that were previously only accessible to large corporations. We believe that every business deserves reliable technology that enables growth.
              </p>
              <p>
                Starting as a small team of IT consultants in 2010, we've grown into a comprehensive technology partner for businesses across multiple industries. Our approach has always been to focus on understanding our clients' unique needs and delivering tailored solutions that directly impact their success.
              </p>
              <p>
                Today, our team of certified experts continues to uphold our founding principles while expanding our service offerings to meet evolving technology needs in an increasingly digital business environment.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 animate-on-scroll opacity-0">
            <AnimatedCard>
              <div className="relative h-[500px] w-full rounded-xl overflow-hidden bg-custom-secondary p-8 flex items-center justify-center">
                <svg width="100%" height="100%" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="animated-tech-svg">
                  {/* Background elements */}
                  <circle cx="300" cy="250" r="200" fill="currentColor" className="text-primary" opacity="0.08" />
                  <circle cx="300" cy="250" r="150" fill="currentColor" className="text-primary" opacity="0.08">
                    <animate attributeName="r" values="150;160;150" dur="8s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="300" cy="250" r="100" fill="currentColor" className="text-primary" opacity="0.08">
                    <animate attributeName="r" values="100;110;100" dur="6s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Central company icon */}
                  <g transform="translate(300, 250)">
                    <circle cx="0" cy="0" r="60" fill="currentColor" className="text-primary" opacity="0.2" />
                    <circle cx="0" cy="0" r="50" fill="currentColor" stroke="currentColor" className="text-primary" opacity="0.9" strokeWidth="2">
                      <animate attributeName="r" values="50;55;50" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <g transform="translate(-20, -10) scale(0.08)">
                      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c1.6 42.2 18.4 67 39.3 68.3c6.1-7.4 15.4-12.1 25.8-12.1h16c1.6-7.3 7.6-13.1 15.3-14.4c8.7-1.4 16.9 3.1 20.4 10.8l8.5 17.1c-7.4 10.6-11.9 23.3-12.3 37.1c0 4.2 .4 8.4 1.1 12.5l-.2 0-.2 0c-25.5.9-41 .6-57-7.5c-14.4-7.4-30.6-9.8-46.6-6.8c-16.7 3.1-34.9 1.6-50.2-9.5c-15.3-11.1-25.9-28.5-32.9-55.7c-7.8-30.4-11.8-73.3 4.4-106.5l-25-15.7c-8.2-5.1-11.5-15.4-7.9-24.3l19-48c3.5-8.9 12.5-14.1 21.8-12.3L155 119l80.3-22.5c9.7-2.7 19.8 2.1 23.7 11.3l50 119.4c4.2 10-1.7 21.1-12.3 23.2L213.5 275l-27.6 7.7c11.8 14 22.7 17.3 32.9 17.3c10.3 0 20.2-3.2 20.2-3.2h16c11 0 20.2 7.8 22.4 18.2c16.4 2.5 30.8 10.6 41.5 22.3l8.5 17.1c6.1 12.1-.9 27-14.5 30.7c-9.9 2.7-20.1-1-26-9.2c-8.7-12.2-23-19.9-38.7-19.9h-2.6c-5.9 27.2-30.3 47.5-59.2 47.5s-53.3-20.3-59.2-47.5H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h16c15.8 0 30.2 7.7 39 19.9c5.8 8.1 16 11.8 26 9.2c13.6-3.6 20.6-18.5 14.5-30.7l-5.5-11.3c-3.8-8-12.7-11.6-20.3-8.2c-4.9 1.9-10.2 2.9-15.7 2.9c-35.7 0-60.3-54.7-61.7-78.1c-.5-8.4 8.4-14.1 15.9-10.1l78.3 42.5c9.9 5.3 13.9 17.5 9.1 27.7l-2.3 4.9l25.2-7c9.9-2.8 17.5-10.2 20.4-20.1c-9.4-6.3-15.7-17.1-15.7-29.2c0-8.7 3.1-16.6 8.2-22.9L155.5 129l-0.8-0.3z" fill="currentColor" className="text-foreground" strokeWidth="0" />
                    </g>
                  </g>
                  
                  {/* Connection lines */}
                  <g>
                    {/* Journey through time nodes */}
                    <g>
                      {/* 2010 - Foundation */}
                      <g transform="translate(150, 180)">
                        <circle cx="0" cy="0" r="30" fill="currentColor" className="text-primary" opacity="0.2" />
                        <circle cx="0" cy="0" r="20" stroke="currentColor" fill="none" className="text-primary" strokeWidth="2" />
                        <g transform="translate(-10, -10) scale(0.04)">
                          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" fill="currentColor" className="text-primary" strokeWidth="0" />
                        </g>
                      </g>
                      <line x1="180" y1="180" x2="270" y2="230" stroke="currentColor" className="text-primary" strokeWidth="2" strokeDasharray="4 4">
                        <animate attributeName="stroke-dashoffset" values="0;40" dur="3s" repeatCount="indefinite" />
                      </line>
                      
                      {/* 2015 - Growth */}
                      <g transform="translate(200, 350)">
                        <circle cx="0" cy="0" r="30" fill="currentColor" className="text-primary" opacity="0.2" />
                        <circle cx="0" cy="0" r="20" stroke="currentColor" fill="none" className="text-primary" strokeWidth="2" />
                        <g transform="translate(-10, -10) scale(0.04)">
                          <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" fill="currentColor" className="text-primary" strokeWidth="0" />
                        </g>
                      </g>
                      <line x1="220" y1="330" x2="275" y2="275" stroke="currentColor" className="text-primary" strokeWidth="2" strokeDasharray="4 4">
                        <animate attributeName="stroke-dashoffset" values="0;40" dur="3s" repeatCount="indefinite" />
                      </line>
                      
                      {/* 2020 - Innovation */}
                      <g transform="translate(450, 300)">
                        <circle cx="0" cy="0" r="30" fill="currentColor" className="text-primary" opacity="0.2" />
                        <circle cx="0" cy="0" r="20" stroke="currentColor" fill="none" className="text-primary" strokeWidth="2" />
                        <g transform="translate(-10, -10) scale(0.04)">
                          <path d="M112 32c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32V123.5c11.8-10.5 24.6-19.6 38.4-27.3V32c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32V71.8c18.1-5.1 36.9-7.8 56-7.8c35.4 0 69.8 8.6 100.8 24.9c30.8 16.3 56.6 39.8 76 68.2c9.8 14.4 14.1 31.8 12.1 49.1s-10.6 33.2-24.2 44.2c-13.7 11-31 16.8-48.9 16.8c-21 0-41.4-8.4-59.2-24.2c-27-24-63-37.8-100.8-37.8c-38.4 0-74.9 14.2-100.6 38.5c-35 . 5-64.3 28.3-99.9 14.2-21 0-41.5-8.4-59.3-24.2c-27-24-63-37.8-100.8-37.8C165.7 188.8 128 150.3 128 104V32zM0 280c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32v24.3c11.8-10.5 24.6-19.6 38.4-27.3V184c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32v70.6c11.7-10.4 24.6-19.6 38.4-27.3V104c0-17.7 14.3-32 32-32h16c17.7 0 32 14.3 32 32v44.9c18.1-5.1 36.9-7.8 56-7.8c35.4 0 69.8 8.6 100.8 24.9c30.8 16.3 56.6 39.8 76 68.2c9.8 14.4 14.1 31.8 12.1 49.1s-10.6 33.2-24.2 44.2c-13.7 11-31 16.8-48.9 16.8c-21 0-41.4-8.4-59.2-24.2c-27-24-63-37.8-100.8-37.8c-38.4 0-74.9 14.2-100.6 38.5c-35.5 33.7-89.4 33.7-125 0C38.6 298.3 0 259.8 0 213.5V280z" fill="currentColor" className="text-primary" strokeWidth="0" />
                        </g>
                      </g>
                      <line x1="425" y1="300" x2="350" y2="270" stroke="currentColor" className="text-primary" strokeWidth="2" strokeDasharray="4 4">
                        <animate attributeName="stroke-dashoffset" values="0;40" dur="3s" repeatCount="indefinite" />
                      </line>
                      
                      {/* 2024 - Today */}
                      <g transform="translate(450, 150)">
                        <circle cx="0" cy="0" r="30" fill="currentColor" className="text-primary" opacity="0.2" />
                        <circle cx="0" cy="0" r="20" stroke="currentColor" fill="none" className="text-primary" strokeWidth="2">
                          <animate attributeName="r" values="20;23;20" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <g transform="translate(-10, -10) scale(0.04)">
                          <path d="M304 128c-10.3 0-19.9 3.2-27.7 8.7L256 64H48C21.5 64 0 85.5 0 112v48h48v288c0 35.3 28.7 64 64 64h240c35.3 0 64-28.7 64-64V112c0-35.3-28.7-64-64-64H304zM152 224H104v-1c0-10.5 1.7-20.4 4.8-29.7L58.9 252.9c-1 2.2-1.5 4.6-1.5 7.1c0 10.4 8.4 18.8 18.8 18.8c2.4 0 4.8-.5 7.1-1.5l58.7-26.8c-9.2 3.1-19.2 4.8-29.7 4.8h-1v-31zm187.8 86.7c2.2-1 4.6-1.5 7.1-1.5c10.4 0 18.8 8.4 18.8 18.8c0 2.4-.5 4.8-1.5 7.1l-26.8 58.7c3.1-9.2 4.8-19.2 4.8-29.7v-1H311v-31h1c10.5 0 20.4 1.7 29.7 4.8l-1.9-26.2zM128 160h32v32h32v-32h32v32h32v-32h32v32h32v-32h5c11 0 21 3.5 29.5 9.3c-4.9-30.8-31-54.3-63-54.3H109.1c-16.5 0-31 8.3-39.6 21c4.1-.9 8.3-1.5 12.7-1.5h3.8v-6.5z" fill="currentColor" className="text-primary" strokeWidth="0" />
                        </g>
                      </g>
                      <line x1="425" y1="170" x2="350" y2="230" stroke="currentColor" className="text-primary" strokeWidth="2" strokeDasharray="4 4">
                        <animate attributeName="stroke-dashoffset" values="0;40" dur="3s" repeatCount="indefinite" />
                      </line>
                    </g>
                    
                    {/* Services Icons */}
                    <g opacity="0.8">
                      {/* Cloud Computing */}
                      <g transform="translate(130, 100)">
                        <circle cx="0" cy="0" r="25" fill="currentColor" className="text-primary" opacity="0.1" />
                        <path d="M-15 5 C-15 -5, -5 -10, 0 -10 C5 -10, 15 -5, 15 5 C15 10, 5 10, 0 10 C-5 10, -15 10, -15 5 Z" stroke="currentColor" className="text-primary" strokeWidth="1.5" fill="none" />
                        <path d="M-10 5 L0 0 L10 5" stroke="currentColor" className="text-primary" strokeWidth="1.5" fill="none" />
                      </g>
                      <line x1="150" y1="120" x2="250" y2="225" stroke="currentColor" className="text-primary" strokeWidth="1" strokeDasharray="3 3" />
                      
                      {/* Cybersecurity */}
                      <g transform="translate(300, 80)">
                        <circle cx="0" cy="0" r="25" fill="currentColor" className="text-primary" opacity="0.1" />
                        <path d="M0 -12 L-15 -5 L-15 8 L0 15 L15 8 L15 -5 Z" stroke="currentColor" className="text-primary" strokeWidth="1.5" fill="none" />
                        <path d="M-5 0 L0 5 L5 0" stroke="currentColor" className="text-primary" strokeWidth="1.5" fill="none" />
                      </g>
                      <line x1="300" y1="105" x2="300" y2="200" stroke="currentColor" className="text-primary" strokeWidth="1" strokeDasharray="3 3" />
                      
                      {/* Infrastructure */}
                      <g transform="translate(450, 400)">
                        <circle cx="0" cy="0" r="25" fill="currentColor" className="text-primary" opacity="0.1" />
                        <rect x="-12" y="-8" width="24" height="6" stroke="currentColor" className="text-primary" strokeWidth="1.5" fill="none" />
                        <rect x="-12" y="1" width="24" height="6" stroke="currentColor" className="text-primary" strokeWidth="1.5" fill="none" />
                      </g>
                      <line x1="425" y1="380" x2="330" y2="280" stroke="currentColor" className="text-primary" strokeWidth="1" strokeDasharray="3 3" />
                      
                      {/* Support */}
                      <g transform="translate(150, 400)">
                        <circle cx="0" cy="0" r="25" fill="currentColor" className="text-primary" opacity="0.1" />
                        <circle cx="0" cy="0" r="10" stroke="currentColor" className="text-primary" strokeWidth="1.5" fill="none" />
                        <path d="M0 -15 L0 -10 M0 10 L0 15 M-15 0 L-10 0 M10 0 L15 0" stroke="currentColor" className="text-primary" strokeWidth="1.5" />
                      </g>
                      <line x1="170" y1="380" x2="270" y2="280" stroke="currentColor" className="text-primary" strokeWidth="1" strokeDasharray="3 3" />
                    </g>
                    
                    {/* Animated particles */}
                    <circle cx="300" cy="200" r="3" fill="currentColor" className="text-primary">
                      <animate attributeName="cy" values="200;150;100;150;200;250;300;250;200" dur="20s" repeatCount="indefinite" />
                      <animate attributeName="cx" values="300;350;400;450;400;350;300;250;200;150;200;250;300" dur="20s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="5s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle cx="300" cy="300" r="2" fill="currentColor" className="text-primary">
                      <animate attributeName="cy" values="300;350;400;350;300;250;200;250;300" dur="25s" repeatCount="indefinite" />
                      <animate attributeName="cx" values="300;250;200;150;200;250;300;350;400;450;400;350;300" dur="25s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="4s" repeatCount="indefinite" />
                    </circle>
                    
                    <circle cx="200" cy="250" r="4" fill="currentColor" className="text-primary">
                      <animate attributeName="cy" values="250;200;150;200;250;300;350;300;250" dur="18s" repeatCount="indefinite" />
                      <animate attributeName="cx" values="200;150;100;150;200;250;300;350;300;250;200" dur="18s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="6s" repeatCount="indefinite" />
                    </circle>
                  </g>
                </svg>
                <div className="absolute bottom-8 right-8 text-xl font-bold text-heading-color">
                  Since 2010
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Our Values Section - Update to use card-custom for better theme contrast */}
      <section className="w-full py-20 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center animate-on-scroll opacity-0 text-heading-color">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-custom p-8 rounded-xl h-full animate-on-scroll opacity-0 transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col h-full">
                  <div className="mb-4 text-heading-color">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-heading-color">{value.title}</h3>
                  <p className="text-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="w-full py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center animate-on-scroll opacity-0 text-custom-heading">Our Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="relative animate-on-scroll opacity-0">
              <div className="card-custom p-8 pt-10 rounded-xl h-full hover:shadow-lg transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="36" stroke="currentColor" className="text-primary" strokeWidth="3">
                      <animate attributeName="stroke-dasharray" values="0 226; 226 0" dur="3s" repeatCount="1" />
                      <animate attributeName="strokeWidth" values="3;4;3" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <path d="M27 40L37 50L53 30" stroke="currentColor" className="text-primary" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <animate attributeName="stroke-dasharray" values="0 60; 60 0" dur="2s" begin="0.5s" repeatCount="1" />
                      <animate attributeName="strokeWidth" values="4;5;4" dur="3s" repeatCount="indefinite" />
                    </path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-heading-color text-center">Discover</h3>
                <p className="text-custom text-center">We begin by understanding your business goals, pain points, and technology landscape to identify the right opportunities.</p>
              </div>
            </div>
            
            <div className="relative animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="card-custom p-8 pt-10 rounded-xl h-full hover:shadow-lg transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 65H60M25 25H55M20 15H60M25 35H55M20 45H60M25 55H55" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round">
                      <animate attributeName="stroke-dasharray" values="0 200; 200 0" dur="3s" repeatCount="1" />
                      <animate attributeName="strokeWidth" values="3;4;3" dur="3s" repeatCount="indefinite" />
                    </path>
                    <path d="M15 25L10 30L15 35" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <animate attributeName="stroke-dasharray" values="0 20; 20 0" dur="2s" begin="1s" repeatCount="1" />
                    </path>
                    <path d="M65 25L70 30L65 35" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <animate attributeName="stroke-dasharray" values="0 20; 20 0" dur="2s" begin="1.5s" repeatCount="1" />
                    </path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-heading-color text-center">Design</h3>
                <p className="text-custom text-center">Our experts develop a strategic roadmap and solution architecture tailored to your specific needs and budget.</p>
              </div>
            </div>
            
            <div className="relative animate-on-scroll opacity-0" style={{ animationDelay: '0.4s' }}>
              <div className="card-custom p-8 pt-10 rounded-xl h-full hover:shadow-lg transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 15V65" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round">
                      <animate attributeName="stroke-dasharray" values="0 50; 50 0" dur="1.5s" repeatCount="1" />
                    </path>
                    <path d="M65 40H15" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round">
                      <animate attributeName="stroke-dasharray" values="0 50; 50 0" dur="1.5s" begin="0.3s" repeatCount="1" />
                    </path>
                    <path d="M57 23L23 57" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round">
                      <animate attributeName="stroke-dasharray" values="0 48; 48 0" dur="1.5s" begin="0.6s" repeatCount="1" />
                    </path>
                    <path d="M57 57L23 23" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round">
                      <animate attributeName="stroke-dasharray" values="0 48; 48 0" dur="1.5s" begin="0.9s" repeatCount="1" />
                    </path>
                    <circle cx="40" cy="40" r="25" stroke="currentColor" className="text-primary" strokeWidth="3">
                      <animate attributeName="stroke-dasharray" values="0 157; 157 0" dur="2s" begin="1.2s" repeatCount="1" />
                      <animate attributeName="r" values="25;27;25" dur="4s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-heading-color text-center">Deliver</h3>
                <p className="text-custom text-center">We implement solutions with minimal disruption to your operations, ensuring smooth integration with existing systems.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative animate-on-scroll opacity-0" style={{ animationDelay: '0.6s' }}>
              <div className="card-custom p-8 pt-10 rounded-xl h-full hover:shadow-lg transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="15" y="20" width="50" height="40" rx="3" stroke="currentColor" className="text-primary" strokeWidth="3">
                      <animate attributeName="stroke-dasharray" values="0 180; 180 0" dur="2s" repeatCount="1" />
                    </rect>
                    <path d="M15 30H65" stroke="currentColor" className="text-primary" strokeWidth="3">
                      <animate attributeName="stroke-dasharray" values="0 50; 50 0" dur="1s" begin="1s" repeatCount="1" />
                    </path>
                    <circle cx="22.5" cy="25" r="2.5" fill="currentColor" className="text-primary">
                      <animate attributeName="r" values="0;2.5" dur="0.5s" begin="1.5s" fill="freeze" />
                    </circle>
                    <circle cx="30" cy="25" r="2.5" fill="currentColor" className="text-primary">
                      <animate attributeName="r" values="0;2.5" dur="0.5s" begin="1.7s" fill="freeze" />
                    </circle>
                    <circle cx="37.5" cy="25" r="2.5" fill="currentColor" className="text-primary">
                      <animate attributeName="r" values="0;2.5" dur="0.5s" begin="1.9s" fill="freeze" />
                    </circle>
                    <path d="M30 45L40 55L50 40" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <animate attributeName="stroke-dasharray" values="0 40; 40 0" dur="1.5s" begin="2.1s" repeatCount="1" />
                    </path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-heading-color text-center">Optimize</h3>
                <p className="text-custom text-center">We continually monitor and fine-tune your systems to ensure optimal performance, security, and efficiency.</p>
              </div>
            </div>
            
            <div className="relative animate-on-scroll opacity-0" style={{ animationDelay: '0.8s' }}>
              <div className="card-custom p-8 pt-10 rounded-xl h-full hover:shadow-lg transition-all duration-300">
                <div className="mb-6 flex justify-center">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 15V25" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round">
                      <animate attributeName="stroke-dasharray" values="0 10; 10 0" dur="0.5s" begin="0.1s" repeatCount="1" />
                    </path>
                    <path d="M57.1 22.9L50 30" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round">
                      <animate attributeName="stroke-dasharray" values="0 10; 10 0" dur="0.5s" begin="0.3s" repeatCount="1" />
                    </path>
                    <path d="M65 40H55" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round">
                      <animate attributeName="stroke-dasharray" values="0 10; 10 0" dur="0.5s" begin="0.5s" repeatCount="1" />
                    </path>
                    <path d="M57.1 57.1L50 50" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round">
                      <animate attributeName="stroke-dasharray" values="0 10; 10 0" dur="0.5s" begin="0.7s" repeatCount="1" />
                    </path>
                    <path d="M40 65V55" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round">
                      <animate attributeName="stroke-dasharray" values="0 10; 10 0" dur="0.5s" begin="0.9s" repeatCount="1" />
                    </path>
                    <path d="M22.9 57.1L30 50" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round">
                      <animate attributeName="stroke-dasharray" values="0 10; 10 0" dur="0.5s" begin="1.1s" repeatCount="1" />
                    </path>
                    <path d="M15 40H25" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round">
                      <animate attributeName="stroke-dasharray" values="0 10; 10 0" dur="0.5s" begin="1.3s" repeatCount="1" />
                    </path>
                    <path d="M22.9 22.9L30 30" stroke="currentColor" className="text-primary" strokeWidth="3" strokeLinecap="round">
                      <animate attributeName="stroke-dasharray" values="0 10; 10 0" dur="0.5s" begin="1.5s" repeatCount="1" />
                    </path>
                    <circle cx="40" cy="40" r="10" stroke="currentColor" className="text-primary" strokeWidth="3">
                      <animate attributeName="stroke-dasharray" values="0 63; 63 0" dur="1.5s" begin="1.7s" repeatCount="1" />
                      <animate attributeName="r" values="10;12;10" dur="3s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-heading-color text-center">Support</h3>
                <p className="text-custom text-center">Our proactive 24/7 support team ensures your technology infrastructure remains reliable, secure, and aligned with your evolving business needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-20 px-4 bg-primary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll opacity-0 text-custom">Why Choose GoFirst Tech</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-on-scroll opacity-0">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-custom/20 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-custom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-custom">Proven Expertise</h3>
              <p className="text-custom/90">Our team of certified professionals brings decades of combined experience across all IT domains.</p>
            </div>
            <div className="text-center animate-on-scroll opacity-0">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-custom/20 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-custom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-custom">24/7 Support</h3>
              <p className="text-custom/90">We're always available to ensure your critical systems remain operational at all times.</p>
            </div>
            <div className="text-center animate-on-scroll opacity-0">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-custom/20 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-custom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-custom">Results-Driven</h3>
              <p className="text-custom/90">Our solutions are designed to deliver measurable business improvements and ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-4">
        <div className="max-w-4xl mx-auto text-center animate-on-scroll opacity-0">
          <h2 className="text-3xl font-bold mb-6 text-custom-heading">
            Ready to partner with us?
          </h2>
          <p className="text-lg text-custom mb-8">
            Contact our team today to discuss how we can help your business leverage technology for success.
          </p>
          <Link href="/contact" className="gradient-button py-3 px-6 font-medium inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
} 