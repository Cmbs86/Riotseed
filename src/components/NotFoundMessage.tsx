import { Link } from "react-router-dom";
import mascotImage from "../assets/images/riotseed-logo-hand.webp";

type NotFoundMessageProps = {
  title: string;
  message: string;
  backTo: string;
  backLabel: string;
};

const NotFoundMessage = ({
  title,
  message,
  backTo,
  backLabel,
}: NotFoundMessageProps) => {
  return (
    <section className="min-h-screen bg-second-pink">
      {/* Space for fixed header */}
      <div className="h-24 md:h-32 lg:h-44 w-full" />

      <div className="w-full px-6 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-primary-black rounded-full aspect-square w-56 md:w-94 flex items-center justify-center overflow-hidden border-t-2 border-r-4 border-l-2 border-b-4 border-primary-black shadow-[6px_6px_0px_#000000]">
          <img
            src={mascotImage}
            alt="Riotseed raised fist holding a torch and leaf, wrapped in a ribbon reading Riot Seed"
            className="max-w-[90%] max-h-[110%] w-auto h-auto object-contain"
          />
        </div>

        <div className="w-full h-8 md:h-10 max-w-xl" />

        <h1 className="font-permanent-marker text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary-black text-center mb-4 md:mb-6 max-w-xl">
          {title}
        </h1>
       <div className="w-full h-2 md:h-4" />
        <p className="font-shantell-sans text-base sm:text-lg md:text-xl text-primary-black text-center mb-8 md:mb-10 max-w-xl">
          {message}
        </p>
       <div className="w-full h-6 md:h-10" />
        <Link
          to={backTo}
          className="font-permanent-marker text-lg sm:text-xl text-primary-black bg-primary-green border-t-2 border-r-4 border-l-2 border-b-4 border-primary-black rounded-lg w-48 h-13 inline-flex items-center justify-center shadow-[5px_5px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-0.75 hover:translate-y-0.75 transition-all duration-500"
        >
          {backLabel}
        </Link>
      </div>
    </section>
  );
};

export default NotFoundMessage;
