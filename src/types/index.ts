export interface Service{
    id: string;
    title: string;
    description?: string;
    link?: string;
}

export interface Project{
    id: string;
    title: string;
    subtitle?: string;
    image: string;
    link?: string;
    category?: string;
}

export interface Release{
    id: string;
    artist: string;
    title: string;
    date: string;
    image: string;
}

