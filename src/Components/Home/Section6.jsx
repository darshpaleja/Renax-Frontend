import { Box } from '@mui/material';
import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from '../images/car1.jpg';
import two from '../images/car2.jpg';
import three from '../images/car3.jpg';
import four from '../images/car4.jpg';

function Section6() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <Box sx={{ padding: '40px' }}>
        <Box className="text" sx={{ textAlign: 'center', fontFamily: 'Outfit', marginBottom: '30px' }}>
          <Box sx={{ color: '#f5b754', fontSize: '10px', fontWeight: '200', letterSpacing: '6px', marginBottom: '10px' }}>
            CATEGORIES
          </Box>
          <Box sx={{ fontSize: '33px', fontFamily: 'Outfit', fontWeight: '700', color: '#f5b754', letterSpacing: '2px' }}>
            <span style={{ color: 'white' }}>Rental</span> Car Types
          </Box>
        </Box>

        {/* Carousel / Slider Section */}
        <Box className="carousel">
          <Slider {...settings}>
            <div className="slick-slide">
              <div className="image-container">
                <img
                  src={one}
                  alt="Service 1"
                  className="slick-image"
                />
                <div className="overlay-text">Sports Cars</div>
                <div className="overlay-text" style={{ top: '67%', fontSize: '9px', color: '#f5b754', letterSpacing: '5px', fontFamily: 'Outfit', fontWeight: '200' }}>CAR TYPES</div>
              </div>
            </div>
            <div className="slick-slide">
              <div className="image-container">
                <img
                  src={two}
                  alt="Service 2"
                  className="slick-image"
                />
                <div className="overlay-text">Convertible</div>
                <div className="overlay-text" style={{ top: '67%', fontSize: '9px', color: '#f5b754', letterSpacing: '5px', fontFamily: 'Outfit', fontWeight: '200' }}>CAR TYPES</div>
              </div>
            </div>
            <div className="slick-slide">
              <div className="image-container">
                <img
                  src={three}
                  alt="Service 3"
                  className="slick-image"
                />
                <div className="overlay-text">Luxury Cars</div>
                <div className="overlay-text" style={{ top: '67%', fontSize: '9px', color: '#f5b754', letterSpacing: '5px', fontFamily: 'Outfit', fontWeight: '200' }}>CAR TYPES</div>
              </div>
            </div>
            <div className="slick-slide">
              <div className="image-container">
                <img
                  src={four}
                  alt="Service 4"
                  className="slick-image"
                />
                <div className="overlay-text">SUVs</div>
                <div className="overlay-text" style={{ top: '67%', fontSize: '9px', color: '#f5b754', letterSpacing: '5px', fontFamily: 'Outfit', fontWeight: '200' }}>CAR TYPES</div>
              </div>
            </div>
          </Slider>
        </Box>
      </Box>

      {/* Custom Styles */}
      <style jsx>{`
        .slick-slide {
          padding: 0 10px; /* Creates space between slides */
          transition: all 0.3s ease; /* Smooth transition */
        }

        .slick-image {
          width: 100%; /* Make image width 100% */
          height: 100%;  /* Ensure the height is responsive */
          object-fit: cover; /* Ensure the image covers the container */
          border-radius: 20px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease; /* Smooth zoom effect */
        }

        .slick-track {
          display: flex;
          justify-content: space-between;
        }

        .image-container {
          position: relative; /* Create a container for the image and overlay text */
        }

        .overlay-text {
          position: absolute;
          top: 60%; /* Center vertically */
          left: 50%; /* Center horizontally */
          transform: translate(-50%, -50%); /* Adjust for exact center */
          color: white;
          font-size: 28px;
          font-weight: 500;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          text-align: center;
          width: 100%;
          font-family: Outfit;
          opacity: 0; /* Initially invisible */
          visibility: hidden; /* Initially hidden */
          transition: opacity 0.3s ease, transform 0.3s ease; /* Smooth transition for visibility and positioning */
        }

        /* Hover Effect */
        .slick-image:hover {
          transform: scale(1.0.3); /* Increased zoom effect on image */
        }

        .image-container:hover .overlay-text {
          opacity: 1; /* Make text visible */
          visibility: visible; /* Make text visible */
          transform: translate(-50%, -50%) scale(1.3); /* Increased zoom effect on text */
        }

        /* Slick Carousel Track Styling */
        .slick-track {
          display: flex;
          justify-content: center; /* Center align slides in track */
        }

        /* Hide arrows completely when on the second slide */
        .slick-prev, .slick-next {
          display: ${currentSlide === 1 ? 'none' : 'block'} !important;
        }
      `}</style>
    </>
  );
}

export default Section6;
