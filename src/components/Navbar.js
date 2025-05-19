import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CodeIcon from '@mui/icons-material/Code';

const Navbar = ({ darkMode, toggleDarkMode, currentPage, setCurrentPage }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar 
        position="fixed" 
        color="default" 
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: theme.palette.background.paper,
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? theme.shadows[4] : 'none',
          borderBottom: scrolled ? 'none' : `1px solid ${theme.palette.divider}`
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, sm: 2 } }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <CodeIcon fontSize="large" color="primary" sx={{ mr: 1 }} />
              <Typography variant="h6" component="div" fontWeight="bold">
                Ravi Gupta
              </Typography>
            </Box>
            
            {isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton 
                  color="inherit" 
                  onClick={toggleDarkMode}
                  sx={{ mr: 1 }}
                >
                  {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box>
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      color="inherit"
                      onClick={() => handleNavClick(item.id)}
                      sx={{ 
                        mx: 1,
                        fontWeight: currentPage === item.id ? 600 : 400,
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: '0',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: currentPage === item.id ? '60%' : '0%',
                          height: '3px',
                          backgroundColor: 'primary.main',
                          transition: 'width 0.3s ease'
                        },
                        '&:hover::after': {
                          width: '60%'
                        }
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
                <IconButton 
                  color="inherit" 
                  onClick={toggleDarkMode}
                  sx={{ ml: 2 }}
                >
                  {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
        >
          <List>
            {navItems.map((item) => (
              <ListItem 
                button 
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                sx={{
                  backgroundColor: currentPage === item.id ? 'rgba(63, 81, 181, 0.1)' : 'transparent',
                  borderLeft: currentPage === item.id ? `4px solid ${theme.palette.primary.main}` : '4px solid transparent',
                }}
              >
                <ListItemText 
                  primary={item.label} 
                  primaryTypographyProps={{
                    fontWeight: currentPage === item.id ? 600 : 400
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
