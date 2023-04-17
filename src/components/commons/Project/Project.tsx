import { IProject } from "../../../types";
import Button from "../Button/Button";
import Typography from "../Typography/Typography";
import {
  ProjectButtonStyle,
  ProjectContainerStyle,
  ProjectImageContainerStyle,
  ProjectImageStyle,
  ProjectInfoStyle,
  ProjectTagContainerStyle,
} from "./project.style";
import { ProjectContainerVariants } from "./project.variants";

const Project = ({
  _id,
  createdAt,
  description,
  image,
  linkApp,
  source,
  tags,
  title,
  direction = -1,
}: IProject & { direction?: -1 | 1 }) => {
  return (
    <ProjectContainerStyle
      initial="hidden"
      whileInView="show"
      exit="exit"
      custom={direction}
      viewport={{ once: true, amount: 0.8 }}
      variants={ProjectContainerVariants}
    >
      <ProjectInfoStyle>
        <ProjectTagContainerStyle>
          {tags.map((tag) => (
            <Button key={tag} variant="outlined" size="small">
              {tag}
            </Button>
          ))}
        </ProjectTagContainerStyle>
        <Typography component="h1" variant="h4" aria-labelledby={_id}>
          {title}
        </Typography>
        <Typography>2 Days</Typography>
        <Typography>{description}</Typography>

        <ProjectButtonStyle>
          <Button>Ver Aplicativo</Button>
          <Button variant="outlined" color="secondary">
            Ver Detalles
          </Button>
        </ProjectButtonStyle>
      </ProjectInfoStyle>
      <ProjectImageContainerStyle>
        <ProjectImageStyle src={image} id={_id} />
      </ProjectImageContainerStyle>
    </ProjectContainerStyle>
  );
};

export default Project;
