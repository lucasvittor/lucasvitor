import { Box, Button, Container, Grid, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import About from "../../../../assets/images/avatar.jpg";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import GitHubIcon from '@mui/icons-material/GitHub';

const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#ffffff",
  padding: "80px 0",
}));

const HighlightText = styled("span")({
  color: "#fdd835",
});

const DownloadButton = styled(Button)(({ theme }) => ({
  background: "linear-gradient(to right,#fdd835, #00c853)" ,
  color: "#000",
  fontWeight: "bold",
  padding: "12px 24px",
  borderRadius: "8px",
  gap: "10px",
  width: "30%",
  marginTop: theme.spacing(4),
  '&:hover': {
    backgroundColor: "#00e5ff",
  },
}));

const StyledImageWrapper = styled(Box)({
  position: "relative",
  width: "fit-content",
  marginLeft: "auto",
  marginRight: "auto",
});

const ImageBackground = styled(Box)({
  position: "absolute",
  top: -60,
  right: 0,
  width: "150%",
  zIndex: 0,
});

const StyledImage = styled(motion.img)({
  maxWidth: "350px",
  borderRadius: "10%",
  position: "relative",
  zIndex: 1,
});

const AboutSection = () => {
  return (
    <SectionWrapper id="about">
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {/* Texto */}
          <Grid item xs={12} md={7}>
            <Box pr={{ md: 5 }} mb={{ xs: 5, md: 0 }}>
              <Typography variant="subtitle1" color="#00e676" fontWeight="bold" gutterBottom>
                ABOUT ME
              </Typography>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Son of the living <HighlightText>God</HighlightText>
              </Typography>
              <Typography variant="body1" color="rgba(255,255,255,0.7)" paragraph>
                I'm Lucas, a passionate IT Assistant focused on Cybersecurity, Infrastructure and Automation. I seek to transform ideas into impact, always inspired by Jesus, the true Firewall of my life, who protects, guides and gives purpose to every line of code I write.
              </Typography>
              <DownloadButton variant="contained" href="https://github.com/lucasvittor">
              <GitHubIcon />
                GitHub
              </DownloadButton>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <StyledImageWrapper>
              <ImageBackground>
                <AnimatedBackground />
              </ImageBackground>
              <StyledImage
                src={About}
                alt="Lucas Vitor"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </StyledImageWrapper>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default AboutSection;
