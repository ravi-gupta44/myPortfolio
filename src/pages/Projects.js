import React, { useEffect, useRef } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Chip,
  CardMedia,
  useTheme
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const theme = useTheme();
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

  const projects = [
    {
      id: 1,
      title: 'Jobby App',
      description: 'An all-encompassing job search platform with pages for Login, Home, Jobs, and Job item details. Features secure user authentication with JWT tokens and REST API calls.',
      image: '/Jobby.png',
      technologies: ['React JS', 'JavaScript', 'CSS', 'Bootstrap', 'REST API'],
      github: 'https://github.com/ravi-gupta44/Jobby-App',
      live: 'https://github.com/ravi-gupta44/Jobby-App',
      period: 'June 2024 - present'
    },
    {
      id: 2,
      title: 'QuizCraft',
      description: 'A full-stack quiz web app using Express serving a REST API with React as the frontend. Includes an Admin Panel for managing quiz data and visualizes quiz results with charts.',
      image: '/QuizSS.png',
      technologies: ['React', 'TypeScript', 'MongoDB', 'Express', 'Material UI'],
      github: 'https://github.com/',
      live: 'https://example.com/quizcraft',
      period: 'Jan 2024 - June 2024'
    },
    {
      id: 3,
      title: 'Generative AI Chatbot',
      description: 'An innovative chatbot designed to offer personalized interactions with users. Features a user-friendly UI created with HTML, CSS, and Bootstrap to display user-chatbot interactions.',
      image: '/AIGEN.png',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/ravi-gupta44/AIChatBotApp',
      live:'https://ai-chat-bot-app-bice.vercel.app',

      period: 'July 2023 - Aug 2023'
    }
  ];

  return (
    <Box id="projects" sx={{ py: 10, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg" className="section-container">
        <Typography 
          variant="h3" 
          component="h2" 
          className="section-title"
          align="center" 
          gutterBottom
        >
          My Projects
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {projects.map((project, index) => (
            <Grid 
              item 
              xs={12} 
              md={6} 
              lg={4} 
              key={project.id}
              ref={addToRefs}
              className="animated-element"
              sx={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card 
                elevation={4} 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[10]
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="160"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom fontWeight="600">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {project.period}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                    {project.technologies.map((tech) => (
                      <Chip 
                        key={tech} 
                        label={tech} 
                        size="small" 
                        color="primary" 
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button 
                    startIcon={<GitHubIcon />} 
                    size="small" 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </Button>
                  <Button 
                    startIcon={<LaunchIcon />} 
                    size="small" 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
