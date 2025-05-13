import { Box, Card, Container, Divider, Grid, Typography, styled } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import About from "../../../../assets/images/about.png";

const AboutSection: React.FC = () => {
    const StyledWrapper = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        width: "100%",
        paddingTop: "50px",
        paddingBottom: "50px",
    }));

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "20px",
        textAlign: "center",
        borderRadius: "16px",
        boxShadow: theme.shadows[4],
        transition: "all 0.3s ease-in-out",
        backgroundColor: theme.palette.background.paper,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            transform: "scale(1.03)",
        }
    }));

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        maxWidth: 300,
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "12px",
        position: "relative",
        zIndex: 2,
    }));

    const skillsSet = [
        "ISO 27001", "LGPD", "IAM", "ITIL 4", "SIEM", "Firewalls",
        "NMAP", "VLAN", "DMZ", "Python", "Linux", "Cryptography"
    ];

    const certifications = [
        { title: "CompTIA Network+ (N10-008)", issuer: "Coursera" },
        { title: "Intro to Pentest in Practice", issuer: "Desec Security" },
        { title: "Cybersecurity Analyst (Governance)", issuer: "IBSEC" },
        { title: "Cybersecurity Best Practices", issuer: "IBSEC" },
    ];

    return (
        <StyledWrapper>
            <Container maxWidth="lg">
                <Box id="about" pt={7} mb={5}>
                    <Typography variant="h2" textAlign="center" fontWeight={700}>
                        About Me
                    </Typography>
                </Box>
                <Grid container spacing={4} alignItems="center" justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography variant="body1" fontSize={18} lineHeight={1.8} paragraph>
                                I'm Lucas, an IT Assistant at Unimed, with a degree in Systems Analysis and Development. I have experience in technical support, process automation, and IT infrastructure, and I'm currently transitioning and specializing in Information Security.
                            </Typography>
                            <Typography variant="body1" fontSize={18} lineHeight={1.8} paragraph>
                                I work with diagnosis and problem solving, network configuration, access control, and the maintenance of corporate environments. I have an analytical mindset, a strong focus on failure prevention, and a genuine passion for learning and applying effective security practices.
                            </Typography>
                            <Typography variant="body1" fontSize={18} lineHeight={1.8}>
                                Although I’m a developer by training, the <strong>dev mode only kicks in when boredom strikes</strong> — my main focus right now is advancing through a postgraduate degree in Cybersecurity.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Box position="relative" pb={3}>
                            <Box textAlign="center">
                                <StyledImg src={About} alt="About illustration" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Box mt={8}>
                    <Grid container spacing={4} justifyContent="center">
                        {certifications.map((cert, index) => (
                            <Grid item key={index} xs={12} sm={6} md={5} lg={3}>
                                <AnimationComponent moveDirection={index % 2 === 0 ? "right" : "left"}>
                                    <StyledCard variant="outlined">
                                        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                                            <SchoolIcon fontSize="large" sx={{ mb: 1, color: "primary.main" }} />
                                            <Typography fontWeight={600} fontSize={16} textAlign="center">
                                                {cert.title}
                                            </Typography>
                                            <Typography color="text.secondary" fontSize={14}>
                                                {cert.issuer}
                                            </Typography>
                                        </Box>
                                    </StyledCard>
                                </AnimationComponent>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Divider sx={{ my: 6, bgcolor: "secondary.main" }} />
                <Box id="skills" mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={600}>
                        Skills
                    </Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={2} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={6} sm={4} md={2}>
                                <StyledCard variant="outlined">
                                    <Typography fontWeight={500}>{skill}</Typography>
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </StyledWrapper>
    );
};

export default AboutSection;
