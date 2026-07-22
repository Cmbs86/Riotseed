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
    imageAlt:
      "Vespa ska band from Szczecin Poland — Riotseed music marketing project, social media optimization and paid media campaign",
    bgPosition: "center left",
    category: "music",
    subtitle: "Ska / Swing / Reggae — Szczecin, Poland",
    description: [
      "Vespa has been one of Poland's pioneering ska bands since 1995, blending Jamaican rhythms with soul, swing, and rock'n'roll across six studio albums. Their four-piece brass section and sharp vintage style have made them a fixture of the European ska scene. Catch them live in Poland, Germany, or beyond.",
    ],
    whatWeDidTitle: "What we did together",
    whatWeDid: [
      "Ahead of their sixth album release and European tour, the goal was to sharpen Vespa's entire digital presence and make sure their online visibility matched their live reputation. We ran a full audit and optimization across all platforms: Instagram, Facebook, YouTube, Spotify, Bandcamp, Apple Music, and Deezer.",

      "We rewrote their bios for SEO, harmonized their branding across every channel, set up Google Analytics and Search Console, claimed their Google Knowledge Panel, and built a content strategy tailored to each platform. On top of that, we ran a paid media campaign to promote their upcoming tour dates.",
    ],
    results: [
      "A fully optimized, consistent, and professional digital presence across all platforms, ready to support an album launch and European tour.",
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
      downloadUrl: "https://vespaband.pl/download/vespa_press_pack_en.zip",
    },
  },
  {
    id: "offbeat-affair",
    title: "Offbeat Affair",
    slug: "offbeat-affair",
    image: offbeatPhoto,
    imageAlt:
      "Offbeat Affair early reggae and rocksteady band Berlin — Riotseed EPK creation and music marketing project",
    bgPosition: "center center",
    category: "music",
    subtitle: "Early Reggae / Rocksteady / Soul — Berlin, Germany",
    description: [
      "Offbeat Affair is a Berlin five-piece blending early reggae, ska, and soul into a sound rooted in Kingston circa 1967. Five musicians from Poland, Brazil, Greece, and Australia recorded their debut EP, Don't Need Love, fully analogue on a 16-track tape machine. They sold out their first show before ever setting foot on a Berlin stage.",
    ],
    whatWeDidTitle: "What we're doing together",
    whatWeDid: [
      "Offbeat Affair is a brand new band. I built their complete EPK from scratch to pitch venues, festivals, and media, ran a full social media optimization, and built a content strategy to generate awareness and reach new audiences ahead of their first live dates. Playlist pitching and paid media campaigns are currently in progress to grow their listener base across Germany and beyond.",
    ],

    results: [
      "First show sold out. Playlist adds up 188.9%, Instagram up 14%, Spotify monthly listeners up 8.1%.",

      "Shows booked at Berlin's Wild At Heart, Supamolly, Schokoladen, and SO36 alongside The Hotknives and The Butlers.",

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
      downloadUrl:
        "https://drive.google.com/drive/folders/1I9u--FBCsIgkfkUH1PignQfxssNemdfs?usp=sharing",
    },
  },
  {
    id: "sick-saints",
    title: "Sick Saints",
    slug: "sick-saints",
    image: sicksaintsPhoto,
    imageAlt:
      "Sick Saints brutal glam band from Kraków Poland — Riotseed music marketing campaign, European tour promotion",
    gradient: "linear-gradient(135deg, #2a1a1a 0%, #5c3a3a 50%, #1a0a0a 100%)",
    bgPosition: "center center",
    category: "music",
    subtitle: "Brutal Glam / Heavy Rock — Kraków, Poland",
    description: [
      "Sick Saints play Brutal Glam: a high-energy collision of 70s glam, 80s metal, and larger-than-life stage presence. Founded by guitarist Mighty Mike in 2020, the Kraków-based band has quickly become one of the most exciting acts on the Polish rock scene, with two national tours supporting Nocny Kochanek and a debut album Out of the Night released in 2025. In 2026, they launched their first European tour.",
    ],
    whatWeDidTitle: "What we're doing together",
    whatWeDid: [
      "The goal: start building real, repeatable fanbases in Germany and France — not just views, but actual fans showing up to shows.",

      "I created localized bios and press materials in German and French, then built a comprehensive mapping of the European scene: over 600 contacts including relevant blogs, radio shows, playlist curators, venues, festivals, and potential collaboration partners across both territories, with clear prioritization for outreach.",

      "I’m currently running targeted playlist pitching to key contacts in DE/FR, and adapting their social media content for local audiences, all coordinated with the band's existing PR and paid ads teams.",
    ],

    results: [
      "Scene mapping delivered with 600+ curated contacts across Germany and France.",

      "4 playlists secured, 14,600+ combined reach.",

      "Festival entry pathway mapped toward Wacken and Hellfest.",

      "Playlist pitching campaigns currently active ahead of European tour dates.",
    ],

    testimonial: {
      quote: "It was a pleasure to work with you, thanks for everything you've done. We have playlist results so it's very good for us!",
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
      downloadUrl: "https://sicksaints.com/presspacks/",
    },
  },
  {
    id: "veegreen",
    title: "Veegreen",
    slug: "veegreen",
    image: veePhoto,
    imageAlt:
      "Veegreen sustainable wellness brand — Riotseed SEO and content marketing project, Palo Santo and white sage",
    bgPosition: "center top",
    category: "brand",
    subtitle: "Sustainable Wellness brand — France",
    description: [
      "Veegreen is a French e-commerce brand rooted in well-being, purification rituals, and ethically sourced products, from Palo Santo and white sage to organic maté. A brand built on authenticity, sustainability, and connection to nature.",
    ],
    whatWeDidTitle: "What we did together",
    whatWeDid: [
      "The goal was to build Veegreen’s organic visibility on Google and turn the website into a real acquisition channel.",

      "Over six months, we ran a full SEO strategy: complete technical audit, on-page optimization of all product descriptions and collections, keyword research, blog content creation and rewrite, internal linking architecture, metadata overhaul, and performance optimization.",

      "I also built a social media audit with a ready-to-deploy content strategy.",
      "Alongside this, my developer [Carlos Sousa](https://www.linkedin.com/in/carlos-brito-de-sousa) worked on the Shopify site itself: improving page load speed, simplifying the user journey, and making sure the technical SEO fundamentals were properly in place and mobile responsive.",
    ],

    results: [
      "+79% estimated organic traffic.",

      "+57% keywords ranking in Google’s Top 10.",

      "183 keywords positioned, 25 in the Top 10.",

      "Over 600 clicks on three key blog articles alone.",

      "39,100 impressions on Google Search in December.",

      "Faster load times and a cleaner, fully mobile-responsive site, thanks to the technical work behind the scenes.",

      "The site now ranks as a natural reference for searches around Palo Santo, white sage, and organic maté in France, with solid foundations to expand into the German market next.",
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
      downloadUrl: "https://heyzine.com/flip-book/de3d2ff9a8.html",
    },
  },
];
