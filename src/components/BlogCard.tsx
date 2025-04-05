"use client";

import Image from 'next/image';
import Link from 'next/link';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  category: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  // Format the date using native JavaScript instead of date-fns
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      return 'yesterday';
    } else if (diffDays < 30) {
      return `${diffDays} days ago`;
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30);
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `${years} ${years === 1 ? 'year' : 'years'} ago`;
    }
  };

  const formattedDate = formatDate(post.date);

  const getCategoryIcon = (category: string) => {
    switch(category.toLowerCase()) {
      case 'cloud':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        );
      case 'security':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'strategy':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
      case 'infrastructure':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
    }
  };

  return (
    <div className="card-custom rounded-xl overflow-hidden h-full flex flex-col transition-transform duration-300 hover:scale-[1.02]">
      {/* Category SVG instead of image */}
      <div className="relative h-52 w-full overflow-hidden bg-custom-secondary flex items-center justify-center">
        <div className="text-primary w-[200px] h-[150px] flex items-center justify-center">
          {post.category === 'Cloud' && (
            <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          )}
          {post.category === 'Security' && (
            <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          )}
          {post.category === 'Strategy' && (
            <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          )}
          {post.category === 'Infrastructure' && (
            <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          )}
          {post.category === 'Remote Work' && (
            <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          )}
          {post.category === 'AI' && (
            <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          )}
        </div>
        <Link href={`/blog/${post.slug}`} className="absolute inset-0 flex items-center justify-center">
          <div className="absolute top-4 left-4 bg-primary/90 text-custom text-xs py-1 px-3 rounded-full font-medium flex items-center">
            {getCategoryIcon(post.category)}
            {post.category}
          </div>
        </Link>
      </div>
      
      {/* Post Content */}
      <div className="p-6 flex-grow flex flex-col">
        <Link href={`/blog/${post.slug}`} className="group">
          <h3 className="text-xl font-bold mb-3 text-custom-heading group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-custom/80 mb-4 flex-grow">
          {post.excerpt}
        </p>
        
        {/* Author and Date (without photo) */}
        <div className="flex items-center mt-4 border-t border-foreground/10 pt-4">
          <div>
            <p className="text-custom-heading text-sm font-medium">{post.author.name}</p>
            <p className="text-custom/60 text-xs">{formattedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard; 