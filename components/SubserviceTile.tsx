import Link from "next/link";

type SubserviceTileProps = {
  title: string;
  description: string;
  requestHref?: string;
};

export default function SubserviceTile({
  title,
  description,
  requestHref = "/request-service",
}: SubserviceTileProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.25rem] border border-mist-300 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(15,42,68,0.12)]">
      <h3 className="text-2xl font-semibold text-ocean-950">{title}</h3>
      <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>

      <div className="mt-auto flex justify-end pt-8">
        <Link
          href={requestHref}
          className="inline-flex items-center justify-center rounded-full bg-ocean-950 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-ocean-900"
        >
          Request Service
        </Link>
      </div>
    </article>
  );
}
