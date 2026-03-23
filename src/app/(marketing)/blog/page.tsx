import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <section className="py-24 px-4">
      <SectionHeading
        title="Blog LED-Zone"
        subtitle="Porady, inspiracje i nowości ze świata neonów LED."
      />

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-xl bg-surface p-6 transition-all duration-300 hover:neon-border"
          >
            <div className="mb-3 flex items-center gap-3 text-xs text-muted">
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>
            <h2 className="mb-2 font-heading text-lg font-semibold group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-muted">
              {post.excerpt}
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-secondary group-hover:text-foreground transition-colors">
              Czytaj więcej
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
