import NotFoundMessage from "../components/NotFoundMessage";

const NotFound = () => {
  return (
    <NotFoundMessage
      title="Page not found"
      message="“Wrong stage? Let's get you back on track.”"
      backTo="/"
      backLabel="Back to home"
    />
  );
};

export default NotFound;
