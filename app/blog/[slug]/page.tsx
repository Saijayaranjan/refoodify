import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const dynamic = "force-static";

export async function generateStaticParams() {
  // Return empty array to disable static generation for now
  return [];
}

export async function generateMetadata({
  params: _params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  return {
    title: "Blog Post - Refoodify",
    description: "Read our latest blog posts about food waste reduction",
  };
}

export default async function BlogPage({ params: _params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await _params;
  
  // For now, show a coming soon page for all blog posts
  return (
    <div className="relative min-h-screen bg-gray-900 text-white pt-20">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6">📝</div>
          <h1 className="text-4xl font-bold mb-4 text-white">Blog Coming Soon</h1>
          <p className="text-xl text-gray-300 mb-8">
            We're working on bringing you amazing content about food waste reduction, sustainability tips, and success stories.
          </p>
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-6">
            <p className="text-green-400 text-sm">
              🌱 Expected launch: Q2 2025<br/>
              📚 Features include tutorials, success stories, and sustainability guides
            </p>
          </div>
          <a 
            href="/dashboard" 
            className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors mr-4"
          >
            Go to Dashboard
          </a>
          <a 
            href="/" 
            className="inline-block px-6 py-3 border border-gray-600 hover:border-gray-500 text-white rounded-lg transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
