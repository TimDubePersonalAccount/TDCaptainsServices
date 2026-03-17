import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/Videos/BoatBackgroundVideo.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.62))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_42%)]" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 -translate-y-[100px]">
        <div className="fade-in-hero w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[520px]">
          <Image
            src="/Images/Boat_Logo_transparent.png"
            alt="TD Captains Services logo"
            width={1536}
            height={1024}
            priority
            className="h-auto w-full object-contain drop-shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-14 sm:px-6 lg:px-8 lg:pb-16">
        <div className="max-w-2xl text-white">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            Hudson River Marine Services
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Dependable marine support on the Hudson River.
          </h1>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/request-service"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ocean-950 transition-colors duration-300 hover:bg-mist-200"
            >
              Request Service
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/15"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
