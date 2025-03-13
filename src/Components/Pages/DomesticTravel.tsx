import React from "react";
import { Box, Typography } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1612352891598-639786f98b8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{
          color: "white",
          textShadow: "2px 2px 5px rgba(0,0,0,0.7)",
        }}
      >
        Feel The Luxury In India
      </Typography>
    </Box>
  );
};

export default HeroSection;
