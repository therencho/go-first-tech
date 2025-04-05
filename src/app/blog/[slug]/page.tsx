"use client";

import { useEffect, useRef } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostContent } from '../data';
import Breadcrumb from '@/components/Breadcrumb';
import ReactMarkdown from 'react-markdown';

interface Params {
  slug: string;
}

interface BlogPostPageProps {
  params: Promise<Params>;
}

interface MarkdownCodeProps {
  node: any;
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // Use React.use to unwrap the Promise
  const { slug } = React.use(params);
  
  const post = blogPosts.find(p => p.slug === slug);
  const postContent = post ? getBlogPostContent(slug) : null;
  
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

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post || !postContent) {
    notFound();
  }

  // Category-specific SVG components
  const renderCategorySVG = () => {
    switch(post.category) {
      case 'Cloud':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 110C100 82.386 122.386 60 150 60C177.614 60 200 82.386 200 110" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
              <animate attributeName="stroke-dasharray" values="0 200; 200 0" dur="3s" repeatCount="1" />
            </path>
            <path d="M220 130C220 122.268 226.268 116 234 116C241.732 116 248 122.268 248 130C248 137.732 241.732 144 234 144H66C58.268 144 52 137.732 52 130C52 122.268 58.268 116 66 116C73.732 116 80 122.268 80 130" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
              <animate attributeName="stroke-dasharray" values="0 400; 400 0" dur="3s" repeatCount="1" />
            </path>
            <path d="M110 110C110 87.909 127.909 70 150 70C172.091 70 190 87.909 190 110" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeDasharray="1 12">
              <animate attributeName="stroke-dashoffset" values="0; 100" dur="15s" repeatCount="indefinite" />
            </path>
            <circle cx="150" cy="40" r="10" fill="currentColor" opacity="0.7">
              <animate attributeName="opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="190" cy="60" r="6" fill="currentColor" opacity="0.5">
              <animate attributeName="opacity" values="0.5;0.2;0.5" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="110" cy="60" r="8" fill="currentColor" opacity="0.6">
              <animate attributeName="opacity" values="0.6;0.3;0.6" dur="3.5s" repeatCount="indefinite" />
            </circle>
          </svg>
        );
      case 'Security':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M150 20L90 50V110C90 141.423 115.577 170 150 190C184.423 170 210 141.423 210 110V50L150 20Z" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
              <animate attributeName="stroke-dasharray" values="0 500; 500 0" dur="3s" repeatCount="1" />
            </path>
            <path d="M120 100L140 120L180 80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
              <animate attributeName="stroke-dasharray" values="0 100; 100 0" dur="2s" begin="1s" repeatCount="1" />
            </path>
            <path d="M250 90C250 80 255 70 265 70C280 70 280 90 265 90" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <animate attributeName="stroke-dasharray" values="0 50; 50 0" dur="1s" begin="2s" repeatCount="1" />
            </path>
            <path d="M250 110C250 120 255 130 265 130C280 130 280 110 265 110" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <animate attributeName="stroke-dasharray" values="0 50; 50 0" dur="1s" begin="2.5s" repeatCount="1" />
            </path>
            <circle cx="280" cy="70" r="5" fill="currentColor" opacity="0.7">
              <animate attributeName="r" values="5;7;5" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="280" cy="130" r="5" fill="currentColor" opacity="0.7">
              <animate attributeName="r" values="5;7;5" dur="4s" repeatCount="indefinite" />
            </circle>
          </svg>
        );
      case 'Strategy':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M90 160H130V80H90V160Z" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
              <animate attributeName="stroke-dasharray" values="0 240; 240 0" dur="1.5s" repeatCount="1" />
            </path>
            <path d="M130 160H170V60H130V160Z" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
              <animate attributeName="stroke-dasharray" values="0 270; 270 0" dur="1.5s" begin="0.5s" repeatCount="1" />
            </path>
            <path d="M170 160H210V40H170V160Z" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
              <animate attributeName="stroke-dasharray" values="0 290; 290 0" dur="1.5s" begin="1s" repeatCount="1" />
            </path>
            <path d="M90 160L210 160" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
              <animate attributeName="stroke-dasharray" values="0 120; 120 0" dur="1s" begin="1.5s" repeatCount="1" />
            </path>
            <circle cx="250" cy="60" r="8" fill="currentColor" opacity="0.6">
              <animate attributeName="cy" values="60;50;60" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="270" cy="100" r="10" fill="currentColor" opacity="0.7">
              <animate attributeName="cy" values="100;110;100" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="250" cy="140" r="6" fill="currentColor" opacity="0.5">
              <animate attributeName="cy" values="140;130;140" dur="3.5s" repeatCount="indefinite" />
            </circle>
          </svg>
        );
      case 'Infrastructure':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="70" y="60" width="160" height="40" rx="5" stroke="currentColor" strokeWidth="8">
              <animate attributeName="stroke-dasharray" values="0 400; 400 0" dur="2s" repeatCount="1" />
            </rect>
            <rect x="90" y="100" width="40" height="80" rx="5" stroke="currentColor" strokeWidth="8">
              <animate attributeName="stroke-dasharray" values="0 240; 240 0" dur="1.5s" begin="0.5s" repeatCount="1" />
            </rect>
            <rect x="170" y="100" width="40" height="80" rx="5" stroke="currentColor" strokeWidth="8">
              <animate attributeName="stroke-dasharray" values="0 240; 240 0" dur="1.5s" begin="1s" repeatCount="1" />
            </rect>
            <rect x="70" y="20" width="160" height="40" rx="5" stroke="currentColor" strokeWidth="8">
              <animate attributeName="stroke-dasharray" values="0 400; 400 0" dur="2s" begin="1.5s" repeatCount="1" />
            </rect>
            <line x1="110" y1="40" x2="190" y2="40" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
              <animate attributeName="stroke-dasharray" values="0 80; 80 0" dur="1s" begin="2s" repeatCount="1" />
            </line>
            <line x1="110" y1="80" x2="190" y2="80" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
              <animate attributeName="stroke-dasharray" values="0 80; 80 0" dur="1s" begin="2.5s" repeatCount="1" />
            </line>
            <circle cx="250" cy="80" r="10" fill="currentColor" opacity="0.7">
              <animate attributeName="r" values="10;12;10" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="270" cy="120" r="8" fill="currentColor" opacity="0.6">
              <animate attributeName="r" values="8;10;8" dur="4s" repeatCount="indefinite" />
            </circle>
          </svg>
        );
      case 'Remote Work':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="80" y="50" width="140" height="90" rx="5" stroke="currentColor" strokeWidth="8">
              <animate attributeName="stroke-dasharray" values="0 460; 460 0" dur="2s" repeatCount="1" />
            </rect>
            <rect x="100" y="65" width="100" height="60" rx="2" stroke="currentColor" strokeWidth="4">
              <animate attributeName="stroke-dasharray" values="0 320; 320 0" dur="1.5s" begin="0.5s" repeatCount="1" />
            </rect>
            <line x1="80" y1="150" x2="150" y2="170" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
              <animate attributeName="stroke-dasharray" values="0 80; 80 0" dur="1s" begin="1.5s" repeatCount="1" />
            </line>
            <line x1="220" y1="150" x2="150" y2="170" stroke="currentColor" strokeWidth="6" strokeLinecap="round">
              <animate attributeName="stroke-dasharray" values="0 80; 80 0" dur="1s" begin="2s" repeatCount="1" />
            </line>
            <circle cx="150" cy="170" r="10" fill="currentColor" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0.5;0.8" dur="2s" repeatCount="indefinite" />
            </circle>
            <path d="M260 90C260 70 280 70 280 90 L280 110 C280 130 260 130 260 110 L260 90Z" stroke="currentColor" strokeWidth="4" fill="none">
              <animate attributeName="stroke-dasharray" values="0 100; 100 0" dur="1.5s" begin="2.5s" repeatCount="1" />
            </path>
            <path d="M290 80C290 65 320 65 320 80 L320 120 C320 135 290 135 290 120 L290 80Z" stroke="currentColor" strokeWidth="4" fill="none">
              <animate attributeName="stroke-dasharray" values="0 120; 120 0" dur="1.5s" begin="3s" repeatCount="1" />
            </path>
            <circle cx="270" cy="70" r="6" fill="currentColor" opacity="0.6">
              <animate attributeName="r" values="6;8;6" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="300" cy="65" r="8" fill="currentColor" opacity="0.5">
              <animate attributeName="r" values="8;10;8" dur="4s" repeatCount="indefinite" />
            </circle>
          </svg>
        );
      case 'AI':
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="100" y="40" width="100" height="120" rx="10" stroke="currentColor" strokeWidth="8">
              <animate attributeName="stroke-dasharray" values="0 440; 440 0" dur="2s" repeatCount="1" />
            </rect>
            <circle cx="150" cy="70" r="15" stroke="currentColor" strokeWidth="4" fill="none">
              <animate attributeName="stroke-dasharray" values="0 95; 95 0" dur="1.5s" begin="0.5s" repeatCount="1" />
            </circle>
            <circle cx="150" cy="120" r="15" stroke="currentColor" strokeWidth="4" fill="none">
              <animate attributeName="stroke-dasharray" values="0 95; 95 0" dur="1.5s" begin="1s" repeatCount="1" />
            </circle>
            <line x1="135" y1="70" x2="135" y2="120" stroke="currentColor" strokeWidth="4">
              <animate attributeName="stroke-dasharray" values="0 50; 50 0" dur="1s" begin="1.5s" repeatCount="1" />
            </line>
            <line x1="150" y1="70" x2="150" y2="120" stroke="currentColor" strokeWidth="4">
              <animate attributeName="stroke-dasharray" values="0 50; 50 0" dur="1s" begin="1.7s" repeatCount="1" />
            </line>
            <line x1="165" y1="70" x2="165" y2="120" stroke="currentColor" strokeWidth="4">
              <animate attributeName="stroke-dasharray" values="0 50; 50 0" dur="1s" begin="1.9s" repeatCount="1" />
            </line>
            <path d="M220 70 C240 70, 280 40, 280 80 C280 120, 240 130, 220 110" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round">
              <animate attributeName="stroke-dasharray" values="0 200; 200 0" dur="2s" begin="2.1s" repeatCount="1" />
            </path>
            <circle cx="250" cy="90" r="8" fill="currentColor" opacity="0.6">
              <animate attributeName="r" values="8;10;8" dur="3s" repeatCount="indefinite" />
              <animate attributeName="cx" values="250;260;250" dur="5s" repeatCount="indefinite" />
              <animate attributeName="cy" values="90;85;90" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="230" cy="70" r="6" fill="currentColor" opacity="0.5">
              <animate attributeName="r" values="6;8;6" dur="4s" repeatCount="indefinite" />
              <animate attributeName="cx" values="230;225;230" dur="6s" repeatCount="indefinite" />
              <animate attributeName="cy" values="70;75;70" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="265" cy="110" r="5" fill="currentColor" opacity="0.7">
              <animate attributeName="r" values="5;7;5" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="cx" values="265;275;265" dur="7s" repeatCount="indefinite" />
              <animate attributeName="cy" values="110;105;110" dur="5s" repeatCount="indefinite" />
            </circle>
          </svg>
        );
      default:
        return (
          <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="100" r="60" stroke="currentColor" strokeWidth="8">
              <animate attributeName="stroke-dasharray" values="0 377; 377 0" dur="2s" repeatCount="1" />
            </circle>
            <path d="M170 100L190 120L230 80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
              <animate attributeName="stroke-dasharray" values="0 100; 100 0" dur="1.5s" begin="1s" repeatCount="1" />
            </path>
          </svg>
        );
    }
  };

  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-secondary px-4 pt-24 pb-16 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="hero-breadcrumb mb-4">
            <Breadcrumb />
          </div>
          
          <div className="text-center mb-8">
            <span className="bg-primary text-custom text-sm py-1 px-3 rounded-full inline-block mb-4 font-medium">
              {post.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-custom hero-title">
              {post.title}
            </h1>
          </div>
          
          <div className="flex items-center justify-center mb-8 hero-description">
            <div className="text-center">
              <p className="text-custom/70 text-sm">
                Published on {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })} by <span className="text-custom-heading font-medium">{post.author.name}</span>
              </p>
            </div>
          </div>
          
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-12 hero-badge bg-custom-secondary flex items-center justify-center">
            <div className="text-primary w-full h-full flex items-center justify-center p-10">
              {renderCategorySVG()}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="w-full px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <article className="prose prose-lg max-w-none">
            <div className="markdown-content text-custom">
              {postContent.content && (
                <ReactMarkdown
                  components={{
                    h1: ({node, ...props}) => <h1 className="text-4xl font-bold text-custom-heading mt-12 mb-6" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-3xl font-bold text-custom-heading mt-10 mb-5" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-2xl font-bold text-custom-heading mt-8 mb-4" {...props} />,
                    h4: ({node, ...props}) => <h4 className="text-xl font-bold text-custom-heading mt-6 mb-3" {...props} />,
                    p: ({node, ...props}) => <p className="text-custom my-6 leading-relaxed" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc pl-8 my-6 space-y-2" {...props} />,
                    ol: ({node, ...props}) => <ol className="list-decimal pl-8 my-6 space-y-2" {...props} />,
                    li: ({node, ...props}) => <li className="ml-2 mb-2" {...props} />,
                    blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-custom-secondary/30 italic rounded-r" {...props} />,
                    a: ({node, ...props}) => <a className="text-primary hover:underline font-medium" {...props} />,
                    strong: ({node, ...props}) => <strong className="font-bold text-custom-heading" {...props} />,
                    code: ({node, inline, className, ...props}: any) => {
                      const match = /language-(\w+)/.exec(className || '');
                      return !inline ? (
                        <code className="block bg-custom-secondary text-custom p-4 my-6 rounded-lg overflow-x-auto font-mono text-sm" {...props} />
                      ) : (
                        <code className="bg-custom-secondary text-custom px-1.5 py-0.5 rounded font-mono text-sm" {...props} />
                      );
                    },
                    img: ({node, ...props}) => <img className="rounded-lg my-8 shadow-md w-full" {...props} />,
                    table: ({node, ...props}) => <div className="overflow-x-auto my-8"><table className="w-full border-collapse" {...props} /></div>,
                    th: ({node, ...props}) => <th className="border border-foreground/10 bg-custom-secondary px-4 py-2 text-left font-medium" {...props} />,
                    td: ({node, ...props}) => <td className="border border-foreground/10 px-4 py-2" {...props} />,
                    hr: ({node, ...props}) => <hr className="my-8 border-foreground/10" {...props} />,
                  }}
                >
                  {postContent.content}
                </ReactMarkdown>
              )}
            </div>
          </article>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-foreground/10">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-custom-heading font-medium">Tags:</span>
              <Link href={`/blog?category=${post.category.toLowerCase()}`} className="bg-primary/90 text-custom px-3 py-1 rounded-full text-sm hover:bg-primary transition-colors">
                {post.category}
              </Link>
              <Link href="/blog?tag=it-solutions" className="bg-primary/80 text-custom px-3 py-1 rounded-full text-sm hover:bg-primary transition-colors">
                IT Solutions
              </Link>
              <Link href="/blog?tag=technology" className="bg-primary/80 text-custom px-3 py-1 rounded-full text-sm hover:bg-primary transition-colors">
                Technology
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 