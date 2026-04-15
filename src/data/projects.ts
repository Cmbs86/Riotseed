import type { Project } from "../types";

import vespaPhoto from "../assets/images/VespaBand.webp";
import offbeatPhoto from "../assets/images/OffbeatAffairBand.webp";
import veePhoto from "../assets/images/Veegreen2.webp";

export const projects: Project[] = [
  {
    id: "vespa",
    title: "Vespa",
    slug: "vespa",
    image: vespaPhoto,
    bgPosition: "center top",
    category: "music",
    subtitle: "Music project",
    description: [
      "Vespa is a project driven by attitude, identity, and a strong visual presence. The sound and imagery work together to create something immediate, memorable, and full of character.",
      "This page is designed to give a fuller picture of the artist beyond the homepage preview, combining story, listening experience, and direct access to the most relevant platforms.",
    ],
    spotifyEmbed: "https://open.spotify.com/embed/artist/REPLACE_WITH_VESPA_ID",
    socials: {
      instagram: "https://instagram.com/REPLACE_VESPA",
      spotify: "https://open.spotify.com/artist/REPLACE_WITH_VESPA_ID",
      website: "https://REPLACE-VESPA-WEBSITE.com",
    },
    info: {
      label: "Independent",
      pr: "Artist PR",
      contact: "REPLACE CONTACT",
    },
  },
  {
    id: "offbeat-affair",
    title: "Offbeat Affair",
    slug: "offbeat-affair",
    image: offbeatPhoto,
    bgPosition: "center top",
    category: "music",
    subtitle: "Early Reggae / Rocksteady",
    description: [
  "Offbeat Affair dropped their debut EP and sold out their very first live show: The music did the talking before they ever set foot on stage.",
  "Five musicians from Poland, Brazil, Greece and Iran, brought together by a shared love for Jamaican offbeat music. Guitarist Maciej and drummer Adam from Berlin's punk and skinhead scene, bassist Carlos from the same Oi! roots but with Brazilian music running through his veins, vocalist Marta from the gothic world, and keyboardist Nima, whose eclectic style locks it all together.",
  "Their debut EP Don't Need Love (2026) was recorded fully analog on a 16-track tape machine, mixed to mono, no computers - just warm, syncopated grooves that nod to The Paragons, Alton Ellis and The Aggrolites, with a gritty edge that could only come from Berlin's underground. Artwork by Malwina / Old School Design.",
  "Currently taking their raw, vintage sound to stages across Europe: catch them at Wild At Heart, Supamolly, Gdańsk Ska Jamboree, and alongside The Hotknives and The Butlers for their 40th anniversary show at SO36 Berlin in December 2026.",
  "Don't Need Love is out now!"
],
    spotifyEmbed: "https://open.spotify.com/embed/artist/7IUniaZrcXFpjoQSoDZk3q?theme=0",
    socials: {
      instagram: "https://www.instagram.com/offbeataffairband/",
      spotify: "https://open.spotify.com/artist/7IUniaZrcXFpjoQSoDZk3q?si=idNtTy6_Thu0skGJDk1lhw",
      website: "https://REPLACE-OFFBEAT-WEBSITE.com",
    },
    info: {
      label: "Independent",
      pr: "album(online) / live PR",
      contact: "Maciej",
    },
  },
  {
    id: "tba",
    title: "Coming Soon",
    slug: "tba",
    image: null,
    gradient: "linear-gradient(135deg, #2a1a1a 0%, #5c3a3a 50%, #1a0a0a 100%)",
    bgPosition: "center center",
    category: "music",
    subtitle: "Upcoming project",
    description: [
      "A new project is currently in development and will be revealed soon. This space is reserved for the next artist or collaboration to join the portfolio.",
    ],
    socials: {},
    info: {},
  },
  {
    id: "veegreen",
    title: "Veegreen",
    slug: "veegreen",
    image: veePhoto,
    bgPosition: "center center",
    category: "brand",
    subtitle: "Brand project",
    description: [
      "Veegreen is a sustainable online shop with a clear visual identity and a purpose-driven positioning. The project combines branding, strategy, and digital presence to create something coherent, contemporary, and recognisable.",
      "Unlike the music-focused projects, Veegreen does not need a Spotify embed. The emphasis here is on the brand story, visual universe, and direct access to the website and social presence.",
    ],
    socials: {
      website: "https://www.veegreen.fr/",
      instagram: "https://instagram.com/REPLACE_VEEGREEN",
    },
    info: {
      label: "Brand project",
      contact: "REPLACE CONTACT",
    },
  },
];