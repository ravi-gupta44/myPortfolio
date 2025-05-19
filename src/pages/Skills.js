import React, { useEffect, useRef } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  LinearProgress, 
  Chip,
  useTheme
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import WebIcon from '@mui/icons-material/Web';
import TerminalIcon from '@mui/icons-material/Terminal';
import BuildIcon from '@mui/icons-material/Build';

const Skills = () => {
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <CodeIcon fontSize="large" color="primary" />,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'C/C++', level: 75 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'SQL', level: 70 },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: <WebIcon fontSize="large" color="primary" />,
      skills: [
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 75 },
        { name: 'Material-UI', level: 80 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Tailwind CSS', level: 70 },
      ]
    },
    {
      title: 'Developer Tools',
      icon: <BuildIcon fontSize="large" color="primary" />,
      skills: [
        { name: 'Git', level: 80 },
        { name: 'GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Visual Studio', level: 75 },
      ]
    },
    {
      title: 'Other Skills',
      icon: <TerminalIcon fontSize="large" color="primary" />,
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Data Structures', level: 85 },
        { name: 'Algorithms', level: 80 },
      ]
    }
  ];

  return (
    <Box id="skills" sx={{ py: 10, backgroundColor: theme.palette.background.paper }}>
      <Container maxWidth="lg" className="section-container">
        <Typography 
          variant="h3" 
          component="h2" 
          className="section-title"
          align="center" 
          gutterBottom
        >
          My Skills
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {skillCategories.map((category, index) => (
            <Grid 
              item 
              xs={12} 
              md={6} 
              key={category.title}
              ref={addToRefs}
              className="animated-element"
              sx={{ transitionDelay: `${index * 100}ms` }}
            >
              <Paper 
                elevation={4} 
                sx={{ 
                  p: 3, 
                  height: '100%',
                  borderRadius: 2,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '5px',
                    height: '100%',
                    background: 'linear-gradient(180deg, #3f51b5, #f50057)',
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  {category.icon}
                  <Typography variant="h5" component="h3" fontWeight="600" sx={{ ml: 2 }}>
                    {category.title}
                  </Typography>
                </Box>
                
                <Box sx={{ mt: 3 }}>
                  {category.skills.map((skill) => (
                    <Box key={skill.name} sx={{ mb: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body1" fontWeight="500">
                          {skill.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {skill.level}%
                        </Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={skill.level} 
                        sx={{ 
                          height: 8, 
                          borderRadius: 4,
                          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                          '& .MuiLinearProgress-bar': {
                            backgroundImage: 'linear-gradient(90deg, #3f51b5, #f50057)',
                            borderRadius: 4
                          }
                        }} 
                      />
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
        
      </Container>
    </Box>
  );
};

export default Skills;