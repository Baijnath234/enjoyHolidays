import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
} from "@mui/material";

const ContactUs = () => {
  return (
    <Box sx={{ padding: 4 }}>
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Get In Touch
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Home / Contact Us
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Contact Form Section */}
        <Grid item xs={12} md={8}>
          <Typography variant="h5" gutterBottom>
            Have queries, doubts or suggestions?
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Full Name"
                  fullWidth
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  fullWidth
                  required
                  type="email"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Contact No."
                  fullWidth
                  required
                  type="tel"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Best Time to Call</InputLabel>
                  <Select defaultValue="Morning">
                    <MenuItem value="Morning">Morning</MenuItem>
                    <MenuItem value="Afternoon">Afternoon</MenuItem>
                    <MenuItem value="Evening">Evening</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>Country</InputLabel>
                  <Select defaultValue="India">
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="USA">USA</MenuItem>
                    <MenuItem value="UK">UK</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>State</InputLabel>
                  <Select defaultValue="State">
                    <MenuItem value="State">State</MenuItem>
                    <MenuItem value="Karnataka">Karnataka</MenuItem>
                    <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="City"
                  fullWidth
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <InputLabel>Type of Query</InputLabel>
                  <Select defaultValue="General Enquiry">
                    <MenuItem value="General Enquiry">General Enquiry</MenuItem>
                    <MenuItem value="Support">Support</MenuItem>
                    <MenuItem value="Feedback">Feedback</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Query"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>

        {/* Contact Details Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Locate Us
          </Typography>
          <Box sx={{ mb: 2 }}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509603!2d144.9559283153163!3d-37.8172099797519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f10e6e65%3A0x3aef3f09da3d20db!2sEureka%20Skydeck!5e0!3m2!1sen!2sin!4v1647229739078!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allow-FullScreen=""
              loading="lazy"
            ></iframe>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            Our Info
          </Typography>
          <Typography>Email: mail@njoyholidayz.com</Typography>
          <Typography>Phone: +91 1234567890</Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            Our Address
          </Typography>
          <Typography>
            Njoy Holidayz Tours & Visa Services <br />
            G-965, Radha Krishna Path, <br />
            Bhattacharjee Lane, Upper Bazar
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUs;
