import type { Project } from "../types";

import vespaPhoto from "../assets/images/VespaBand.webp";
import offbeatPhoto from "../assets/images/OffbeatAffairBand.webp";
import veePhoto from "../assets/images/Veegreen2.webp";
import sicksaintsPhoto from "../assets/images/sick-saints.webp";

export const projects: Project[] = [
  {
    id: "vespa",
    title: "Vespa",
    slug: "vespa",
    image: vespaPhoto,
    bgPosition: "center left",
    category: "music",
    subtitle: "Ska Music",
    description: [
      "Vespa: Pioneers of Ska Music in Poland",
      "There is no doubt that Vespa is is one of the pioneers of Ska music in Poland. Known for their unique blend of Jamaican rhythms and a mix of soul, swing, and rock'n'roll, Vespa has solidified their place as one of the top ska bands in Poland since 1995. With six critically acclaimed LPs, the band continues to captivate audiences both old and new.",
      "Their energetic live shows are a trademark of their career. Vespa's retro style, a dynamic four-piece brass section, and the distinctive presence of their female vocalist have made them a favorite across Europe. With a love for vintage fashion, sharp suits, and brass-heavy grooves, they became a staple in Polandâs alternative music scene, bridging the gap between traditional ska and a modern, danceable sound.",
      "Whether in Poland, Germany, the UK, or Russia, the performances of the band from Szczecin are known for their lively, unpredictable interludes and unforgettable stage presence.",
      "Don't miss your chance to see them live on tour!",
    ],
    whatWeDid: [
      "Ahead of their 6th album release and European tour, the goal was to sharpen Vespa’s entire digital presence and make sure their online visibility matched their live reputation. We ran a full audit and optimization across all platforms — Instagram, Facebook, YouTube, Spotify, Bandcamp, Apple Music, and Deezer.",

      "We rewrote their bios for SEO, harmonized their branding across every channel, set up Google Analytics and Search Console, claimed their Google Knowledge Panel, and built a content strategy tailored to each platform. On top of that, we ran a paid media campaign to promote their upcoming tour dates.",
    ],
    results: [
      "A fully optimized, consistent, and professional digital presence across all platforms — ready to support an album launch and European tour.",
    ],
    testimonial: {
      quote:
        "Thanks to Aude's work, our digital presence fast-forwarded from the '90s to the latest online trends. You also rarely meet someone so professional and approachable at the same time.",
      author: "Maciej, VESPA",
    },

    spotifyEmbed:
      "https://open.spotify.com/embed/artist/1viUiCv2UhZg1JKQRDKRxw?theme=0",
    socials: {
      instagram: "https://instagram.com/REPLACE_VESPA",
      spotify:
        "https://open.spotify.com/artist/1viUiCv2UhZg1JKQRDKRxw?si=TBMKAp8VT1qjFh_5nf2cWw",
      facebook: "https://www.facebook.com/vespaband",
      website: "https://vespaband.pl/en/",
      bandcamp: "https://vespaband.bandcamp.com/music",
    },
    socialOrder: ["website", "facebook", "instagram", "bandcamp", "spotify"],
    info: {
      label: "Independent",
      contact: "vespa.ska@gmail.com",
      download: "PRESS PACK",
    },
  },
  {
    id: "offbeat-affair",
    title: "Offbeat Affair",
    slug: "offbeat-affair",
    image: offbeatPhoto,
    bgPosition: "center center",
    category: "music",
    subtitle: "Early Reggae / Rocksteady",
    description: [
      "Offbeat Affair dropped their debut EP and sold out their very first live show: The music did the talking before they ever set foot on stage.",
      "Five musicians from Poland, Brazil, Greece and Iran, brought together by a shared love for Jamaican offbeat music. Guitarist Maciej and drummer Adam from Berlin's punk and skinhead scene, bassist Carlos from the same Oi! roots but with Brazilian music running through his veins, vocalist Marta from the gothic world, and keyboardist Nima, whose eclectic style locks it all together.",
      "Their debut EP Don't Need Love (2026) was recorded fully analog on a 16-track tape machine, mixed to mono, no computers - just warm, syncopated grooves that nod to The Paragons, Alton Ellis and The Aggrolites, with a gritty edge that could only come from Berlin's underground. Artwork by Malwina / Old School Design.",
      "Currently taking their raw, vintage sound to stages across Europe: catch them at Wild At Heart, Supamolly, Gdańsk Ska Jamboree, and alongside The Hotknives and The Butlers for their 40th anniversary show at SO36 Berlin in December 2026.",
      "Don't Need Love is out now!",
    ],
    whatWeDid: [
      "Offbeat Affair needed a digital identity that matched the authenticity of their sound and the uniqueness of their international lineup. The focus was on building a coherent visual and strategic presence around the release of their debut EP and first live shows.",

      "We developed their branding direction, optimized and connected their social platforms, structured their release communication, refined artist bios and press materials, and helped position the band within Berlin’s underground reggae and rocksteady scene. We also supported the rollout strategy around their debut release and upcoming concerts.",
    ],

    results: [
      "A strong and cohesive debut presence across streaming, social media, and live promotion — helping establish Offbeat Affair as a fresh name within the European reggae and rocksteady scene.",
    ],

    testimonial: {
      quote:
        "Working together gave the project a real sense of direction and professionalism from the very beginning. Everything finally felt connected visually and strategically.",
      author: "Offbeat Affair",
    },
    spotifyEmbed:
      "https://open.spotify.com/embed/artist/7IUniaZrcXFpjoQSoDZk3q?theme=0",
    socials: {
      instagram: "https://www.instagram.com/offbeataffairband/",
      tiktok: "https://www.tiktok.com/@offbeat.affair",
      spotify:
        "https://open.spotify.com/artist/7IUniaZrcXFpjoQSoDZk3q?si=idNtTy6_Thu0skGJDk1lhw",
      facebook: "https://www.facebook.com/offbeataffair",
      bandcamp: "https://offbeataffair.bandcamp.com/album/dont-need-love",
    },
    socialOrder: ["instagram", "facebook", "bandcamp", "spotify"],
    info: {
      label: "Independent",
      contact: "offbeat.affair.band@gmail.com",
      download: "PRESS PACK",
    },
  },
  {
    id: "Sick Saints",
    title: "Sick Saints",
    slug: "Sick Saints",
    image: sicksaintsPhoto,
    gradient: "linear-gradient(135deg, #2a1a1a 0%, #5c3a3a 50%, #1a0a0a 100%)",
    bgPosition: "center center",
    category: "music",
    subtitle: "Brutal Glam / Heavy Rock",
    description: [
      "Sick Saints play Brutal Glam: a high-energy collision of 70s glam, 80s metal, and larger-than-life stage presence.",
      "Founded by guitarist Mighty Mike in 2020, the Kraków-based band has quickly become one of the most exciting acts on the Polish rock scene, with two nationaltours supporting Nocny Kochanek and a debut album “Out of the Night” released in 2025.",
      "In2026, they launched their first European tour.",
    ],
    whatWeDid: [
      "Sick Saints were preparing to expand beyond the Polish rock scene and needed a digital presence capable of supporting a larger international audience and touring activity.",

      "We worked on strengthening the band’s branding consistency across platforms, improving online visibility, refining promotional communication, and supporting the presentation of the band’s image across streaming services, social media, and press materials.",
    ],

    results: [
      "A sharper and more unified digital identity that better reflected the band’s energy, aesthetic, and growing presence on the European heavy rock circuit.",
    ],

    testimonial: {
      quote:
        "The entire project started feeling bigger, more professional, and far more aligned with the image we always wanted to project.",
      author: "Mighty Mike, Sick Saints",
    },
    spotifyEmbed:
      "https://open.spotify.com/embed/artist/5c4gmndNhZtOjeZdaMizIk?utm_source=generator&theme=0",
    socials: {
      instagram: "https://www.instagram.com/sicksaints.band/",
      tiktok: "https://www.tiktok.com/@sicksaints",
      facebook: "https://www.facebook.com/sicksaints.music/",
      website: "https://sicksaints.com/band",
      spotify:
        "https://open.spotify.com/artist/5c4gmndNhZtOjeZdaMizIk?si=9e7b8f1a9c3b4d2e",
      bandcamp: "https://sicksaints.bandcamp.com/album/sick-saints",
    },
    socialOrder: [
      "instagram",
      "tiktok",
      "facebook",
      "website",
      "spotify",
      "bandcamp",
    ],
    info: {
      label: "Mighty Mike Productions",
      contact: "sicksaints.music@gmail.com",
      download: "PRESS PACK",
    },
  },
  {
    id: "veegreen",
    title: "Veegreen",
    slug: "veegreen",
    image: veePhoto,
    bgPosition: "center top",
    category: "brand",
    subtitle: "Natural products",
    description: [
      "Veegreen is a sustainable online shop with a clear visual identity and a purpose-driven positioning. The project combines branding, strategy, and digital presence to create something coherent, contemporary, and recognisable.",
      "Unlike the music-focused projects, Veegreen does not need a Spotify embed. The emphasis here is on the brand story, visual universe, and direct access to the website and social presence.",
    ],
    whatWeDid: [
      "Veegreen needed a digital presence that reflected its sustainable philosophy while remaining modern, clean, and commercially effective. The objective was to create a strong visual identity and coherent online communication strategy.",

      "We worked on branding direction, visual consistency, website positioning, social media strategy, and the overall presentation of the brand across digital platforms. The project focused on creating a contemporary image capable of building trust and recognisability.",
    ],

    results: [
      "A cohesive and professional brand identity with a stronger online presence, clearer positioning, and improved consistency across all digital touchpoints.",
    ],

    testimonial: {
      quote:
        "The project finally started looking and feeling like a real brand with a clear identity and direction.",
      author: "Veegreen",
    },
    socials: {
      instagram: "https://www.instagram.com/veegreen_official/",
      tiktok: "https://www.tiktok.com/@veegreen_official",
      website: "https://www.veegreen.fr/",
      linkedin: "https://www.linkedin.com/company/veegreen",
    },
    socialOrder: ["instagram", "tiktok", "website", "linkedin"],
    info: {
      contact: "Benoît Petit",
      download: "2026 CATALOGUE",
    },
  },
];
