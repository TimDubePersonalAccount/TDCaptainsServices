type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ocean-950 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,20,35,0.96),rgba(13,34,56,0.86),rgba(21,54,85,0.78))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_26%)]" />
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-36 sm:px-6 md:pt-40 lg:px-8 lg:pb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-300">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-none sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
          {description}
        </p>
      </div>
    </section>
  );
}
