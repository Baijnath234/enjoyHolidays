import { Box, Typography } from '@mui/material'
import React from 'react'

const MainSection = () => {
  return (
    <Box>
        <Box
          sx={{
            position: "relative",
            height: "90vh",
            marginTop: "64px",
            backgroundImage:
              "url('https://images.unsplash.com/photo-1533521806717-ed795c0a0ce6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.8,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)",
            }}
          >
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              Explore the World with InJoy Holidayz
            </Typography>
            <Typography variant="h5">Your adventure begins here.</Typography>
            <Typography>
              <Box></Box>
            </Typography>
          </Box>
        </Box>
      </Box>
  )
}

export default MainSection