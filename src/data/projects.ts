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
    subtitle: "Music project",
    description: [
      "Offbeat Affair blends personality, mood, and a distinct visual identity into a project that feels both playful and refined. The result is a world that is recognisable at a glance and easy to connect with.",
      "This page gives space for the project story, listening access, and key links, creating a simple but focused presentation for visitors who want to explore further.",
    ],
    spotifyEmbed: "https://open.spotify.com/embed/artist/REPLACE_WITH_OFFBEAT_ID",
    socials: {
      instagram: "https://instagram.com/REPLACE_OFFBEAT",
      spotify: "https://open.spotify.com/artist/REPLACE_WITH_OFFBEAT_ID",
      website: "https://REPLACE-OFFBEAT-WEBSITE.com",
    },
    info: {
      label: "Independent",
      pr: "Artist PR",
      contact: "REPLACE CONTACT",
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