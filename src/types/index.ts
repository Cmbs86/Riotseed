export interface Service {
  id: string;
  title: string;
  description?: string | string[];
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  image?: string | null;
  link: string;
  category?: string;
  gradient?: string;
  bgPosition?: string;
  external?: boolean;
}

export interface Release {
  id: string;
  artist: string;
  title: string;
  date: string;
  image: string;
}