import React from 'react';
import { Box, Container, Typography, Link, IconButton, Divider } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.background.paper,
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Ravi Gupta. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 2, md: 0 } }}>
            <IconButton 
              color="primary" 
              component={Link} 
              href="https://github.com/ravi-gupta44" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton 
              color="primary" 
              component={Link} 
              href="https://www.linkedin.com/in/ravi-gupta-8b946b253/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton 
              color="primary" 
              component={Link} 
              href="mailto:ravigutpa42787@gmail.com" 
              aria-label="Email"
            >
              <EmailIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
