import React, { useState, useRef, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  Paper, 
  Snackbar, 
  Alert,
  CircularProgress,
  useTheme
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    message: ''
  });
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

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmitStatus({
        submitting: true,
        submitted: false,
        success: false,
        message: ''
      });
      
      // Simulate form submission
      setTimeout(() => {
        setSubmitStatus({
          submitting: false,
          submitted: true,
          success: true,
          message: 'Your message has been sent successfully! I will get back to you soon.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 1500);
    }
  };

  const handleCloseSnackbar = () => {
    setSubmitStatus(prev => ({
      ...prev,
      submitted: false
    }));
  };

  const contactInfo = [
    {
      icon: <EmailIcon fontSize="large" color="primary" />,
      title: 'Email',
      info: 'ravigutpa42787@gmail.com',
      link: 'mailto:ravigutpa42787@gmail.com'
    },
    {
      icon: <PhoneIcon fontSize="large" color="primary" />,
      title: 'Phone',
      info: '+91 7470897208',
      link: 'tel:+917470897208'
    },
    {
      icon: <LocationOnIcon fontSize="large" color="primary" />,
      title: 'Location',
      info: 'Indore, Madhya Pradesh, India',
      link: 'https://maps.google.com/?q=Indore,Madhya+Pradesh,India'
    }
  ];

  return (
    <Box id="contact" sx={{ py: 10, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg" className="section-container">
        <Typography 
          variant="h3" 
          component="h2" 
          className="section-title"
          align="center" 
          gutterBottom
        >
          Get In Touch
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid 
            item 
            xs={12} 
            md={5}
            ref={addToRefs}
            className="animated-element"
          >
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 2,
                height: '100%',
                backgroundImage: 'linear-gradient(135deg, rgba(63, 81, 181, 0.05) 0%, rgba(245, 0, 87, 0.05) 100%)',
              }}
            >
              <Typography variant="h5" component="h3" gutterBottom fontWeight="600">
                Contact Information
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                Feel free to reach out to me through any of the following channels. I'm always open to new opportunities and collaborations!
              </Typography>
              
              <Box sx={{ mt: 4 }}>
                {contactInfo.map((item, index) => (
                  <Box 
                    key={index} 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mb: 4,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(10px)'
                      }
                    }}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 56,
                        height: 56,
                        borderRadius: '50%',
                        mr: 2,
                        background: 'linear-gradient(135deg, rgba(63, 81, 181, 0.1) 0%, rgba(245, 0, 87, 0.1) 100%)',
                      }}
                    >
                      {item.icon}
                    </Paper>
                    <Box>
                      <Typography variant="subtitle1" fontWeight="600">
                        {item.title}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        component="a" 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        sx={{ 
                          color: 'text.secondary',
                          textDecoration: 'none',
                          '&:hover': {
                            color: 'primary.main',
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        {item.info}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
              
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Follow Me
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    href="https://github.com/ravi-gupta44"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ borderRadius: '50%', minWidth: 0, p: 1.2 }}
                  >
                    <Box 
                      component="img" 
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg" 
                      alt="GitHub"
                      sx={{ width: 20, height: 20, filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none' }}
                    />
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    href="https://www.linkedin.com/in/ravi-gupta-8b946b253/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ borderRadius: '50%', minWidth: 0, p: 1.2 }}
                  >
                    <Box 
                      component="img" 
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/linkedin.svg" 
                      alt="LinkedIn"
                      sx={{ width: 20, height: 20, filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none' }}
                    />
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    href="mailto:ravigutpa42787@gmail.com"
                    sx={{ borderRadius: '50%', minWidth: 0, p: 1.2 }}
                  >
                    <Box 
                      component="img" 
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/gmail.svg" 
                      alt="Email"
                      sx={{ width: 20, height: 20, filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none' }}
                    />
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
          
          <Grid 
            item 
            xs={12} 
            md={7}
            ref={addToRefs}
            className="animated-element"
          >
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" component="h3" gutterBottom fontWeight="600">
                Send Me a Message
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                Have a question or want to work together? Please fill out the form below.
              </Typography>
              
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      error={!!errors.message}
                      helperText={errors.message}
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                      required
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={submitStatus.submitting ? <CircularProgress color="inherit" size={20} /> : <SendIcon />}
                  disabled={submitStatus.submitting}
                  sx={{ mt: 3, mb: 2, py: 1.5, px: 4, borderRadius: 2 }}
                >
                  {submitStatus.submitting ? 'Sending...' : 'Send Message'}
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        
        <Snackbar 
          open={submitStatus.submitted} 
          autoHideDuration={6000} 
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert 
            onClose={handleCloseSnackbar} 
            severity={submitStatus.success ? "success" : "error"} 
            variant="filled"
            sx={{ width: '100%' }}
          >
            {submitStatus.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Contact;