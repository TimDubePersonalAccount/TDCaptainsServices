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
    <section className="border-b border-sand-400/50 bg-ocean-950">
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-34 sm:px-6 md:pt-38 lg:px-8 lg:pb-16">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mist-200">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-serif text-3xl leading-tight text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-mist-200">
          {description}
        </p>
      </div>
    </section>
  );
}
