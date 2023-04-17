import Container from "../../../components/commons/Container/Container";
import Project from "../../../components/commons/Project/Project";
import Typography from "../../../components/commons/Typography";
import { projects } from "../../../services/project";
import {
  ProjectContainerStyle,
  ProjectTitleStlye,
  ProjectViewTitleStyle,
  ProjetListStyle,
} from "./project.style";
import {
  ProjectContainerVariants,
  ProjectTitleVariants,
  ProjectViewContentVariants,
} from "./projects.variants";

const ProjectsView = () => {
  return (
    <ProjectContainerStyle
      initial="hidden"
      animate="show"
      exit="exit"
      variants={ProjectContainerVariants}
    >
      <Container>
        <ProjectViewTitleStyle component="h1" variant="h2">
          <ProjectTitleStlye variants={ProjectTitleVariants}>
            Projects
          </ProjectTitleStlye>
        </ProjectViewTitleStyle>
        <ProjetListStyle variants={ProjectViewContentVariants}>
          {projects.map((project, i) => (
            <Project
              {...project}
              key={project._id}
              direction={i % 2 == 0 ? 1 : -1}
            />
          ))}
        </ProjetListStyle>
      </Container>
    </ProjectContainerStyle>
  );
};

export default ProjectsView;
