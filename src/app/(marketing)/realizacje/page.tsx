import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Realizacje",
};

const projects = [
  {
    name: "Restauracja Sakura",
    gradient: "from-primary/20 to-secondary/10",
  },
  {
    name: "Salon Fryzjerski Glow",
    gradient: "from-secondary/20 to-accent/10",
  },
  {
    name: "Studio Fitness Vibe",
    gradient: "from-accent/20 to-primary/10",
  },
  {
    name: "Bar NightOwl",
    gradient: "from-primary/30 to-accent/10",
  },
  {
    name: "Biuro ArtDesign",
    gradient: "from-secondary/30 to-primary/10",
  },
  {
    name: "Kawiarnia Moonlight",
    gradient: "from-accent/15 to-secondary/15",
  },
];

export default function RealizacjePage() {
  return (
    <section className="py-24 px-4">
      <SectionHeading
        title="Nasze realizacje"
        subtitle="Zobacz wybrane projekty, które stworzyliśmy dla naszych klientów."
      />

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className={`group relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br ${project.gradient}`}
          >
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-end bg-background/60 p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="font-heading text-lg font-semibold text-foreground">
                {project.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
