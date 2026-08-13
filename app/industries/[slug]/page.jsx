// app/industries/[slug]/page.jsx
import { notFound } from 'next/navigation';
import IndustryPageClient from './IndustryPageClient';
import { industriesData } from '../data'; 

export function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({
    slug: slug,
  }));
}

// 1. Ise async banaya aur params ko await kiya
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const data = industriesData[resolvedParams.slug];
  
  if (!data) {
    return { title: 'Not Found' };
  }

  return {
    title: data.meta.title,
    description: data.meta.description,
  };
}

// 2. Component ko async banaya aur params ko await kiya
export default async function IndustryPage({ params }) {
  const resolvedParams = await params;
  const pageData = industriesData[resolvedParams.slug];

  // Agar user ne galat URL dala, toh 404
  if (!pageData) {
    notFound();
  }

  // Sahi data ko aapke Client Template me bhej do
  return <IndustryPageClient data={pageData} />;
}