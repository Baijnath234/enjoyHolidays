import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";

const ComingSoonSection = () => {
  return (
    <Box
      sx={{
        padding: "2rem",
        backgroundColor: "#e3f2fd",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Exciting Packages Coming Soon!
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        We're working hard to bring you the best travel packages. Stay tuned for
        exclusive deals and unforgettable experiences!
      </Typography>
      <Box sx={{ margin: "2rem auto", maxWidth: "600px" }}>
        <Card sx={{ backgroundColor: "#ffffff", boxShadow: 3 }}>
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "#0288d1", fontWeight: "bold" }}
            >
              Stay Excited!
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Amazing destinations, unbeatable prices, and custom travel
              experiences are just around the corner.
            </Typography>
            <Box sx={{ marginTop: "1rem" }}>
              <Button variant="contained" color="primary">
                Notify Me
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ComingSoonSection;
