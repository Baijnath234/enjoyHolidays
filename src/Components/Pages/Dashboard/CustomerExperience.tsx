import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  Rating,
  Grid,
  Box,
} from "@mui/material";

const customerReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    avatar: "https://example.com/emily-avatar.jpg", // Replace with a valid URL
    rating: 5,
    review:
      "Bali was absolutely breathtaking! The beaches, culture, and food were beyond my expectations. Highly recommend this destination!",
    date: "November 10, 2024",
  },
  {
    id: 2,
    name: "Michael Lee",
    avatar: "https://example.com/michael-avatar.jpg", // Replace with a valid URL
    rating: 4,
    review:
      "A wonderful experience overall! The hospitality in Bali is unmatched. Would definitely visit again.",
    date: "October 15, 2024",
  },
  {
    id: 3,
    name: "Sophia Patel",
    avatar: "https://example.com/sophia-avatar.jpg", // Replace with a valid URL
    rating: 5,
    review:
      "A paradise on Earth! From Ubud's serene rice terraces to the vibrant nightlife of Seminyak, Bali has it all.",
    date: "September 25, 2024",
  },
];

const CustomerExperience = () => {
  return (
    <Box sx={{ padding: "2rem", backgroundColor: "#f0f4c3" }}>
      <Typography variant="h4" align="center" gutterBottom>
        What Our Customers Say About Bali
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Hear from travelers who explored Bali with us.
      </Typography>
      <Grid container spacing={4} sx={{ marginTop: "1rem" }}>
        {customerReviews.map((review) => (
          <Grid item xs={12} sm={6} md={4} key={review.id}>
            <Card>
              <CardHeader
                avatar={
                  <Avatar
                    src={review.avatar}
                    alt={review.name}
                    sx={{ bgcolor: "primary.main" }}
                  />
                }
                title={review.name}
                subheader={review.date}
              />
              <CardContent>
                <Rating value={review.rating} readOnly />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginTop: "0.5rem" }}
                >
                  {review.review}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CustomerExperience;
