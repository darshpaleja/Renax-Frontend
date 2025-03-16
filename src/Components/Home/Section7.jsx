import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { IoIosInformation } from "react-icons/io";


function Section7() {
  return (
    <>
      <Box>
        <Box className="text" sx={{ textAlign: 'center', fontFamily: 'Outfit', marginBottom: '30px' }}>
          <Box sx={{ color: '#f5b754', fontSize: '10px', fontWeight: '200', letterSpacing: '6px', marginBottom: '10px' }}>
            STEPS
          </Box>
          <Box sx={{ fontSize: '33px', fontFamily: 'Outfit', fontWeight: '700', color: '#f5b754', letterSpacing: '2px' }}>
            <span style={{ color: 'white' }}>Car Rental</span> Process
          </Box>
        </Box>
      </Box>

      <Container sx={{marginBottom: '100px'}}>
        <Grid container spacing={4}>
          {/* Card 1 */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                bgcolor: '#222',
                padding: '60px 40px 120px 40px',
                marginRight: '10px',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  bgcolor: '#f5b754',
                  '& .card-title': { color: 'black' },
                  '& .card-description': { color: 'black' },
                },
              }}
            >
              <Box
                sx={{
                  color: 'white',
                  fontFamily: 'Outfit',
                  fontWeight: '600',
                  fontSize: '21px',
                  marginBottom: '15px',
                }}
                className="card-title"
              >
                Choose A Car
              </Box>
              <Box sx={{ color: '#999999', fontFamily: 'Outfit', fontSize: '13px' }} className="card-description">
                View our range of cars, find your perfect car for the coming days.
              </Box>

              {/* Number 1 in bottom-left corner in a round shape */}
              <Box
                sx={{
                    position: 'absolute',
                    bottom: '0px', // Ensure this is not too tight to the edge
                    left: '10px', // Adjust the left position if necessary
                    width: '55px',
                    height: '55px',
                    bgcolor: '#222',
                    borderRadius: '50%',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    zIndex: 1, // Ensure it appears above other content
                    fontFamily: 'Outfit'
                  }}
              >
                01.
              </Box>

              {/* SVG for rounded bottom-left corner with color #1b1b1b */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 50"
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '30%',
                  height: '30%',
                  zIndex: 0, // Ensure the SVG stays behind the content
                }}
              >
                <circle cx="0" cy="50" r="50" fill="#1b1b1b" />
              </svg>
            </Box>
          </Grid>

          {/* Card 2 */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                bgcolor: '#222',
                padding: '60px 40px 120px 40px',
                marginRight: '10px',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  bgcolor: '#f5b754',
                  '& .card-title': { color: 'black' },
                  '& .card-description': { color: 'black' },
                },
              }}
            >
              <Box
                sx={{
                  color: 'white',
                  fontFamily: 'Outfit',
                  fontWeight: '600',
                  fontSize: '21px',
                  marginBottom: '15px',
                }}
                className="card-title"
              >
                Come In Contact
              </Box>
              <Box sx={{ color: '#999999', fontFamily: 'Outfit', fontSize: '13px' }} className="card-description">
                Our advisor team is ready to help you with the booking process or any questions.
              </Box>

              {/* Number 1 in bottom-left corner in a round shape */}
              <Box
                sx={{
                    position: 'absolute',
                    bottom: '0px', // Ensure this is not too tight to the edge
                    left: '10px', // Adjust the left position if necessary
                    width: '55px',
                    height: '55px',
                    bgcolor: '#222',
                    borderRadius: '50%',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    zIndex: 1, // Ensure it appears above other content
                    fontFamily: 'Outfit'
                  }}
              >
                02.
              </Box>

              {/* SVG for rounded bottom-left corner with color #1b1b1b */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 50"
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '30%',
                  height: '30%',
                  zIndex: 0, // Ensure the SVG stays behind the content
                }}
              >
                <circle cx="0" cy="50" r="50" fill="#1b1b1b" />
              </svg>
            </Box>
          </Grid>

          {/* Card 3 */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                bgcolor: '#222',
                padding: '60px 40px 120px 40px',
                marginRight: '10px',
                borderRadius: '20px',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  bgcolor: '#f5b754',
                  '& .card-title': { color: 'black' },
                  '& .card-description': { color: 'black' },
                },
              }}
            >
              <Box
                sx={{
                  color: 'white',
                  fontFamily: 'Outfit',
                  fontWeight: '600',
                  fontSize: '21px',
                  marginBottom: '15px',
                }}
                className="card-title"
              >
                Enjoy Driving
              </Box>
              <Box sx={{ color: '#999999', fontFamily: 'Outfit', fontSize: '13px' }} className="card-description">
                Receive the key and enjoy your car. We treat all our cars with respect.
              </Box>

              {/* Number 1 in bottom-left corner in a round shape */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: '0px', // Ensure this is not too tight to the edge
                  left: '10px', // Adjust the left position if necessary
                  width: '55px',
                  height: '55px',
                  bgcolor: '#222',
                  borderRadius: '50%',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  zIndex: 1, // Ensure it appears above other content
                  fontFamily: 'Outfit'
                }}
              >
                03.
              </Box>

              {/* SVG for rounded bottom-left corner with color #1b1b1b */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 50"
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '30%',
                  height: '30%',
                  zIndex: 0, // Ensure the SVG stays behind the content
                }}
              >
                <circle cx="0" cy="50" r="50" fill="#1b1b1b" />
              </svg>
            </Box>
          </Grid>
        </Grid>
        
        
        <Box sx={{ textAlign: 'center', color: '#999999', marginTop: '28px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <span
            style={{
              color: '#999999',
              backgroundColor: '#333',
              borderRadius: '50%',  // This makes the background round
              fontSize: '25px',
              display: 'inline-flex',  // Use inline-flex to allow flex properties
              justifyContent: 'center',  // Horizontally center the icon
              alignItems: 'center',  // Vertically center the icon
              width: '25px',  // Set width of the circle
              height: '25px',  // Set height of the circle (making it a square ensures a round shape)
              marginRight: '8px'
            }}
          >
            <IoIosInformation />
          </span>
          <Box sx={{fontFamily: 'Outfit', fontSize: '14px'}}>If you've never rented a car before, we'll guide you through the process.</Box>
        </Box>


      </Container>


    </>
  );
}

export default Section7;
