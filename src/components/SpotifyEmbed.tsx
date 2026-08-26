import { useState } from "react";

interface SpotifyEmbedProps {
  embedUrl: string;
}

const SpotifyIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className="w-9 h-9"
    fill="currentColor"
  >
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.623.623 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 0 1-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 0 1 .207.857zm1.224-2.723a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 0 1-.973-.519.78.78 0 0 1 .519-.972c3.632-1.102 8.147-.568 11.234 1.328a.78.78 0 0 1 .257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 1 1-.543-1.794c3.532-1.072 9.404-.865 13.115 1.338a.937.937 0 0 1-.954 1.612z" />
  </svg>
);

/**
 * Click-to-load Spotify embed.
 *
 * Spotify's iframe app needs third-party cookies to initialize. When a
 * visitor's browser blocks them (Incognito defaults, Safari ITP, Chrome's
 * ongoing third-party cookie phase-out, ad-blockers, etc.) the iframe loads
 * an empty shell — a permanently blank/black box with no error and no
 * fallback. That's not fixable in our code; it's the browser enforcing its
 * own cookie policy.
 *
 * Loading the iframe only after an explicit click sidesteps this two ways:
 * - Visitors who'd otherwise see a broken black box instead get a working
 *   "Listen on Spotify" link straight to the track/artist/album.
 * - No Spotify cookies are set until the visitor opts in by clicking,
 *   closing a pre-consent cookie-setting gap (same category of issue
 *   already solved for GA4/Meta Pixel via KookiOk's gating pattern).
 */
const SpotifyEmbed = ({ embedUrl }: SpotifyEmbedProps) => {
  const [loaded, setLoaded] = useState(false);

  const height = embedUrl.includes("artist")
    ? 352
    : embedUrl.includes("album")
      ? 380
      : 152;

  // Spotify's embed URLs are shaped like:
  //   https://open.spotify.com/embed/artist/<id>?theme=0
  // The visitor-facing (non-embed) page is the same path without "/embed":
  //   https://open.spotify.com/artist/<id>
  const listenUrl = embedUrl.replace("/embed/", "/").split("?")[0];

  if (loaded) {
    return (
      <div className="w-full flex flex-col items-center gap-2">
        <div className="w-full border-4 border-primary-black shadow-[8px_8px_0px_#000000] overflow-hidden bg-black">
          <iframe
            src={embedUrl}
            width="100%"
            height={height}
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="block w-full"
          />
        </div>

        {/* Always-visible fallback: Spotify's embed needs third-party
            cookies to render. If the visitor's browser blocks them, the
            iframe above stays permanently blank with no error — this link
            is the only way forward in that case, so it can't be sr-only. */}
        <a
          href={listenUrl}
          target="_blank"
          rel="noreferrer"
          className="font-plus-jakarta-sans text-md text-primary-black/70 hover:text-primary-black underline underline-offset-2 transition-colors duration-150"
        >
          Player not loading? Open in Spotify ↗
        </a>
      </div>
    );
  }

  return (
    <div
      className="w-full border-4 border-primary-black shadow-[8px_8px_0px_#000000] overflow-hidden bg-black flex items-center justify-center"
      style={{ height }}
    >
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="
          font-permanent-marker text-xl
          text-third-pink
          bg-primary-black
          border-t-2 border-r border-l border-b border-third-pink
            h-15 w-70
          flex items-center justify-center gap-3
          shadow-[5px_5px_0px_#000000]
          hover:shadow-[2px_2px_0px_#000000]
          hover:translate-x-0.75
          hover:translate-y-0.75
          transition-all duration-500
        "
      >
        <SpotifyIcon />
        Listen on Spotify
      </button>
    </div>
  );
};

export default SpotifyEmbed;