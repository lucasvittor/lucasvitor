import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [

        {
            title: "Wireshark - Traffic Analysis Lab",
            subtitle: "May 2025 - May 2025",
            description: "This project showcases traffic analysis using Wireshark, including:\n- Capturing interfaces: `wireshark &`\n- Filtering traffic: `http`, `tcp.port==80`, `dns`, `arp`\n- Simulated ARP spoofing for detection training.\nIt aims to build a packet-level understanding of network behavior and anomalies.",
            technologies: "Technologies: Wireshark, Networking, ARP, TCP/IP",
            websiteURL: "https://github.com/lucasvittor/wireshark-lab",
            codeURL: "https://github.com/lucasvittor/wireshark-lab",
        },
        {
            title: "Nmap - Junior Level",
            subtitle: "Apr 2025 - Apr 2025",
            description: "This project demonstrates network scanning fundamentals using Nmap. Scripts include:\n- Host discovery: `nmap -sn 192.168.0.0/24`\n- Port scanning: `nmap -sS 192.168.0.10`\n- Version detection and OS scan: `nmap -sV -O 192.168.0.10`\nThe goal is to introduce junior analysts to real-world reconnaissance processes.",
            technologies: "Technologies: Nmap, Bash, Networking",
            websiteURL: "https://github.com/lucasvittor/nmap-junior",
            codeURL: "https://github.com/lucasvittor/nmap-junior",
        },
        {
            title: "Password",
            subtitle: "Mar 2025 - Mar 2025",
            description: "This is a Java-based secure password generator that lets you create strong and encrypted passwords. The app offers customizable options like password length, inclusion of special characters, numbers, and exclusion of similar characters. Additionally, it also encrypts and saves.",
            technologies: "Technologies: Java",
            websiteURL: "https://github.com/lucasvittor/password",
            codeURL: "https://github.com/lucasvittor/password",
        },
        {
            title: "SySecure - Linux Security Script",
            subtitle: "May 2025 - May 2025",
            description: "SySecure is a Shell Script designed for basic auditing of Linux machines. It checks for updates, weak passwords, firewall status, and other security indicators. The script also generates PDF and log reports, helping IT support and security professionals perform preventive maintenance.",
            technologies: "Technologies: Bash, Linux CLI, UFW, ps2pdf",
            websiteURL: "https://github.com/lucasvittor/sysecure",
            codeURL: "https://github.com/lucasvittor/sysecure",
        },

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
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
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
