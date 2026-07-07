import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-second-pink flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-permanent-marker text-4xl md:text-6xl text-primary-black mb-6">
          Page not found
        </h1>
        <p className="font-shantell-sans text-lg md:text-xl text-primary-black mb-8">
          This page doesn't exist. Let's get you back on track.
        </p>
        <Link
          to="/"
          className="inline-block font-permanent-marker text-lg md:text-xl text-primary-black bg-primary-green border-4 border-primary-black shadow-[6px_6px_0px_#000000] px-6 py-3 hover:shadow-[3px_3px_0px_#000000] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;