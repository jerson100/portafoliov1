import Button from "../../../components/commons/Button";
import Container from "../../../components/commons/Container/Container";
import Project from "../../../components/commons/Project/Project";
import { projects } from "../../../services/project";
import {
  ProjectButtonNextStyle,
  ProjectContainerStyle,
  ProjectTitleStlye,
  ProjectViewTitleStyle,
  ProjetListStyle,
} from "./project.style";
import {
  ProjectButtonVariants,
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
        <ProjectButtonNextStyle
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={{ once: true, amount: 0.8 }}
          variants={ProjectButtonVariants}
        >
          <Button>Ver Más</Button>
        </ProjectButtonNextStyle>
      </Container>
    </ProjectContainerStyle>
  );
};

export default ProjectsView;
