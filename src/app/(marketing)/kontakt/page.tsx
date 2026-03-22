import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
};

const contactInfo = [
  { icon: Mail, text: "kontakt@neonvibe.pl" },
  { icon: Phone, text: "+48 123 456 789" },
  { icon: MapPin, text: "ul. Neonowa 42, 00-001 Warszawa" },
];

export default function KontaktPage() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
        {/* Left column - info */}
        <div>
          <h1 className="mb-4 font-heading text-4xl font-bold">
            Zamow swoj neon
          </h1>
          <p className="mb-8 text-muted">
            Opisz nam swoj pomysl, a my przygotujemy wycene i wizualizacje.
          </p>

          <div className="space-y-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0 text-primary" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right column - form */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
