import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import '../../App.css';

function Section2() {
  return (
    <>
      <Container sx={{ marginTop: '-120px', position: 'relative', zIndex: '20', marginBottom: '60px'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} sx={{display: 'flex', justifyContent: 'center'}}>
            <Box className='card-inner-container' sx={{ backgroundColor: '#f5b754', padding: '60px 10px 60px 30px', borderRadius: '20px', boxShadow: 2 , transition: 'transform 0.3s ease' , '&:hover' : {transform: 'translateY(-20px)', backgroundColor : '#fff',  '& .no' : {color: 'rgba(0, 0, 0, 0.3)'} } }}>
                  <Box className='no' sx={{color: '#1b1b1b', fontWeight: '650', opacity: '0.9' , fontSize: '50px', position: 'absolute' , transform: 'scale(2.8, 3.4)' }}>1</Box>
              <Box sx={{ paddingLeft: '65px' }}>
                <Box sx={{ fontFamily: 'Outfit', fontWeight: '600', fontSize: '19px', marginBottom: '10px', color: '#1b1b1b' }}>
                  Choose A Car
                </Box>
                <Box sx={{ color: '#222', fontFamily: 'Outfit', fontWeight: '100', fontSize: '14px' }}>
                  View our range of cars,find your perfect car for the coming days
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} sx={{display: 'flex', justifyContent: 'center'}}>
            <Box className='card-inner-container' sx={{ backgroundColor: '#f5b754', padding: '60px 10px 60px 30px', borderRadius: '20px', boxShadow: 2 , transition: 'transform 0.3s ease' , '&:hover' : {transform: 'translateY(-20px)', backgroundColor : '#fff',  '& .no' : {color: 'rgba(0, 0, 0, 0.3)'}} }}>
                  <Box className='no' sx={{color: '#1b1b1b', fontWeight: '650', opacity: '0.9' , fontSize: '50px', position: 'absolute' , transform: 'scale(2.8, 3.4)'  }}>2</Box>
              <Box sx={{ paddingLeft: '65px' }}>
                <Box sx={{ fontFamily: 'Outfit', fontWeight: '600', fontSize: '19px', marginBottom: '10px', color: '#1b1b1b' }}>
                  Come In Contact
                </Box>
                <Box sx={{ color: '#222', fontFamily: 'Outfit', fontWeight: '100', fontSize: '14px' }}>
                  Our advisor team is ready to helps you with the booking process.
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={4} sx={{display: 'flex', justifyContent: 'center'}}>
            <Box className='card-inner-container' sx={{ backgroundColor: '#f5b754', padding: '60px 10px 60px 30px', borderRadius: '20px', boxShadow: 2 , transition: 'transform 0.3s ease' , '&:hover' : {transform: 'translateY(-20px)', backgroundColor : '#fff',  '& .no' : {color: 'rgba(0, 0, 0, 0.3)'}} }}>
                  <Box className='no' sx={{color: '#1b1b1b', fontWeight: '650', opacity: '0.9' , fontSize: '50px', position: 'absolute' , transform: 'scale(2.8, 3.4)'  }}>3</Box>
              <Box sx={{ paddingLeft: '65px' }}>
                <Box sx={{ fontFamily: 'Outfit', fontWeight: '600', fontSize: '19px', marginBottom: '10px', color: '#1b1b1b' }}>
                  Enjoy Driving
                </Box>
                <Box sx={{ color: '#222', fontFamily: 'Outfit', fontWeight: '100', fontSize: '14px' }}>
                  Receive the key and enjoy your car. We treat all  cars with respect.
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>  

    </>
  );
}

export default Section2;
