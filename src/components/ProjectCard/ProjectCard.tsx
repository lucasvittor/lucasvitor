import { Box, Typography, styled } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  websiteURL: string;
  imageURL: string;
}

const CardContainer = styled("div")(({ theme }) => ({
  borderRadius: 50,
  gap: "10px",
  marginTop:"10px",
  overflow: "hidden",
  background: "rgb(23, 24, 46)" ,
  boxShadow: theme.shadows[5],
  transition: "0.3s ease",
  '&:hover': {
    transform: "scale(1.02)",
  },
}));

const ImageTop = styled("img")({
  width: "100%",
  height: 180,
  objectFit: "cover",
  display: "block",
});

const CardContent = styled("div")(({ theme }) => ({
  padding: theme.spacing(3),
  color: theme.palette.primary.contrastText,
}));

const ViewButton = styled("button")({
  background: "linear-gradient(to right,#fdd835, #00c853)" ,
  color: "#000",
  fontWeight: "bold",
  padding: "8px 20px",
  borderRadius: "8px",
  gap: "15px",
  width: "40%",
});

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  description,
  websiteURL,
  imageURL,
}) => {
  return (
    <CardContainer>
      <ImageTop src={imageURL} alt={title} />
      <CardContent>
        <Typography variant="h6" fontWeight={700} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" fontWeight={500} gutterBottom>
          {subtitle}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {description}
        </Typography>
        <Box textAlign="left">
          <ViewButton onClick={() => window.open(websiteURL, "_blank")}>
            <GitHubIcon />
            View
          </ViewButton>
        </Box>
      </CardContent>
    </CardContainer>
  );
};

export default ProjectCard;
