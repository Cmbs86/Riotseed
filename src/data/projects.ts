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
    imageAlt: "Vespa ska band from Szczecin Poland — Riotseed music marketing project, social media optimization and paid media campaign",
    bgPosition: "center left",
    category: "music",
    subtitle: "Ska / Swing / Reggae — Szczecin, Poland",
    description: [
      "Vespa: Pioneers of Ska Music in Poland",
      "There is no doubt that Vespa is is one of the pioneers of Ska music in Poland. Known for their unique blend of Jamaican rhythms and a mix of soul, swing, and rock'n'roll, Vespa has solidified their place as one of the top ska bands in Poland since 1995. With six critically acclaimed LPs, the band continues to captivate audiences both old and new.",
      "Their energetic live shows are a trademark of their career. Vespa's retro style, a dynamic four-piece brass section, and the distinctive presence of their female vocalist have made them a favorite across Europe. With a love for vintage fashion, sharp suits, and brass-heavy grooves, they became a staple in Poland's alternative music scene, bridging the gap between traditional ska and a modern, danceable sound.",
      "Whether in Poland, Germany, the UK, or Russia, the performances of the band from Szczecin are known for their lively, unpredictable interludes and unforgettable stage presence.",
      "Don't miss your chance to see them live on tour!",
    ],
    whatWeDidTitle: "What we did together",
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
      instagram: "https://www.instagram.com/vespaband/",
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
      downloadUrl: "/downloads/sick-saints-press-pack.pdf",
    },
  },
  {
    id: "offbeat-affair",
    title: "Offbeat Affair",
    slug: "offbeat-affair",
    image: offbeatPhoto,
    imageAlt: "Offbeat Affair early reggae and rocksteady band Berlin — Riotseed EPK creation and music marketing project",
    bgPosition: "center center",
    category: "music",
    subtitle: "Early Reggae / Rocksteady / Soul — Berlin, Germany",
    description: [
      "Offbeat Affair is a Berlin five-piece blending early reggae, rocksteady, ska, and soul into something that sounds like Kingston circa 1967 filtered through Berlin’s underground.",
      "Five musicians from wildly different worlds — punk, Oi!, goth, Brazilian music — united by a shared love for Jamaican offbeat rhythms.",
      "Their debut EP “Don’t Need Love” was recorded fully analog on a 16-track tape machine, mixed to mono, no computers.",
      "They sold out their very first show before ever setting foot on stage.",
    ],
    whatWeDidTitle: "What we're doing together",
    whatWeDid: [
      "Offbeat Affair is a brand new band — everything needed to be built from scratch. We created their complete EPK to pitch venues, festivals, and media.",

      "We ran a full social media optimization and built a content strategy to generate awareness and reach new audiences ahead of their first live dates. Playlist pitching and paid media campaigns are currently in progress to drive streams and grow their listener base across Germany and beyond.",
    ],

    results: [
      "First show sold out.",

      "Spotify followers up 19.3%, playlist adds up 188.9%.",

      "Shows booked at Berlin’s Wild At Heart, Supamolly, Schokoladen, and SO36 alongside The Hotknives and The Butlers.",

      "Festival slots secured at Gdańsk Ska Jamboree and Offbeat Attack.",

      "Featured in Tighten Up Zine.",

      "Playlist pitching and paid media campaigns currently active.",
    ],

    testimonial: {
      quote: "Client testimonial coming soon.",
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
      downloadUrl: "/downloads/offbeat-affair-press-pack.pdf",
    },
  },
  {
    id: "sick-saints",
    title: "Sick Saints",
    slug: "sick-saints",
    image: sicksaintsPhoto,
    imageAlt: "Sick Saints brutal glam band from Kraków Poland — Riotseed music marketing campaign, European tour promotion",
    gradient: "linear-gradient(135deg, #2a1a1a 0%, #5c3a3a 50%, #1a0a0a 100%)",
    bgPosition: "center center",
    category: "music",
    subtitle: "Brutal Glam / Heavy Rock — Kraków, Poland",
    description: [
      "Sick Saints play Brutal Glam: a high-energy collision of 70s glam, 80s metal, and larger-than-life stage presence.",

      "Founded by guitarist Mighty Mike in 2020, the Kraków-based band has quickly become one of the most exciting acts on the Polish rock scene, with two national tours supporting Nocny Kochanek and a debut album 'Out of the Night' released in 2025.",

      "In 2026, they launched their first European tour.",
    ],
    whatWeDidTitle: "What we're doing together",
    whatWeDid: [
      "The goal: start building real, repeatable fanbases in Germany and France — not just views, but actual fans showing up to shows.",

      "We created localized bios and press materials in German and French, then built a comprehensive mapping of the European scene — over 1,000 contacts including relevant blogs, radio shows, playlist curators, venues, festivals, and potential collaboration partners across both territories, with clear prioritization for outreach.",

      "We’re currently running targeted PR and playlist pitching to key contacts in DE/FR, and adapting their social media content for local audiences — all coordinated with the band’s existing PR and paid ads teams.",
    ],

    results: [
      "Project in progress.",

      "Scene mapping delivered with 1,000+ curated contacts across Germany and France.",

      "PR and playlist pitching campaign currently active ahead of European tour dates.",
    ],

    testimonial: {
      quote: "Client testimonial coming soon.",
      author: "Sick Saints",
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
      downloadUrl: "/downloads/sick-saints-press-pack.pdf",
    },
  },
  {
    id: "veegreen",
    title: "Veegreen",
    slug: "veegreen",
    image: veePhoto,
    imageAlt: "Veegreen sustainable wellness brand — Riotseed SEO and content marketing project, Palo Santo and white sage",
    bgPosition: "center top",
    category: "brand",
    subtitle: "Sustainable Wellness brand — France",
    description: [
      "Veegreen is a French e-commerce brand rooted in well-being, purification rituals, and ethically sourced products — from Palo Santo and white sage to organic maté.",

      "A brand built on authenticity, sustainability, and connection to nature.",
    ],
    whatWeDidTitle: "What we did together",
    whatWeDid: [
      "The goal was to build Veegreen’s organic visibility on Google and turn the website into a real acquisition channel.",

      "Over six months, we ran a full SEO strategy: complete technical audit, on-page optimization of all product descriptions and collections, keyword research, blog content creation and rewrite, internal linking architecture, metadata overhaul, and performance optimization.",

      "We also built a social media audit with a ready-to-deploy content strategy.",
    ],

    results: [
      "+79% estimated organic traffic.",

      "+57% keywords ranking in Google’s Top 10.",

      "183 keywords positioned, 25 in the Top 10.",

      "Over 600 clicks on three key blog articles alone.",

      "39,100 impressions on Google Search in December.",

      "The site now ranks as a natural reference for searches around Palo Santo, white sage, and organic maté in France — with solid foundations to expand into the German market next.",
    ],

    testimonial: {
      quote:
        "We worked with Aude on our website’s SEO. The collaboration went really well — smooth communication, a genuine understanding of our brand’s universe, and content delivered with real care. A positive experience we’d be happy to repeat. I found the collaboration both enjoyable and professional, with great responsiveness and real involvement in the project. The content was perfectly aligned with the lifestyle and natural feel we wanted for the brand.",

      author: "Benoit Petit, Founder, Veegreen",
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
      downloadUrl: "/downloads/veegreen-2026-catalogue.pdf",
    },
  },
];
