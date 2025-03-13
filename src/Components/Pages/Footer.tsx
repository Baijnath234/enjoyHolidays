import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#263238",
        color: "white",
        padding: "2rem 1rem",
      }}
    >
      <Grid container spacing={4}>
        {/* About Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2" color="text.secondary">
            We are a leading travel agency, offering tailored packages and
            experiences to explore the world’s most beautiful destinations.
          </Typography>
        </Grid>

        {/* Contact Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: support@travelagency.com
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: +123-456-7890
          </Typography>
        </Grid>

        {/* Address Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Address
          </Typography>
          <Typography variant="body2" color="text.secondary">
            123 Paradise Street,
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Wanderlust City, WL 56789
          </Typography>
        </Grid>

        {/* Social Media & Career Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Social Media & Careers
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              sx={{ color: "white" }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              rel="noopener"
              sx={{ color: "white" }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              sx={{ color: "white" }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://linkedin.com"
              target="_blank"
              rel="noopener"
              sx={{ color: "white" }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
          <Link
            href="/careers"
            color="inherit"
            underline="hover"
            sx={{ marginTop: "1rem", display: "block" }}
          >
            Explore Careers
          </Link>
        </Grid>
      </Grid>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "2rem",
          borderTop: "1px solid #455a64",
          paddingTop: "1rem",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          &copy; {new Date().getFullYear()} Travel Agency. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
