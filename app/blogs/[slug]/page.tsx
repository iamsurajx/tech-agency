import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { getBlogBySlug } from "@/content/blogs";

// ============ SEO METADATA (Next.js 15) ============
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogBySlug(resolvedParams.slug);

  if (!post) {
    return { title: "Post Not Found | WebNirmit" };
  }

  return {
    title: `${post.title} | WebNirmit`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      // images: [`/api/og?title=${post.title}`], // Uncomment when you have OG images
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

// ============ PAGE COMPONENT ============
export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const post = getBlogBySlug(resolvedParams.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F3F8FF]">
        <h1 className="text-3xl font-bold text-[#49108B]">Article not found</h1>
        <Link href="/blogs" className="mt-4 text-[#7E30E1] font-semibold hover:underline">
          Back to all blogs
        </Link>
      </div>
    );
  }

  // Schema.org Structured Data for Google SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
  };

  return (
    <article className="relative min-h-screen bg-[#F3F8FF] pt-28 pb-24 font-sans selection:bg-[#7E30E1]/20 selection:text-[#49108B]">
      
      {/* Inject SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[1000px] rounded-full bg-gradient-to-b from-[#7E30E1]/10 to-transparent blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          href="/blogs" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#49108B]/60 hover:text-[#7E30E1] transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to all articles
        </Link>

        {/* Header Section */}
        <header className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-[#7E30E1] uppercase tracking-wider border border-[#7E30E1]/20 shadow-sm">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.15] tracking-tight text-[#49108B] mb-6">
            {post.title}
          </h1>
          
          <p className="text-xl text-[#49108B]/70 leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-[#7E30E1]/10">
            <div className="flex items-center gap-6 text-sm font-medium text-[#49108B]/60">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7E30E1] to-[#E26EE5] flex items-center justify-center text-white font-bold text-xs">
                  {post.author.charAt(0)}
                </div>
                <span className="text-[#49108B] font-semibold">{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5 hidden sm:flex">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>{post.displayDate}</time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Social Share (Static UI with Inline SVGs) */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-[#49108B]/50 uppercase tracking-wider">Share</span>
              
              <button className="p-2 rounded-full bg-white border border-[#7E30E1]/10 text-[#49108B]/60 hover:text-[#1DA1F2] hover:border-[#1DA1F2]/30 transition-colors shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </button>
              
              <button className="p-2 rounded-full bg-white border border-[#7E30E1]/10 text-[#49108B]/60 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-colors shadow-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </button>
            </div>
          </div>
        </header>

        {/* Featured Image Placeholder */}
        <div className={`w-full h-64 sm:h-96 rounded-3xl bg-gradient-to-br ${post.imageGradient} mb-12 shadow-xl shadow-[#7E30E1]/10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both`} />

        {/* Article Content (Custom Styled - No plugins required) */}
        <div 
          className="max-w-none animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both
            
            /* Headings & Paragraphs */
            [&_h2]:text-[clamp(1.5rem,3vw,1.75rem)] [&_h2]:font-extrabold [&_h2]:text-[#49108B] [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:tracking-tight
            [&_p]:text-[#49108B]/80 [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-lg
            
            /* Lists */
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:text-[#49108B]/80 [&_li]:mb-2 [&_li]:text-lg [&_li]:pl-1
            
            /* Links */
            [&_a]:text-[#7E30E1] [&_a]:font-semibold hover:[&_a]:text-[#E26EE5] [&_a]:transition-colors [&_a]:underline [&_a]:underline-offset-4
            
            /* Blockquotes */
            [&_blockquote]:border-l-4 [&_blockquote]:border-[#7E30E1] [&_blockquote]:bg-white [&_blockquote]:px-6 [&_blockquote]:py-5 [&_blockquote]:rounded-r-2xl [&_blockquote]:text-[#49108B] [&_blockquote]:font-medium [&_blockquote]:italic [&_blockquote]:shadow-sm [&_blockquote]:mb-8 [&_blockquote]:mt-8
            
            /* Images */
            [&_img]:w-full [&_img]:rounded-2xl [&_img]:shadow-xl [&_img]:shadow-[#7E30E1]/10 [&_img]:my-10 [&_img]:border [&_img]:border-[#7E30E1]/10
            
            /* Inline Code (like `npm start`) */
            [&_p>code]:bg-[#7E30E1]/10 [&_p>code]:text-[#7E30E1] [&_p>code]:px-1.5 [&_p>code]:py-0.5 [&_p>code]:rounded-md [&_p>code]:font-mono [&_p>code]:text-sm
            [&_li>code]:bg-[#7E30E1]/10 [&_li>code]:text-[#7E30E1] [&_li>code]:px-1.5 [&_li>code]:py-0.5 [&_li>code]:rounded-md [&_li>code]:font-mono [&_li>code]:text-sm
            
            /* Code Blocks (Pre & Code) */
            [&_pre]:bg-[#0a0a0f] [&_pre]:text-gray-300 [&_pre]:p-6 [&_pre]:rounded-2xl [&_pre]:overflow-x-auto [&_pre]:my-8 [&_pre]:shadow-2xl [&_pre]:shadow-[#7E30E1]/20 [&_pre]:border [&_pre]:border-white/10
            [&_pre_code]:font-mono [&_pre_code]:text-sm [&_pre_code]:bg-transparent [&_pre_code]:text-inherit [&_pre_code]:p-0
            
            /* Videos / Iframes */
            [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-2xl [&_iframe]:shadow-xl [&_iframe]:shadow-[#7E30E1]/10 [&_iframe]:my-10 [&_iframe]:border-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-[#7E30E1] to-[#49108B] text-white text-center shadow-2xl shadow-[#7E30E1]/30">
          <h3 className="text-2xl font-bold mb-3">Ready to build your own MVP?</h3>
          <p className="text-white/80 mb-6 max-w-md mx-auto">Get a production-ready app in 14 days at a fixed price. No surprises.</p>
          <Link href="/#contact" className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-white text-[#49108B] font-bold hover:bg-gray-50 transition-colors">
            Start Your Project
          </Link>
        </div>

      </div>
    </article>
  );
}