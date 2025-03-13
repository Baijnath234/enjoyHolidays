import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
} from "@mui/material";

const topPlaces = [
  {
    id: 1,
    name: "Paris",
    description: "The City of Light awaits with its iconic Eiffel Tower and charming streets.",
    image: "https://img.traveltriangle.com/blog/wp-content/uploads/2020/02/cover-places-to-visit-in-the-World1.jpg",
  },
  {
    id: 2,
    name: "Tokyo",
    description: "Experience the vibrant culture, technology, and cherry blossoms.",
    image: "https://imageio.forbes.com/specials-images/imageserve/663167c06d65f1855a1525a7/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
  },
  {
    id: 3,
    name: "New York",
    description: "The Big Apple, home to the Statue of Liberty and Times Square.",
    image: "https://www.planetware.com/photos-large/USNY/new-york-city-statue-of-liberty.jpg",
  },
];

const TopPlacesSection = () => {
  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f5f5f5" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Top Places to Visit
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Discover the best destinations to explore and enjoy.
      </Typography>
      <Grid container spacing={4} sx={{ marginTop: "1rem" }}>
        {topPlaces.map((place) => (
          <Grid item xs={12} sm={6} md={4} key={place.id}>
            <Card sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                height="200"
                image={place.image}
                alt={place.name}
              />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {place.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {place.description}
                </Typography>
              </CardContent>
              <Box sx={{ padding: "0 1rem 1rem" }}>
                <Button variant="contained" color="primary" fullWidth>
                  Explore {place.name}
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TopPlacesSection;
