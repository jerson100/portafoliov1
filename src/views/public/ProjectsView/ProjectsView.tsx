import Container from "../../../components/commons/Container/Container";
import Typography from "../../../components/commons/Typography";
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
      <Container>
        <Typography component="h1" variant="h3">
          <ProjectTitleStlye variants={ProjectTitleVariants}>
            Projects
          </ProjectTitleStlye>
        </Typography>
        <Typography>lorem</Typography>
      </Container>
    </ProjectContainerStyle>
  );
};

export default ProjectsView;
