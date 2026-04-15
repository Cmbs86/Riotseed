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
    subtitle: "Ska Music",
    description: [
      "Vespa: Pioneers of Ska Music in Poland",
      "There is no doubt that Vespa is is one of the pioneers of Ska music in Poland. Known for their unique blend of Jamaican rhythms and a mix of soul, swing, and rock'n'roll, Vespa has solidified their place as one of the top ska bands in Poland since 1995. With six critically acclaimed LPs, the band continues to captivate audiences both old and new.",
      "Their energetic live shows are a trademark of their career. Vespa's retro style, a dynamic four-piece brass section, and the distinctive presence of their female vocalist have made them a favorite across Europe. With a love for vintage fashion, sharp suits, and brass-heavy grooves, they became a staple in Polandâs alternative music scene, bridging the gap between traditional ska and a modern, danceable sound.",
      "Whether in Poland, Germany, the UK, or Russia, the performances of the band from Szczecin are known for their lively, unpredictable interludes and unforgettable stage presence.",
      "Don't miss your chance to see them live on tour!",
    ],
    spotifyEmbed: "https://open.spotify.com/embed/artist/1viUiCv2UhZg1JKQRDKRxw?theme=0",
    socials: {
      instagram: "https://instagram.com/REPLACE_VESPA",
      spotify: "https://open.spotify.com/artist/1viUiCv2UhZg1JKQRDKRxw?si=TBMKAp8VT1qjFh_5nf2cWw",
      facebook: "https://www.facebook.com/vespaband",
      website: "https://vespaband.pl/en/",
      bandcamp: "https://vespaband.bandcamp.com/music",
    },
    socialOrder: ["website", "facebook", "instagram", "bandcamp", "spotify"],
    info: {
      label: "Independent",
      pr: "Artist PR",
      contact: "Maciej",
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
      "Don't Need Love is out now!",
    ],
    spotifyEmbed:
      "https://open.spotify.com/embed/artist/7IUniaZrcXFpjoQSoDZk3q?theme=0",
    socials: {
      instagram: "https://www.instagram.com/offbeataffairband/",
      spotify:
        "https://open.spotify.com/artist/7IUniaZrcXFpjoQSoDZk3q?si=idNtTy6_Thu0skGJDk1lhw",
      facebook: "https://www.facebook.com/offbeataffair",
      bandcamp: "https://offbeataffair.bandcamp.com/album/dont-need-love",
    },
    socialOrder: ["instagram", "facebook", "bandcamp", "spotify"],
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
    gradient:
      "linear-gradient(135deg, #2a1a1a 0%, #5c3a3a 50%, #1a0a0a 100%)",
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
    subtitle: "Natural products",
    description: [
      "Veegreen is a sustainable online shop with a clear visual identity and a purpose-driven positioning. The project combines branding, strategy, and digital presence to create something coherent, contemporary, and recognisable.",
      "Unlike the music-focused projects, Veegreen does not need a Spotify embed. The emphasis here is on the brand story, visual universe, and direct access to the website and social presence.",
    ],
    socials: {
      instagram: "https://www.instagram.com/veegreen_official/",
      tiktok: "https://www.tiktok.com/@veegreen_official",
      website: "https://www.veegreen.fr/",
      linkedin: "https://www.linkedin.com/company/veegreen",
    },
    socialOrder: ["instagram", "tiktok", "website", "linkedin"],
    info: {
      label: "Brand project",
      contact: "REPLACE CONTACT",
    },
  },
];