import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";


const Appbar = () => {
  return (
    <Box>
        {/* Navbar */}
        <AppBar position="fixed" sx={{ backgroundColor: "white", boxShadow: 1 }}>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    {/* Logo */}
                    <Typography variant="h6" sx={{ color: "#007BFF", fontWeight: "bold" }}>
                        InJoy Holidayz
                    </Typography>

                    {/* Navigation Links */}
                    <Box sx={{ display: "flex", gap: 2 }}>
                        <Button href='/' color="inherit" sx={{ color: "#333" }}>
                            Home
                        </Button>
                        <Button href='/domesticTravel' color="inherit" sx={{ color: "#333" }}>
                            Domestic Travel
                        </Button>
                        <Button color="inherit" sx={{ color: "#333" }}>
                            International Travel
                        </Button>
                        <Button color="inherit" sx={{ color: "#333" }}>
                            Blog
                        </Button>
                        <Button href="/About" color="inherit" sx={{ color: "#333" }}>
                            About Us
                        </Button>
                        <Button href="/contact" color="inherit" sx={{ color: "#333" }}>
                            Contact Us
                        </Button>
                    </Box>

                    {/* Hamburger Menu for Mobile */}
                    <IconButton edge="end" color="inherit" sx={{ display: { xs: "block", md: "none" } }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
    </Box>
    
  )
}

export default Appbar