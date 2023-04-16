import { ProjectContainerStyle, ProjectTitleStlye } from "./project.style";
import {
  ProjectContainerVariants,
  ProjectTitleVariants,
} from "./projects.variants";

const ProjectsView = () => {
  return (
    <ProjectContainerStyle
      initial="hidden"
      animate="show"
      exit="exit"
      variants={ProjectContainerVariants}
    >
      <ProjectTitleStlye variants={ProjectTitleVariants}>
        ProjectsView
      </ProjectTitleStlye>
    </ProjectContainerStyle>
  );
};

export default ProjectsView;
