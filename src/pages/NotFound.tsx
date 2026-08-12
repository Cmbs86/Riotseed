import { Helmet } from "react-helmet-async";
import NotFoundMessage from "../components/NotFoundMessage";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Riotseed</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <NotFoundMessage
        title="Page not found"
        message="“Wrong stage? Let's get you back on track.”"
        backTo="/"
        backLabel="Back to home"
      />
    </>
  );
};

export default NotFound;