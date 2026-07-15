import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-second-pink flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-permanent-marker text-4xl md:text-6xl text-primary-black mb-4">
          Page not found
        </h1>
        <p className="font-plus-jakarta-sans text-lg md:text-xl text-primary-black mb-8">
          This page doesn't exist — let's get you back on track.
        </p>
        <Link
          to="/"
          className="font-permanent-marker text-xl text-primary-black bg-primary-green border-t-2 border-r-4 border-l-2 border-b-4 border-primary-black rounded-lg w-48 h-13  inline-flex items-center justify-center shadow-[5px_5px_0px_#000000] hover:shadow-[2px_2px_0px_#000000] hover:translate-x-0.75 hover:translate-y-0.75 transition-all duration-500"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;