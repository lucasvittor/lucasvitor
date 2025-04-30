import { Box, Container, Grid, Typography, styled } from "@mui/material"
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground"
import Typewriter from "../../../../components/Typewriter/Typewriter"
import Avatar from "../../../../assets/images/avatar.png"
import PreviewIcon from '@mui/icons-material/Preview';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import CV from "../../../../assets/pdfs/CV Lucas Vitor.pdf"

const HeroSection: React.FC = () => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "10%",
        position: "relative"
    }));

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        [theme.breakpoints.up('xs')]: {
            display: "block",
            padding: "20px",
            paddingTop: "100px",
            paddingBottom: "40px",
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            alignItems: "center",
            paddingTop: "100px",
            height: "100vh"
        },
    }));

    const handleDownload = () => {
            window.open(CV, '_blank');
    };

    const handleWhatsapp = () => {
        window.open("https://wa.me/5586995186495", "_blank");
    };

    const handleLinkedIn = () => {
        window.open("https://www.linkedin.com/in/lucasvittor", "_blank");
    };

    return (
        <>
            <StyledHero >
    <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={5}>
                <Box position="relative" pb={3}>
                    <Box width={"150%"} position="absolute" top={-100} right={0}>
                        <AnimatedBackground />
                    </Box>
                    <Box textAlign="center">
                        <StyledImg src={Avatar} />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={7}>
                <Box textAlign="center">
                    <Typography color="primary.contrastText" variant="h1" pb={2}>
                        Lucas Vitor
                    </Typography>
                    <Typewriter
                        text="Information Security Analyst"
                        delay={120}
                        variant="h4"
                        color="primary.contrastText"
                    />
                </Box>
                <Box mt={3}>
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={10} md={4}>
                            <StyledButton onClick={handleDownload}>
                                <PreviewIcon />
                                <Typography>
                                    View CV
                                </Typography>
                            </StyledButton>
                        </Grid>
                        <Grid item xs={10} md={4}>
                            <StyledButton onClick={handleWhatsapp}>
                                <WhatsAppIcon />
                                <Typography>
                                    Contact me
                                </Typography>
                            </StyledButton>
                        </Grid>
                        <Grid item xs={10} md={4}>
                            <StyledButton onClick={handleLinkedIn}>
                                <LinkedInIcon />
                                <Typography>
                                    LinkedIn
                                </Typography>
                            </StyledButton>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    </Container>
</StyledHero>

        </>
    )
}

export default HeroSection;
