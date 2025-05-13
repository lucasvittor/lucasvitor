import { Grid, Typography, styled } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";

export interface ProjectCardProps {
    title: string;
    subtitle: string;
    description: string
    technologies: string
    websiteURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    description,
    technologies,
    websiteURL,
}) => {

    const StyledCard = styled("div")(({ theme }) => ({
        borderRadius: "3px",
        border: `0.5px solid  ${theme.palette.primary.contrastText}`,
        backgroundColor: "transparent",
        color: theme.palette.primary.contrastText,
        padding: "20px",
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
    }));

    return (
        <StyledCard>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography >
                {subtitle}
            </Typography>
            <Typography>
                {description}
            </Typography>
            <Typography fontWeight={600} pt={2}>
                {technologies}
            </Typography>
            <Grid container spacing={1} pt={2}>
                <Grid item xs={6}>
                    <StyledButton onClick={() => window.open(websiteURL)}>View Project</StyledButton>
                </Grid>
            </Grid>
        </StyledCard>
    )
}

export default ProjectCard
