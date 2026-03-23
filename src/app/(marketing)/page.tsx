"use client";

import { TubesBackground } from "@/components/TubesBackground";
import NeonButton from "@/components/NeonButton";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { Palette, Zap, ShieldCheck, Quote, Star, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

const features = [
  {
    icon: Palette,
    title: "Indywidualny projekt",
    description:
      "Każdy neon projektujemy od podstaw, dopasowując go do Twojej wizji i potrzeb.",
  },
  {
    icon: Zap,
    title: "Szybka realizacja",
    description:
      "Od projektu do gotowego neonu w zaledwie 7 dni roboczych.",
  },
  {
    icon: ShieldCheck,
    title: "Gwarancja jakości",
    description:
      "Używamy najwyższej jakości materiałów z 2-letnią gwarancją.",
  },
];

const bestsellers = [
  {
    title: "Neon tekstowy",
    description: "Napisy, cytaty, hasła - Twoje słowa w neonowym świetle.",
    price: "od 299 zł",
    href: "/produkty",
  },
  {
    title: "Neon logo",
    description: "Logo Twojej firmy jako efektowny neon LED.",
    price: "od 499 zł",
    href: "/produkty",
  },
  {
    title: "Neon dekoracyjny",
    description: "Unikalne kształty i wzory, które oświetlą Twoją przestrzeń.",
    price: "od 199 zł",
    href: "/produkty",
  },
];

const testimonials = [
  {
    name: "Marta Kowalska",
    company: "Restauracja Sakura",
    text: "Neon z logo naszej restauracji przyciąga klientów jak magnes. Jakość wykonania jest doskonała, a obsługa bardzo profesjonalna.",
  },
  {
    name: "Tomasz Wiśniewski",
    company: "Studio Fitness Vibe",
    text: "Zamówiliśmy napis motywacyjny do sali treningowej. Efekt przeszedł nasze oczekiwania - klienci uwielbiają robić sobie przy nim zdjęcia!",
  },
  {
    name: "Anna Nowak",
    company: "Salon Glow Beauty",
    text: "Szybka realizacja i świetny kontakt. Neon idealnie pasuje do wystroju naszego salonu. Na pewno wrócimy po więcej.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen">
        <TubesBackground className="h-screen" enableClickInteraction>
          <div className="flex h-full flex-col items-center justify-center px-4 text-center">
            <h1 className="font-heading text-5xl font-bold neon-text-primary md:text-7xl">
              Neony LED na zamówienie
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
              Tworzymy unikalne neony i znaki świetlne dla Twojego biznesu
            </p>
            <div className="mt-10 flex flex-col gap-4 pointer-events-auto sm:flex-row">
              <NeonButton href="/kontakt" variant="primary">
                Zamów swój neon
              </NeonButton>
              <NeonButton href="/realizacje" variant="outline">
                Zobacz realizacje
              </NeonButton>
            </div>
          </div>
        </TubesBackground>
      </section>

      {/* Why Us Section */}
      <section className="py-24 px-4">
        <SectionHeading title="Dlaczego LED-Zone?" />
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="rounded-xl bg-surface p-8"
              >
                <Icon size={40} className="mb-4 text-primary" />
                <h3 className="mb-2 font-heading text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="bg-surface/30 py-24 px-4">
        <SectionHeading title="Bestsellery" />
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {bestsellers.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 px-4">
        <SectionHeading
          title="Co mówią nasi klienci"
          subtitle="Zaufało nam ponad 200 firm i osób prywatnych w całej Polsce."
        />
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-xl bg-surface p-6"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/40" />
              <p className="mb-6 text-sm leading-relaxed text-foreground/80">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-heading text-sm font-semibold">{testimonial.name}</p>
              <p className="text-xs text-muted">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="bg-surface/30 py-24 px-4">
        <SectionHeading
          title="Z naszego bloga"
          subtitle="Porady, inspiracje i nowości ze świata neonów LED."
        />
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
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
              <h3 className="mb-2 font-heading text-lg font-semibold group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="mb-4 text-sm text-muted line-clamp-2">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-secondary group-hover:text-foreground transition-colors">
                Czytaj więcej
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <NeonButton href="/blog" variant="outline">
            Zobacz wszystkie wpisy
          </NeonButton>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Stwórz swój własny neon
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            Powiedz nam o swojej wizji, a my zamienimy ją w światło.
          </p>
          <div className="mt-8">
            <NeonButton href="/kontakt" variant="primary">
              Zamów teraz
            </NeonButton>
          </div>
        </div>
      </section>
    </>
  );
}
