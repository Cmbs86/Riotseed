export interface Service {
  id: string;
  title: string;
  description?: string | string[];
  link?: string;
}

export interface ProjectSocials {
  instagram?: string;
  spotify?: string;
  website?: string;
  facebook?: string;
  tiktok?: string;
}

export interface ProjectInfo {
  label?: string;
  pr?: string;
  contact?: string;
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
  spotifyEmbed?: string;
  socials?: ProjectSocials;
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