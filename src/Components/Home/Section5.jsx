import { Box, Button } from '@mui/material';
import React from 'react';
import bgImg from '../images/section5Img.jpg';
import { useNavigate } from 'react-router-dom';


function Section5(props) {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          height: '50vh', // Increased height for better impact
          backgroundAttachment: 'fixed',
          padding: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        {/* Background Image with Opacity */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${props.bgImg ? props.bgImg : bgImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            opacity: 0.5,
            zIndex: -1,
            backgroundAttachment: 'fixed',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
            }
          }}
        />

        {/* Content Section */}
        <Box
          sx={{
            textAlign: 'center',
            color: 'white',
            zIndex: 1,
            maxWidth: '800px',
            padding: '0 20px',
          }}
        >
          <Box
            sx={{
              fontSize: '10px',
              fontWeight: '500',
              color: '#f5b754',
              fontFamily: 'Outfit',
              letterSpacing: '6px',
              marginBottom: '5px',
              textTransform: 'uppercase'
            }}
          >
            {props.title1 ? props.title1 : "Premium Car Collection"}
          </Box>
          <Box
            sx={{
              fontSize: { xs: '28px', md: '35px' },
              fontFamily: 'Outfit',
              fontWeight: '600',
              marginBottom: '14px',
              lineHeight: '1.3'
            }}
          >
            {props.title ? props.title : "Experience Luxury on Wheels"}
          </Box>
          <Box
            sx={{
              fontSize: { xs: '14px' },
              opacity: 0.8,
              marginBottom: '40px',
              fontFamily: 'Outfit',
            }}
          >
            {props.description ? props.description : "Discover our exclusive fleet of premium vehicles for an unforgettable journey that combines style, comfort, and performance. Choose your perfect ride today."}
          </Box>

          <Button
            variant="contained"
            sx={{
              padding: '15px 40px',
              backgroundColor: '#f5b754',
              borderRadius: '30px',
              color: '#1b1b1b',
              fontSize: '13px',
              fontFamily: 'Outfit',
              fontWeight: '400',
              textTransform: 'capitalize',
              // letterSpacing: '1px',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#fff',
                color: '#1b1b1b',
                transform: 'translateY(-3px)',
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
              },
            }}
            onClick={ props.onClick ? props.onClick : () => navigate('/cars') }
          >
            {props.buttonText ? props.buttonText : "Explore Cars"}
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Section5;
