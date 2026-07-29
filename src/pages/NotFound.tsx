import NotFoundMessage from "../components/NotFoundMessage";

const NotFound = () => {
  return (
    <NotFoundMessage
      title="Page not found"
      message="This page doesn't exist — let's get you back on track."
      backTo="/"
      backLabel="Back to home"
    />
  );
};

export default NotFound;
