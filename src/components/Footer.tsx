import logo from "/logos/riotseed-color-long.svg";

const Footer = () => {
  return (
    <footer className="w-full">
     <style>{`
  .footer-wave-section {
    background-color: #6bf7c9;
    line-height: 0;
  }

  .footer-bottom {
    background-color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 6rem 2rem;
  }

  .footer-bottom-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
    width: 100%;
    max-width: 1800px;
    margin-bottom: 8rem;
  }

  .footer-logo-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .footer-logo-img {
    width: 320px;
    height: auto;
    display: block;
    transition: transform 0.15s ease;
  }

  .footer-logo-link:hover .footer-logo-img {
    transform: scale(1.03);
  }

  .footer-socials {
    display: flex;
    flex-direction: row;
    gap: 2.5rem;
    align-items: center;
  }

  .footer-social-link {
    color: #fb387a;
    transition: color 0.1s, transform 0.1s;
    display: flex;
    align-items: center;
  }

  .footer-social-link:hover {
    color: #6bf7c9;
    transform: translateY(-3px);
  }

  .footer-cta {
    font-family: 'Permanent Marker', cursive;
    font-size: 1.25rem;
    color: #fb387a;
    background-color: #000000;

    border-top: 1px solid #fb387a;
    border-right: 3px solid #fb387a;
    border-bottom: 3px solid #fb387a;
    border-left: 1px solid #fb387a;

    border-radius: 0.5rem;

    min-width: 200px;
    height: 52px;
    padding: 0 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;
    white-space: nowrap;

    box-shadow: 4px 4px 0px #fb387a;
    transition: all 0.3s ease;
  }

  .footer-cta:hover {
    color: #6bf7c9;
    border-color: #6bf7c9;
    box-shadow: 2px 2px 0px #6bf7c9;
    transform: translate(3px, 3px);
  }

  .footer-copyright {
    font-family: 'Shantell Sans', cursive;
    font-size: 0.875rem;
    color: #444444;
    text-align: center;
    padding-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .footer-bottom-row {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      width: 100%;
      max-width: 1800px;
    }

    .footer-logo-link {
      justify-self: start;
    }

    .footer-socials {
      justify-self: center;
    }

    .footer-cta {
      justify-self: end;
    }
  }

  @media (max-width: 768px) {
    .footer-bottom {
      padding: 1rem 2rem 2rem;
    }

    .footer-bottom-row {
      margin-bottom: 6rem;
    }

    .footer-logo-img {
      width: 260px;
    }

    .footer-socials {
      gap: 2rem;
    }

    .footer-cta {
      font-size: 1.15rem;
      min-width: 200px;
      height: 52px;
    }
  }
`}</style>

      {/* Wave */}
      <div className="footer-wave-section">
        <svg
          viewBox="0 0 1440 280"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: "280px" }}
        >
          <path
            d="M0,80 C200,200 400,20 600,120 C800,220 1000,40 1200,140 C1320,200 1380,160 1440,140 L1440,280 L0,280 Z"
            fill="#000000"
          />
        </svg>
      </div>

      {/* Bottom — Black */}
      <div className="footer-bottom">
        <div className="footer-bottom-row">
          <a href="/" className="footer-logo-link" aria-label="Riotseed home">
            <img src={logo} alt="Riotseed logo" width={320} height={84} className="footer-logo-img" />
          </a>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/riotseed/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="32"
                height="32"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

            <a
              href="https://www.tiktok.com/@riotseed"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="TikTok"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="32"
                height="32"
              >
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
              </svg>
            </a>

            <a
              href="https://open.spotify.com/user/1120329740?si=b969c93a2875443c"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Spotify"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="32"
                height="32"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.623.623 0 0 1-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 0 1-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.623.623 0 0 1 .207.857zm1.224-2.723a.78.78 0 0 1-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 0 1-.973-.519.78.78 0 0 1 .519-.972c3.632-1.102 8.147-.568 11.234 1.328a.78.78 0 0 1 .257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.937.937 0 1 1-.543-1.794c3.532-1.072 9.404-.865 13.115 1.338a.937.937 0 0 1-.954 1.612z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/company/riotseed/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="32"
                height="32"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>

          <a href="mailto:aude@riotseed.com" className="footer-cta">
            Get in Touch
          </a>
        </div>

        <p className="footer-copyright">
          ©{new Date().getFullYear()} Riotseed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
