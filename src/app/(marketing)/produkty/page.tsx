import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import NeonButton from "@/components/NeonButton";

export const metadata: Metadata = {
  title: "Produkty",
};

const products = [
  {
    title: "Neony tekstowe",
    description:
      "Napisy, cytaty, hasła reklamowe, imiona. Każdy tekst może stać się neonem.",
    price: "od 299 zł",
    href: "/kontakt",
  },
  {
    title: "Neony logo",
    description:
      "Logo Twojej firmy w formie neonu LED. Idealny element brandingu.",
    price: "od 499 zł",
    href: "/kontakt",
  },
  {
    title: "Neony dekoracyjne",
    description:
      "Kształty, wzory, grafiki. Stwórz niepowtarzalny klimat w swoim wnętrzu.",
    price: "od 199 zł",
    href: "/kontakt",
  },
  {
    title: "Znaki LED",
    description:
      "Profesjonalne szyldy i kasetony świetlne dla Twojego biznesu.",
    price: "od 799 zł",
    href: "/kontakt",
  },
];

export default function ProduktyPage() {
  return (
    <section className="py-24 px-4">
      <SectionHeading
        title="Nasze produkty"
        subtitle="Wybierz kategorię i zamów neon dopasowany do Twoich potrzeb."
      />

      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <NeonButton href="/kontakt" variant="primary">
          Zamów indywidualny projekt
        </NeonButton>
      </div>
    </section>
  );
}
