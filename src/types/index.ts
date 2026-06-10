export interface Service {
  slug: string;
  title: string;
  teaser: string;
  description: string[];
}

export interface ProjectSocials {
  instagram?: string;
  spotify?: string;
  website?: string;
  facebook?: string;
  tiktok?: string;
  linkedin?: string;
  bandcamp?: string;
}

export type ProjectSocialKey =
  | "instagram"
  | "spotify"
  | "website"
  | "facebook"
  | "tiktok"
  | "linkedin"
  | "bandcamp";

export interface ProjectInfo {
  label?: string;
  contact?: string;
  download?: string;
  downloadUrl?: string;
  pr?: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  image?: string | null;
  category?: string;
  subtitle?: string;
  gradient?: string;
  bgPosition?: string;

  description?: string[];
  whatWeDidTitle?: string;
  whatWeDid?: string[];
  results?: string[];
  testimonial?: ProjectTestimonial;

  spotifyEmbed?: string;
  socials?: ProjectSocials;
  socialOrder?: ProjectSocialKey[];

  info?: ProjectInfo;

  external?: boolean;
  link?: string;
}

export interface Release {
  id: string;
  artist: string;
  title: string;
  date: string;
  image: string;
}