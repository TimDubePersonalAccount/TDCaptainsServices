import servicesData from "@/data/services.json";

export type Subservice = {
  slug: string;
  title: string;
  description: string;
};

export type Service = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  menuDescription: string;
  description: string;
  highlights: string[];
  subservices: Subservice[];
  subservicesTitle?: string;
  subservicesEyebrow?: string;
  showOverviewSection?: boolean;
};

type ServicesData = {
  services: Service[];
};

const typedServicesData = servicesData as ServicesData;

export const services = typedServicesData.services;

export function getServiceHref(slug: string) {
  return `/services/${slug}`;
}

export function getServiceRequestHref(slug?: string) {
  const searchParams = new URLSearchParams();

  if (slug) {
    searchParams.set("service", slug);
  }

  const queryString = searchParams.toString();

  return queryString ? `/request-service?${queryString}` : "/request-service";
}

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export const serviceMenuItems = services.map((service) => ({
  href: getServiceHref(service.slug),
  label: service.title,
  description: service.menuDescription,
}));
