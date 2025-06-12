import { Box, Container, Grid, Typography, styled } from "@mui/material";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";

const StyledProjects = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
}));

const HighlightText = styled("span")({
  color: "#fdd835",
});

  const allProjects: ProjectCardProps[] = [
  {
    title: "SySecure",
    subtitle: "May 2025",
    description: "Shell script for auditing Linux systems: updates, firewall, passwords, and reporting.",
    websiteURL: "https://github.com/lucasvittor/sysecure",
    imageURL: "/public/projects/sysecure.png",
  },
  {
    title: "Nmap",
    subtitle: "Apr 2025",
    description: "Basic network scanning with Nmap. Host discovery, port scan, version detection.",
    websiteURL: "https://github.com/lucasvittor/nmap-junior",
    imageURL: "https://miro.medium.com/v2/resize:fit:675/1*MlLvWoOg1c-PBerXGVs77w.jpeg",
  },
  {
    title: "Password Generator",
    subtitle: "Mar 2025",
    description: "Java-based encrypted password generator with custom and secure options.",
    websiteURL: "https://github.com/lucasvittor/password",
    imageURL: "/public/projects/password.png",
  },
  {
    title: "Wireshark",
    subtitle: "May 2025",
    description: "Traffic capturing, filtering, and ARP spoofing detection for training.",
    websiteURL: "https://github.com/lucasvittor/wireshark-lab",
    imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJAsC5_u32tr_QG4SvCTC8XeWbrfJ2T27LOg&s",
  },
    {
    title: "AutoClear",
    subtitle: "Jan 2025",
    description: "Shell script aims to facilitate the maintenance of Linux systems.",
    websiteURL: "https://github.com/lucasvittor/autoclear",
    imageURL: "/public/projects/autoclear.png",
  },
];


const ProjectsSection: React.FC = () => {
  return (
    <StyledProjects id="projects">
      <Container maxWidth="lg">
        <Box textAlign="center" mb={4}>
          <Typography variant="subtitle2" color="#00e676" fontWeight={400}>
            WHEN BOREDOM HITS
          </Typography>
          <Typography variant="h3" color="#fff" fontWeight={900}>
            Personal <HighlightText>Projects</HighlightText>
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {allProjects.map((project: ProjectCardProps, index: number) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AnimationComponent moveDirection={index % 2 === 0 ? "right" : "left"}>
                <ProjectCard {...project} />
              </AnimationComponent>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledProjects>
  );
};


export default ProjectsSection;
