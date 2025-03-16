import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { PiPhoneCallLight } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import NavLogo from "./images/nav-logo.png";
import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

function Footer() {
  // State for hover effect
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Function to handle hover
  const handleMouseEnter = (icon) => setHoveredIcon(icon);
  const handleMouseLeave = () => setHoveredIcon(null);

  return (
    <>
      <Container>
        <Grid container spacing={6}>
          {/* <Grid item xs={1}>
            {" "}
          </Grid> */}

          {/* 1 Card */}
          <Grid item xs={12} md={4}>
            <Box
              className="card-container"
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #222",
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  color: "#999999",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "#1b1b1b",
                    backgroundColor: "#f5b754",
                    borderRadius: "50%",
                    fontSize: "25px",
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "57px",
                    height: "57px",
                    marginRight: "15px",
                  }}
                >
                  <PiPhoneCallLight style={{ fontWeight: "lighter" }} />
                </span>
              </Box>

              <Box>
                <Box sx={{ color: "white", fontFamily: "Outfit" }}>Call Us</Box>
                <Box
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontFamily: "Outfit",
                  }}
                >
                  +971 52-333-4444
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* 2 Card */}
          <Grid item xs={12} md={4}>
            <Box
              className="container"
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #222",
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  color: "#999999",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "#1b1b1b",
                    backgroundColor: "#f5b754",
                    borderRadius: "50%",
                    fontSize: "25px",
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "57px",
                    height: "57px",
                    marginRight: "15px",
                  }}
                >
                  <MdEmail style={{ fontWeight: "lighter" }} />
                </span>
              </Box>

              <Box>
                <Box sx={{ color: "white", fontFamily: "Outfit" }}>
                  Write to us
                </Box>
                <Box
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontFamily: "Outfit",
                  }}
                >
                  info@renax.com
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* 3 Card */}
          <Grid item xs={12} md={4}>
            <Box
              className="container"
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #222",
                padding: "20px",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  color: "#999999",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    color: "#1b1b1b",
                    backgroundColor: "#f5b754",
                    borderRadius: "50%",
                    fontSize: "25px",
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "57px",
                    height: "57px",
                    marginRight: "15px",
                  }}
                >
                  <CiLocationOn style={{ fontWeight: "lighter" }} />
                </span>
              </Box>

              <Box>
                <Box sx={{ color: "white", fontFamily: "Outfit" }}>Address</Box>
                <Box
                  sx={{
                    color: "rgba(255, 255, 255, 0.8)",
                    fontFamily: "Outfit",
                  }}
                >
                  Dubai, Water Tower, Office 123
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* <Grid item xs={1}>
            {" "}
          </Grid> */}
        </Grid>
      </Container>

      <Container
        sx={{
          paddingTop: "70px",
          borderBottom: "1px solid #222",
          paddingBottom: "50px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <img src={NavLogo} alt="NavLogo" width={"120px"} />
            <Box
              sx={{
                fontFamily: "Outfit",
                color: "rgba(255, 255, 255, 0.8)",
                marginTop: "10px",
                fontSize: "14px",
                fontWeight: "200",
                lineHeight: "25px",
              }}
            >
              Rent a car imperdiet sapien porttito the bibenum ellentesue the
              commodo erat nesuen.
            </Box>

            {/* WhatsApp Icon */}
            <a
              href="#"
              style={{
                color: hoveredIcon === "whatsapp" ? "black" : "white",
                backgroundColor:
                  hoveredIcon === "whatsapp" ? "#f5b754" : "transparent",
                borderRadius: "50%",
                fontSize: "18px",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                width: "47px",
                height: "47px",
                marginRight: "8px",
                border: "1px solid #f5b754",
                marginTop: "15px",
              }}
              onMouseEnter={() => handleMouseEnter("whatsapp")}
              onMouseLeave={handleMouseLeave}
            >
              <FaWhatsapp />
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/your_handle"
              style={{
                color: hoveredIcon === "instagram" ? "black" : "white",
                backgroundColor:
                  hoveredIcon === "instagram" ? "#f5b754" : "transparent",
                borderRadius: "50%",
                fontSize: "18px",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                width: "47px",
                height: "47px",
                marginRight: "8px",
                border: "1px solid #f5b754",
                marginTop: "15px",
              }}
              onMouseEnter={() => handleMouseEnter("instagram")}
              onMouseLeave={handleMouseLeave}
            >
              <FaInstagram />
            </a>

            {/* YouTube Icon */}
            <a
              href="https://www.youtube.com/channel/your_channel"
              style={{
                color: hoveredIcon === "youtube" ? "black" : "white",
                backgroundColor:
                  hoveredIcon === "youtube" ? "#f5b754" : "transparent",
                borderRadius: "50%",
                fontSize: "18px",
                display: "inline-flex",
                justifyContent: "center",
                alignItems: "center",
                width: "47px",
                height: "47px",
                marginRight: "8px",
                border: "1px solid #f5b754",
                marginTop: "15px",
              }}
              onMouseEnter={() => handleMouseEnter("youtube")}
              onMouseLeave={handleMouseLeave}
            >
              <FaYoutube />
            </a>
          </Grid>

          <Grid item xs={12} md={4}>
            {/* Quick Links Section */}
            <Box
              sx={{
                color: "white",
                fontFamily: "Outfit",
                fontSize: "21px",
                fontWeight: "600",
                margin: "0 auto",
                textAlign: {
                  xs: "left", // Align text to the left on small screens (xs)
                  md: "center", // Center text on medium (md) and larger screens
                },
              }}
            >
              Quick Links
            </Box>

            {/* Centered List */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column", // Stack items vertically
                alignItems: {
                  xs: "flex-start", // Align items to the left on small screens (xs)
                  md: "center", // Center items on medium (md) and larger screens
                },
                justifyContent: "center", // Center items vertically (within the box)
                marginTop: "5px",
                paddingLeft: {
                  xs: "20px", // Adds space on the left for small screens
                  md: "0", // Removes space on larger screens
                },
              }}
            >
              <ul style={{ padding: 0, listStyleType: "disc" }}>
                <li
                  style={{
                    margin: "8px 0",
                    fontFamily: "Outfit",
                    listStyleType: "disc",
                    fontSize: "14px",
                  }}
                >
                  <Link
                    to="/about"
                    className="footer-a"
                    style={{ textDecoration: "none", fontSize: "14px" }}
                  >
                    About
                  </Link>
                </li>
                <li
                  style={{
                    margin: "8px 0",
                    fontFamily: "Outfit",
                    listStyleType: "disc",
                    fontSize: "14px",
                  }}
                >
                  <Link
                    to="/services"
                    className="footer-a"
                    style={{ textDecoration: "none", fontSize: "14px" }}
                  >
                    Services
                  </Link>
                </li>
                <li
                  style={{
                    margin: "8px 0",
                    fontFamily: "Outfit",
                    listStyleType: "disc",
                    fontSize: "14px",
                  }}
                >
                  <Link
                    to="/cars"
                    className="footer-a"
                    style={{ textDecoration: "none", fontSize: "14px" }}
                  >
                    Cars
                  </Link>
                </li>
                <li
                  style={{
                    margin: "8px 0",
                    fontFamily: "Outfit",
                    listStyleType: "disc",
                    fontSize: "14px",
                  }}
                >
                  <Link
                    to="/blogs"
                    className="footer-a"
                    style={{ textDecoration: "none", fontSize: "14px" }}
                  >
                    Blogs
                  </Link>
                </li>
                <li
                  style={{
                    margin: "8px 0",
                    fontFamily: "Outfit",
                    listStyleType: "disc",
                    fontSize: "14px",
                  }}
                >
                  <Link
                    to="/contact"
                    className="footer-a"
                    style={{ textDecoration: "none", fontSize: "14px" }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                color: "white",
                fontFamily: "Outfit",
                fontSize: "21px",
                fontWeight: "600",
                margin: "0 auto",
              }}
            >
              Subscribe
            </Box>

            <Box
              sx={{
                fontFamily: "Outfit",
                color: "rgba(255, 255, 255, 0.8)",
                marginTop: "10px",
                fontSize: "14px",
                fontWeight: "200",
                lineHeight: "25px",
              }}
            >
              Want to be notified about our services? Just sign up and we'll
              send you a notification by email.
            </Box>

            <Box
              sx={{
                position: "relative", // Set relative positioning for the container
                display: "flex", // Flex to arrange the input and button side by side
                alignItems: "center", // Center the content vertically
                width: "100%", // Full width for the input container
                marginTop: "20px",
                "&:hover": {
                  // On hover of the container, change the button's background
                  ".arrow-button": {
                    backgroundColor: "white", // Change background color of the button
                  },
                },
              }}
            >
              {/* Input Field */}
              <Box
                component="input"
                sx={{
                  border: "1px solid #f5b754", // Border color for the input
                  borderRadius: "30px", // Rounded corners
                  padding: "8px 16px", // Padding inside the input
                  fontSize: "14px", // Font size for input text
                  color: "black", // Text color inside the input
                  backgroundColor: "transparent", // Transparent background
                  flexGrow: 1, // Makes the input take up remaining space
                  height: "45px", // Height of the input
                  "::placeholder": {
                    color: "rgba(255, 255, 255, 0.8)", // Set placeholder color to white
                    opacity: 1, // Ensure the placeholder is not semi-transparent (optional)
                  },
                }}
                placeholder="Email Address"
              />

              {/* Arrow Button */}
              <Box
                component="button"
                className="arrow-button" // Add a class for easier hover targeting
                sx={{
                  position: "absolute", // Position it inside the container
                  right: "10px", // Position the button on the far right side
                  top: "50%", // Center the button vertically
                  transform: "translateY(-50%)", // Adjust vertical alignment
                  backgroundColor: "#f5b754", // Initial background color for the button
                  color: "black", // Text color for the button
                  fontSize: "14px", // Font size for button text
                  fontWeight: "600", // Button text weight
                  borderRadius: "50%", // Make the button round
                  padding: "8px", // Padding inside the button
                  border: "none", // Remove default button border
                  cursor: "pointer", // Cursor style on hover
                  height: "45px", // Height of the button
                  width: "45px", // Width of the button
                  display: "flex", // Flex to center the icon
                  alignItems: "center", // Center content vertically
                  justifyContent: "center", // Center content horizontally
                  transition: "background-color 0.3s ease", // Smooth transition for background color
                }}
              >
                <GoArrowUpRight />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Grid item xs={12}>
          <Box
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              fontFamily: "Outfit",
              fontSize: "13px",
              marginTop: "40px",
              marginBottom: "60px",
            }}
          >
            ©2024{" "}
            <a
              href="#"
              style={{
                color: "white",
                textDecoration: "none",
                borderBottom: "1px solid #f5b754",
                paddingBottom: "3px",
              }}
            >
              Darsh.
            </a>{" "}
            All rights reserved.
          </Box>
        </Grid>
      </Container>
    </>
  );
}

export default Footer;
