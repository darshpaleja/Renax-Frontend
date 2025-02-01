import Navbar from "../Navbar";
import { Box, Button, Typography, Container } from "@mui/material";
import React, { useEffect } from "react";
import Line from "../Home/Line";
import Section3 from "../Home/Section3";
import Section8 from "../Home/Section8";
import Footer from "../Footer";
import Section10 from "../Home/Section10";
import { useNavigate } from "react-router";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Abour() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  if (!token) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#222222",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              backgroundColor: "#1b1b1b",
              borderRadius: "25px",
              padding: "40px",
              textAlign: "center",
            }}
          >
            <LockOutlinedIcon 
              sx={{ 
                fontSize: "60px", 
                color: "#F5B754",
                marginBottom: "20px"
              }} 
            />
            
            <Typography
              sx={{
                fontSize: "25px",
                fontFamily: "Outfit",
                fontWeight: "500",
                color: "#fff",
                marginBottom: "15px",
              }}
            >
              Access Restricted
            </Typography>

            <Typography
              sx={{
                fontSize: "15px",
                fontFamily: "Outfit",
                color: "#999",
                marginBottom: "30px",
                lineHeight: "1.6",
              }}
            >
              Please log in to view our About page and discover more about our premium car rental services.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              <Button
                variant="contained"
                onClick={() => navigate("/login")}
                sx={{
                  backgroundColor: "#F5B754",
                  color: "#1b1b1b",
                  borderRadius: "25px",
                  padding: "12px 30px",
                  fontSize: "14px",
                  fontFamily: "Outfit",
                  fontWeight: "400",
                  textTransform: "capitalize",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                Login
              </Button>

              <Button
                variant="outlined"
                onClick={() => navigate("/signup")}
                sx={{
                  borderColor: "#F5B754",
                  color: "#F5B754",
                  borderRadius: "25px",
                  padding: "12px 30px",
                  fontSize: "14px",
                  fontFamily: "Outfit",
                  fontWeight: "400",
                  textTransform: "capitalize",
                  "&:hover": {
                    borderColor: "white",
                    color: "white",
                  },
                }}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <>
      <Navbar />
      <Box
        sx={{
          position: "relative",
          height: "65vh",
          padding: "40px",
        }}
      >
        {/* Background Image with Opacity */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(https://duruthemes.com/demo/html/renax/dark/img/slider/3.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.4,
            zIndex: -1,
            height: "100%",
            width: "100%",
          }}
        />

        {/* Main Content Box - Centering everything */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Stack the content vertically
            justifyContent: "center", // Center vertically
            alignItems: "left", // Align to the left horizontally
            height: "100%", // Take up the full height of the parent container
            color: "white",
            zIndex: 1, // Ensure text appears above the background
          }}
        >
          {/* Title and Subtitle */}
          <Box
            sx={{
              fontSize: "11px",
              fontWeight: "200",
              color: "#f5b754",
              fontFamily: "Outfit",
              letterSpacing: "6px",
              marginBottom: "12px",
            }}
          >
            RENTAX
          </Box>

          <Box
            sx={{
              fontSize: "40px",
              fontFamily: "Outfit",
              fontWeight: "600",
            }}
          >
            About <span style={{ color: "#f5b754" }}>Us</span>
          </Box>
        </Box>
      </Box>

      <Line />
      <Section3 />

      {/* Adding margin between Section8 and Section9 */}
      <Box>
        <Section8 />
      </Box>
      <Section10></Section10>
      <Footer></Footer>
    </>
  );
}

export default Abour;
