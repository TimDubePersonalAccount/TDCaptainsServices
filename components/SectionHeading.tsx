type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-ocean-700">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-4xl leading-tight text-ocean-950 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
