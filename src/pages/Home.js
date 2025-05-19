import React, { useEffect, useRef } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Paper, 
  Avatar,
  useTheme,
  useMediaQuery
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SchoolIcon from '@mui/icons-material/School';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = elementsRef.current;
    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          backgroundImage: 'linear-gradient(135deg, rgba(63, 81, 181, 0.1) 0%, rgba(245, 0, 87, 0.1) 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box className="animated-element visible">
                <Typography variant="overline" color="primary" fontWeight="medium">
                  Full Stack Developer
                </Typography>
                <Typography 
                  variant={isMobile ? "h3" : "h2"} 
                  component="h1" 
                  fontWeight="bold" 
                  gutterBottom
                >
                  Hi, I'm <Typography component="span" variant={isMobile ? "h3" : "h2"} color="primary" fontWeight="bold">Ravi Gupta</Typography>
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ maxWidth: '600px', mb: 4 }}>
                  I am deeply passionate about enhancing my coding skills and developing impactful applications and websites. I specialize in building WebApps and Websites using the MERN Stack. With a strong foundation in software development and a keen interest in Full-Stack Development, I am constantly working on personal projects to grow as a developer and deliver efficient, user-friendly solutions.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Button 
                    variant="contained" 
                    size="large" 
                    color="primary"
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get In Touch
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large" 
                    startIcon={<DownloadIcon />}
                    href="/RG___.pdf" 
                    target="_blank"
                  >
                    Download Resume
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box
                ref={addToRefs}
                className="animated-element"
                sx={{
                  position: 'relative',
                  width: { xs: '280px', sm: '320px', md: '380px' },
                  height: { xs: '280px', sm: '320px', md: '380px' },
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 20px 80px rgba(0,0,0,0.2)',
                  border: '5px solid white',
                }}
              >
                {/* Replace with your image URL */}
                <Box
                  component="img"
                  src="/helloMY.jpeg" 
                  alt="Ravi Gupta"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box sx={{ py: 10, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            align="center" 
            gutterBottom 
            className="section-title"
          >
            About Me
          </Typography>
          
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <Paper 
                ref={addToRefs}
                className="animated-element"
                elevation={6} 
                sx={{ 
                  p: 4, 
                  height: '100%',
                  borderRadius: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '5px',
                    background: 'linear-gradient(90deg, #3f51b5, #f50057)',
                  }
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom>
                  Education
                </Typography>
                
                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', mb: 2, alignItems: 'center' }}>
                    <SchoolIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6">
                      Bachelor of Technology
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" color="text.secondary">
                    Computer Science and Engineering
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Indore Institute of Science and Technology
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <CalendarTodayIcon fontSize="small" color="action" sx={{ mr: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      Nov 2021 - May 2025
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ mt: 4 }}>
                  <Box sx={{ display: 'flex', mb: 2, alignItems: 'center' }}>
                    <SchoolIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6">
                      High Secondary
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" color="text.secondary">
                    Percentage: 88%
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Shiva Academy School, Indore
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                    <CalendarTodayIcon fontSize="small" color="action" sx={{ mr: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      2019 - 2021
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Box id = 'contact'></Box>
            <Grid item xs={12} md={6}>
              <Paper 
                ref={addToRefs}
                className="animated-element"
                elevation={6} 
                sx={{ 
                  p: 4, 
                  height: '100%',
                  borderRadius: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '5px',
                    background: 'linear-gradient(90deg, #3f51b5, #f50057)',
                  }
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom>
                  Contact Information
                </Typography>
                
                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', mb: 3, alignItems: 'center' }}>
                    <EmailIcon color="primary" sx={{ mr: 2 }} />
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Email
                      </Typography>
                      <Typography variant="body1">
                        ravigutpa42787@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', mb: 3, alignItems: 'center' }}>
                    <PhoneAndroidIcon color="primary" sx={{ mr: 2 }} />
                    <Box>
                      <Typography variant="subtitle2" color="text.secondary">
                        Phone
                      </Typography>
                      <Typography variant="body1">
                        +91 7470897208
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                
                <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                  Achievements
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <Typography component="li" variant="body1" paragraph>
                    Coder at GFG, LeetCode
                  </Typography>
                  <Typography component="li" variant="body1" paragraph>
                    Completed a Full-Stack Web Development Internship at IBM
                  </Typography>
                  <Typography component="li" variant="body1" paragraph>
                    4 * HackerRank
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
