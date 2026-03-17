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
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ocean-800">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-4xl leading-tight text-ocean-950 sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
    </div>
  );
}
