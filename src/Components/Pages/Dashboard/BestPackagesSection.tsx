import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";

const packages = [
  {
    id: 1,
    name: "Paris Explorer",
    price: "$1,499",
    duration: "7 Days / 6 Nights",
    image: "https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/cover-places-to-visit-in-the-World1.jpg",    
    description:
      "Experience the romance of Paris with guided tours to the Eiffel Tower, Louvre Museum, and Seine River.",
  },
  {
    id: 2,
    name: "Tokyo Adventure",
    price: "$2,099",
    duration: "8 Days / 7 Nights",
    image: "https://imageio.forbes.com/specials-images/imageserve/663167c06d65f1855a1525a7/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
    description:
      "Immerse yourself in Tokyo's vibrant culture with visits to Shinjuku, Akihabara, and Mount Fuji.",
  },
  {
    id: 3,
    name: "New York Escape",
    price: "$1,299",
    duration: "5 Days / 4 Nights",
    image: "https://www.planetware.com/photos-large/USNY/new-york-city-statue-of-liberty.jpg",
    description:
      "Explore the Big Apple with guided tours to Times Square, Central Park, and the Statue of Liberty.",
  },
];

const BestPackagesSection = () => {
  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#e8f5e9" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Best Packages from Us
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Choose the best travel package tailored for you.
      </Typography>
      <Grid container spacing={4} sx={{ marginTop: "1rem" }}>
        {packages.map((pkg) => (
          <Grid item xs={12} sm={6} md={4} key={pkg.id}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="200"
                image={pkg.image}
                alt={pkg.name}
              />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {pkg.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {pkg.description}
                </Typography>
                <Typography variant="body1" color="text.primary">
                  <strong>Price:</strong> {pkg.price}
                </Typography>
                <Typography variant="body1" color="text.primary" gutterBottom>
                  <strong>Duration:</strong> {pkg.duration}
                </Typography>
              </CardContent>
              <Box sx={{ padding: "0 1rem 1rem" }}>
                <Button variant="contained" color="secondary" fullWidth>
                  Book {pkg.name}
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BestPackagesSection;
