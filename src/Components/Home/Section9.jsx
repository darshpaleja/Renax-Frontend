import { Avatar, Box } from "@mui/material";
import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa6";
import Slider from "react-slick";

function Section9() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (current, next) => setCurrentSlide(next),
    centerMode: false, // Disable centerMode to stop partial cards
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 cards on medium screens
          slidesToScroll: 1,
          centerMode: false, // Disable centerMode
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2, // Show 2 cards on small screens
          slidesToScroll: 1,
          centerMode: false, // Disable centerMode
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1, // Show 1 card on mobile
          slidesToScroll: 1,
          centerMode: false, // Disable centerMode
        },
      },
    ],
  };

  return (
    <>
      <Box>
        <Box
          className="text"
          sx={{
            textAlign: "center",
            fontFamily: "Outfit",
            marginBottom: "30px",
            // padding: '40px'
          }}
        >
          <Box
            sx={{
              color: "#f5b754",
              fontSize: "10px",
              fontWeight: "200",
              letterSpacing: "6px",
              marginBottom: "10px",
              textTransform: "uppercase",
            }}
          >
            Testimonials
          </Box>
          <Box
            sx={{
              fontSize: "33px",
              fontFamily: "Outfit",
              fontWeight: "700",
              color: "white",
              letterSpacing: "2px",
            }}
          >
            What Clients Say
          </Box>
        </Box>
      </Box>

      {/* Slider Component for Testimonials */}
      <div className="slider-container" style={{ padding: "0 40px", marginBottom: '100px'}}>
        <Slider {...settings}>
          {/* Testimonial Card 1 */}
          <div>
            <Box
              sx={{
                bgcolor: "#222",
                padding: "40px 40px 100px 40px",
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden",
                maxWidth: "350px", // Limit width to 350px
                margin: "0 auto", // Center the card
                marginBottom: "20px", // Add space between cards
                "&:hover": {
                  bgcolor: "#f5b754",
                  "& .card-title": { color: "black" },
                  "& .card-description": { color: "black" },
                },
              }}
            >
              <Box
                sx={{
                  color: "#f5b754",
                  fontFamily: "Outfit",
                  fontWeight: "600",
                  fontSize: "45px",
                  marginBottom: "15px",
                }}
                className="card-title"
              >
                <FaQuoteLeft />
              </Box>

              <Box
                sx={{
                  color: "white",
                  fontFamily: "Outfit",
                  marginBottom: "10px",
                  fontSize: "16px",
                }}
              >
                John Doe
              </Box>

              <Box
                sx={{
                  color: "#999999",
                  fontFamily: "Outfit",
                  fontSize: "13px",
                }}
                className="card-description"
              >
                I recently rented a car from RENAX, and my experience was
                fantastic. The booking process was simple and the website was
                easy to navigate. The car I rented was in excellent
                condition—clean, and drove smoothly.
              </Box>

              {/* Avatar with rounded number 1 */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0px",
                  left: "10px",
                  width: "55px",
                  height: "55px",
                  bgcolor: "#222",
                  borderRadius: "50%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  zIndex: 1,
                  fontFamily: "Outfit",
                }}
              >
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  alt="Remy Sharp"
                  src="https://duruthemes.com/demo/html/renax/dark/img/team/1.jpg"
                />
              </Box>

              {/* SVG for rounded bottom-left corner */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-8 -8 60 50"
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "30%",
                  height: "30%",
                  zIndex: 0,
                }}
              >
                <circle cx="0" cy="50" r="50" fill="#1b1b1b" />
              </svg>
            </Box>
          </div>

          {/* Testimonial Card 2 */}
          <div>
            <Box
              sx={{
                bgcolor: "#222",
                padding: "40px 40px 100px 40px",
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden",
                maxWidth: "350px", // Limit width to 350px
                margin: "0 auto", // Center the card
                marginBottom: "20px", // Add space between cards
                "&:hover": {
                  bgcolor: "#f5b754",
                  "& .card-title": { color: "black" },
                  "& .card-description": { color: "black" },
                },
              }}
            >
              <Box
                sx={{
                  color: "#f5b754",
                  fontFamily: "Outfit",
                  fontWeight: "600",
                  fontSize: "45px",
                  marginBottom: "15px",
                }}
                className="card-title"
              >
                <FaQuoteLeft />
              </Box>

              <Box
                sx={{
                  color: "white",
                  fontFamily: "Outfit",
                  marginBottom: "10px",
                  fontSize: "16px",
                }}
              >
                Emily Martin
              </Box>

              <Box
                sx={{
                  color: "#999999",
                  fontFamily: "Outfit",
                  fontSize: "13px",
                }}
                className="card-description"
              >
                Excellent service! I would highly recommend RENAX to anyone
                looking for a great rental experience. The car was in great
                condition, and the booking process was seamless.
              </Box>

              {/* Avatar with rounded number 2 */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0px",
                  left: "10px",
                  width: "55px",
                  height: "55px",
                  bgcolor: "#222",
                  borderRadius: "50%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  zIndex: 1,
                  fontFamily: "Outfit",
                }}
              >
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  alt="Jane Doe"
                  src="https://duruthemes.com/demo/html/renax/dark/img/team/2.jpg"
                />
              </Box>

              {/* SVG for rounded bottom-left corner */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-8 -8 60 50"
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "30%",
                  height: "30%",
                  zIndex: 0,
                }}
              >
                <circle cx="0" cy="50" r="50" fill="#1b1b1b" />
              </svg>
            </Box>
          </div>

          {/* Testimonial Card 3 */}
          <div>
            <Box
              sx={{
                bgcolor: "#222",
                padding: "40px 40px 100px 40px",
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden",
                maxWidth: "350px", // Limit width to 350px
                margin: "0 auto", // Center the card
                marginBottom: "20px", // Add space between cards
                "&:hover": {
                  bgcolor: "#f5b754",
                  "& .card-title": { color: "black" },
                  "& .card-description": { color: "black" },
                },
              }}
            >
              <Box
                sx={{
                  color: "#f5b754",
                  fontFamily: "Outfit",
                  fontWeight: "600",
                  fontSize: "45px",
                  marginBottom: "15px",
                }}
                className="card-title"
              >
                <FaQuoteLeft />
              </Box>

              <Box
                sx={{
                  color: "white",
                  fontFamily: "Outfit",
                  marginBottom: "10px",
                  fontSize: "16px",
                }}
              >
                Olivia Brown
              </Box>

              <Box
                sx={{
                  color: "#999999",
                  fontFamily: "Outfit",
                  fontSize: "13px",
                }}
                className="card-description"
              >
                I had a fantastic experience using RENAX for my recent trip. The
                booking process was quick and easy, with clear pricing and a
                great selection of vehicles. The car I rented was in excellent
                condition and ready to go.
              </Box>

              {/* Avatar with rounded number 2 */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0px",
                  left: "10px",
                  width: "55px",
                  height: "55px",
                  bgcolor: "#222",
                  borderRadius: "50%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  zIndex: 1,
                  fontFamily: "Outfit",
                }}
              >
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  alt="Jane Doe"
                  src="https://duruthemes.com/demo/html/renax/dark/img/team/4.jpg"
                />
              </Box>

              {/* SVG for rounded bottom-left corner */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-8 -8 60 50"
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "30%",
                  height: "30%",
                  zIndex: 0,
                }}
              >
                <circle cx="0" cy="50" r="50" fill="#1b1b1b" />
              </svg>
            </Box>
          </div>

          {/* Testimonial Card 3 */}
          <div>
            <Box
              sx={{
                bgcolor: "#222",
                padding: "40px 40px 100px 40px",
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden",
                maxWidth: "350px", // Limit width to 350px
                margin: "0 auto", // Center the card
                marginBottom: "20px", // Add space between cards
                "&:hover": {
                  bgcolor: "#f5b754",
                  "& .card-title": { color: "black" },
                  "& .card-description": { color: "black" },
                },
              }}
            >
              <Box
                sx={{
                  color: "#f5b754",
                  fontFamily: "Outfit",
                  fontWeight: "600",
                  fontSize: "45px",
                  marginBottom: "15px",
                }}
                className="card-title"
              >
                <FaQuoteLeft />
              </Box>

              <Box
                sx={{
                  color: "white",
                  fontFamily: "Outfit",
                  marginBottom: "10px",
                  fontSize: "16px",
                }}
              >
                Dan Martin
              </Box>

              <Box
                sx={{
                  color: "#999999",
                  fontFamily: "Outfit",
                  fontSize: "13px",
                }}
                className="card-description"
              >
                I had an excellent experience with RENAX for my
                recent trip. The website was easy to navigate, offering a wide
                range of vehicles, and the booking process was
                straightforward with clear, transparent pricing.
              </Box>

              {/* Avatar with rounded number 2 */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0px",
                  left: "10px",
                  width: "55px",
                  height: "55px",
                  bgcolor: "#222",
                  borderRadius: "50%",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                  zIndex: 1,
                  fontFamily: "Outfit",
                }}
              >
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  alt="Jane Doe"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbiUyMGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                />
              </Box>

              {/* SVG for rounded bottom-left corner */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-8 -8 60 50"
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "30%",
                  height: "30%",
                  zIndex: 0,
                }}
              >
                <circle cx="0" cy="50" r="50" fill="#1b1b1b" />
              </svg>
            </Box>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Section9;
