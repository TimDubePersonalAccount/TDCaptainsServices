type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  invert?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  invert = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
          invert ? "text-sand-400" : "text-ocean-800"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-serif text-4xl leading-tight sm:text-5xl ${
          invert ? "text-white" : "text-ocean-950"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 text-lg leading-8 ${
          invert ? "text-mist-200" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
