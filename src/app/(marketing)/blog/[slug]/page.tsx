import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Nie znaleziono wpisu" };
  return { title: post.title };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-24 px-4">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Wróć do bloga
        </Link>

        <div className="mb-6 flex items-center gap-4 text-sm text-muted">
          <span>{post.date}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </span>
        </div>

        <h1 className="mb-8 font-heading text-3xl font-bold md:text-5xl">
          {post.title}
        </h1>

        <div className="prose-invert max-w-none space-y-4 text-foreground/80 leading-relaxed">
          {post.content.split("\n\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-surface p-8 text-center">
          <p className="font-heading text-xl font-semibold mb-2">
            Zainteresował Cię neon LED?
          </p>
          <p className="text-muted mb-6">
            Skontaktuj się z nami i zamów swój unikalny neon.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-heading font-semibold text-background transition-all duration-300 hover:neon-glow-primary"
          >
            Zamów neon
          </Link>
        </div>
      </div>
    </article>
  );
}
