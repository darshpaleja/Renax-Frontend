import { Box } from "@mui/material";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../images/1.jpg";
import two from "../images/2.jpg";
import three from "../images/3.jpg";
import four from "../images/4.jpg";
import five from "../images/5.avif";
import six from "../images/6.jpg";

function Section4() {
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
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Box sx={{ marginBottom: "130px", padding: "40px" }}>
        <Box
          className="text"
          sx={{
            textAlign: "center",
            fontFamily: "Outfit",
            marginBottom: "30px",
          }}
        >
          <Box
            sx={{
              color: "#f5b754",
              fontSize: "10px",
              fontWeight: "200",
              letterSpacing: "6px",
              marginBottom: "10px",
            }}
          >
            WHAT WE DO
          </Box>
          <Box
            sx={{
              fontSize: "33px",
              fontFamily: "Outfit",
              fontWeight: "700",
              color: "#f5b754",
              letterSpacing: "2px",
            }}
          >
            <span style={{ color: "white" }}>Our</span> Services
          </Box>
        </Box>

        {/* Carousel / Slider Section */}
        <Box className="carousel">
          <Slider {...settings}>
            {[one, two, three, four, five, six].map((image, index) => (
              <div className="slick-slide" key={index}>
                <div
                  className="image-container"
                  style={{
                    position: "relative",
                    overflow: "hidden", // Prevents scaling outside the box
                    borderRadius: "20px",
                  }}
                >
                  <img
                    src={image}
                    alt={`Service ${index + 1}`}
                    className="slick-image"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "20px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease-in-out",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform = "scale(1.05)")
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform = "scale(1)")
                    }
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10%", // Adjust this value to move the text up or down
                      left: "50%",
                      transform: "translateX(-50%)",
                      color: "white",
                      fontSize: "24px",
                      fontWeight: "500",
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                      textAlign: "center",
                      width: "100%",
                      fontFamily: "Outfit",
                      opacity: 1, // Ensure it's always visible
                    }}
                  >
                    {
                      [
                        "Corporate Car Rental",
                        "Electric Vehicle Rentals",
                        "Unique Cars",
                        "Local Tours with guide",
                        "24/7 Roadside Assistance",
                        "24/7 Customer Care",
                      ][index]
                    }
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
}

export default Section4;
