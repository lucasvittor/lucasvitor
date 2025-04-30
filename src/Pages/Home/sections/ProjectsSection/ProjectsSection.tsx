import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Password",
            subtitle: "Mar 2025 - Mar 2025",
            srcImg: "/src/assets/images/password.png",
            description: "This is a Java-based secure password generator that allows you to create strong and encrypted passwords. The application offers customizable options like password length, inclusion of special characters, numbers, and exclusion of similar characters. Additionally, it also encrypts and saves the generated passwords to a file.",
            technologies: "Technologies: Java",
            websiteURL: "https://github.com/lucasvittor/password",
            codeURL: "https://github.com/lucasvittor/password",
        },
        {
            title: "Los Santos Customs",
            subtitle: "Jan 2025 - Jan 2025",
            srcImg: "/src/assets/images/los.png",
            description: "The Automotive Workshop Landing Page is a project developed with Next.js and Tailwind CSS, inspired by the iconic Los Santos Customs from the GTA 5 game. Created to present a workshop specialized in tuning and customizing vehicles, the objective is to provide information about the company.",
            technologies: "Technologies: Next.js",
            websiteURL: "https://los-santos-customscom.vercel.app/",
            codeURL: "https://github.com/lucasvittor/los-santos-customs",
        }
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
