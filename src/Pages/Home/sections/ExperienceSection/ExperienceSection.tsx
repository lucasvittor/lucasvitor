import { Box, Container, Typography, styled, } from "@mui/material";

const TimelineContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: theme.spacing(10, 0),
  position: "relative",
  overflow: "hidden",
  
}));

const VerticalLine = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 100,
  bottom: 0,
  left: "50%",
  width: 4,
  backgroundColor: theme.palette.divider,
  transform: "translateX(-50%)",
  [theme.breakpoints.down("sm")]: {
    left: "50%",
  },
}));


const TimelineItem = styled(Box)<{ align: 'left' | 'right' }>(({ theme, align }) => ({
  display: "flex",
  flexDirection: align === 'left' ? "row" : "row-reverse",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  width: "100%",
  margin: "40px 0",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  background: "rgb(23, 24, 46)" ,
  padding: theme.spacing(3),
  borderRadius: 12,
  width: "40%",
  minWidth: 280,
  maxWidth: 500,
  boxShadow: theme.shadows[4],
  position: "relative",
  zIndex: 2,
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    textAlign: "center",
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 100,
  height: 100,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 3,
  margin: "0 20px",
  [theme.breakpoints.down("sm")]: {
    margin: "20px 0",
  },
}));

const DateText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  fontSize: 12,
  color: theme.palette.grey[400],
  textAlign: "center",
}));

const TitleSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(10),
  textAlign: "center",
}));

const HighlightText = styled("span")({
  color: "#fdd835",
});

const Timeline = () => {
  const experiences = [
    {
      role: "IT Assistant",
      company: "Unimed Teresina - Operator",
      date: "Mai 2025 – Present",
      icon: "/icons/unimed.png",
      align: "right",
      points: [
        "N1 technical support for users with a focus on agility and clarity.",
        "Task automation with powershell.",
        "Network configuration, computer maintenance.",
        "I supported in-person and remote demands, ensuring stability of IT resources.",
        "Practical application of ISO 27001, LGPD and ITIL 4 standards.",
      ]
    },
    {
      role: "Support Analyst",
      company: "O C E Torres LTDA",
      date: "Out 2023 – Fev 2025",
      icon: "/icons/shopodonto.png",
      align: "left",
      points: [
        "N1/N2 technical support, working with log analysis, incident response, access management (IAM) and practical application of ISO 27001, LGPD and ITIL 4 standards.",
        "Technical documentation, decision-making support, task automation and backup using Bash and Python, execution of preventive data protection practices.",
        "Direct collaboration with development and infrastructure teams, ensuring technical alignment and process security."
      ]
    }
  ];

  return (
    <TimelineContainer id="experience">
      <Container maxWidth="lg">
        <TitleSection>
          <Typography variant="subtitle2" color="#00e676" fontWeight={400}>
            WHAT I HAVE DONE SO FAR
          </Typography>
          <Typography variant="h3" color="#fff" fontWeight={900}>
            <HighlightText>Work</HighlightText> Experience.
          </Typography>
        </TitleSection>

        <VerticalLine />

        {experiences.map((exp, index) => (
          <TimelineItem key={index} align={exp.align as 'left' | 'right'}>
            <IconWrapper>
              <img src={exp.icon} alt="icon" style={{ width: 90, height: 90 }} />
            </IconWrapper>
            <ContentBox>
              <Typography variant="h6" fontWeight={700}>{exp.role}</Typography>
              <Typography variant="subtitle2" gutterBottom>{exp.company}</Typography>
              <ul style={{ paddingLeft: 16 }}>
                {exp.points.map((p, i) => (
                  <li key={i}>
                    <Typography variant="body2">{p}</Typography>
                  </li>
                ))}
              </ul>
              <DateText>{exp.date}</DateText>
            </ContentBox>
          </TimelineItem>
        ))}
      </Container>
    </TimelineContainer>
  );
};

export default Timeline;
