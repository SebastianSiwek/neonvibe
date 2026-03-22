"use client";

import { TubesBackground } from "@/components/TubesBackground";
import NeonButton from "@/components/NeonButton";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { Palette, Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Indywidualny projekt",
    description:
      "Kazdy neon projektujemy od podstaw, dopasowujac go do Twojej wizji i potrzeb.",
  },
  {
    icon: Zap,
    title: "Szybka realizacja",
    description:
      "Od projektu do gotowego neonu w zaledwie 7 dni roboczych.",
  },
  {
    icon: ShieldCheck,
    title: "Gwarancja jakosci",
    description:
      "Uzywamy najwyzszej jakosci materialow z 2-letnia gwarancja.",
  },
];

const bestsellers = [
  {
    title: "Neon tekstowy",
    description: "Napisy, cytaty, hasla - Twoje slowa w neonowym swietle.",
    price: "od 299 zl",
    href: "/produkty",
  },
  {
    title: "Neon logo",
    description: "Logo Twojej firmy jako efektowny neon LED.",
    price: "od 499 zl",
    href: "/produkty",
  },
  {
    title: "Neon dekoracyjny",
    description: "Unikalne ksztalty i wzory, ktore oswieta Twoja przestrzen.",
    price: "od 199 zl",
    href: "/produkty",
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
              Neony LED na zamowienie
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl">
              Tworzymy unikalne neony i znaki swietlne dla Twojego biznesu
            </p>
            <div className="mt-10 flex flex-col gap-4 pointer-events-auto sm:flex-row">
              <NeonButton href="/kontakt" variant="primary">
                Zamow swoj neon
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
        <SectionHeading title="Dlaczego NeonVibe?" />
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

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 px-6 py-16 text-center">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Stworz swoj wlasny neon
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-foreground/70">
            Powiedz nam o swojej wizji, a my zamienimy ja w swiatlo.
          </p>
          <div className="mt-8">
            <NeonButton href="/kontakt" variant="primary">
              Zamow teraz
            </NeonButton>
          </div>
        </div>
      </section>
    </>
  );
}
