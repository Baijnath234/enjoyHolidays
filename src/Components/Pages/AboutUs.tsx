import React from "react";
import { Box, Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";

const AboutUs = () => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* "Who We Are" Section */}
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Who We Are?
          </Typography>
          <Typography variant="body1" color="textSecondary">
            At Njoy Holidayz, our team is here to connect the world with the most beautiful
            cities of India and provide convenience to travelers who are looking for more from
            their holidays, even if it's for a brief stay. We are a reputed name amongst the best
            travel agencies in India. Working for years in the domain, we are efficient
            organizers of trips and tours throughout India, including beautiful cities like
            Manali, Himachal, Amarnath, etc. We conduct seasonal as well as pilgrimage tours to
            Dharamshala, Amarnath Yatra, etc.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardMedia
              component="img"
              height="300"
              image="https://via.placeholder.com/300x300?text=Person+Image" // Replace with actual image
              alt="Who We Are"
            />
          </Card>
        </Grid>
      </Grid>

      {/* "What We Do" Section */}
      <Grid container spacing={4} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Card elevation={3}>
            <CardMedia
              component="img"
              height="300"
              image="https://via.placeholder.com/300x300?text=Tourist+Image" // Replace with actual image
              alt="What We Do"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            What We Do?
          </Typography>
          <Typography variant="body1" color="textSecondary">
            We specialize in providing special tour packages for all age groups and people from
            different walks of life. Our hosted crowd includes science, educational tours,
            adventure tours, heritage tours, religious tours, vacations, holidays, and others for
            all sorts of religions. Our wide spectrum of packages has made us a favorite among
            the visitors. You can reach us to explore the most affordable travel and tour options
            within India, especially Himachal Pradesh and other areas. We have trekking tours,
            river rafting, fishing, and more activities for adventure seekers.
          </Typography>
        </Grid>
      </Grid>

      {/* "How Njoy Holidayz Work" Section */}
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            How Njoy Holidayz Work?
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Our well-trained staff holds expertise in tourism and helps to manage all your travel
            demands. We have local guides, cooks, and tie-ups with hotels to help better and
            comprehensive management of the entire stay. We have root deep knowledge of the places
            and tourist spots that helps to impart a better travel experience. We aim to offer a
            unique experience to our guests and give them a glance at the natural beauty of the
            state. Our expertise and passion to serve and bring joyfulness make us stand ahead
            from others and comes infused in our itinerary.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3}>
            <CardMedia
              component="img"
              height="300"
              image="https://via.placeholder.com/300x300?text=Nature+Image" // Replace with actual image
              alt="How We Work"
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
