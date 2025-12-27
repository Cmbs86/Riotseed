import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId } = useParams();

  return (
    <div className="min-h-screen py-20 px-8">
      <h1 className="font-permanent-marker text-5xl text-primary-green mb-8">
        Project: {projectId}
      </h1>
      <p className="font-shantell-sans text-primary-green">
        Project details will go here...
      </p>
    </div>
  );
};

export default ProjectDetail;
