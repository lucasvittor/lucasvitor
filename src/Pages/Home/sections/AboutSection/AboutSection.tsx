import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledWrapper = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        width: "100%",
        paddingTop: "50px",
        paddingBottom: "50px",
    }));

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        backgroundColor: theme.palette.background.paper,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet  = [
        "ISO 27001", "LGPD", "IAM","ITIL 4", "SIEM", "Firewalls", "NMAP", "VLAN", "DMZ", "Python", "Linux", "Cryptography", 
    ];

    return (
        <StyledWrapper>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center">About me</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}> 
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography fontWeight={600}>Experience</Typography>
                                <Typography>3+ years</Typography>
                                <Typography>T.I</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography fontWeight={600}>Education</Typography>
                                <Typography >Postgraduate</Typography>
                                <Typography>Cyber ​​Security-2026</Typography>  
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                    I'm Lucas, a Systems Analyst with experience in technical support, process automation and IT infrastructure, seeking transition and specialization in Information Security. I work with diagnosis and problem solving, network configuration, access control and maintenance of corporate environments. I have an analytical vision, focus on failure prevention and a passion for learning and applying good security practices.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <StyledCard variant="outlined">
                                    {skill}
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
