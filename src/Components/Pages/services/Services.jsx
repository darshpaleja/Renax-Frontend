import React, { useState } from "react";
import Navbar from "../../Navbar";
import { Box, Container, Typography, Button, Grid } from "@mui/material"; // Added Grid
import Line from "../../Home/Line";
import { GoArrowUpRight } from "react-icons/go";
import CorporateCarRental from "./CorporateCarRental";
import CarRentalWithDriver from "./CarRentalWithDriver";
import FleetLeasing from "./FleetLeasing";
import Footer from "../../Footer";
import AirportTransfer from "./AirportTransfer";
import VIPTransfer from "./VIPTransfer";
import PrivateTransfer from "./PrivateTransfer";
import { useNavigate } from "react-router";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Services() {
  const [activeService, setActiveService] = useState("corporate"); // Default active service
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // If no token, show restricted access message
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
                marginBottom: "20px",
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
              Please log in to view our About page and discover more about our
              premium car rental services.
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

  const services = [
    {
      id: 1,
      name: "Corporate Car Rental",
      key: "corporate",
      component: <CorporateCarRental />,
    },
    {
      id: 2,
      name: "Electric Vehicle Rentals",
      key: "driver",
      component: <CarRentalWithDriver />,
    },
    {
      id: 3,
      name: "Unique Cars",
      key: "fleet",
      component: <FleetLeasing />,
    },
    {
      id: 4,
      name: "Local Tours with guide",
      key: "airport",
      component: <AirportTransfer />,
    },
    {
      id: 5,
      name: "24/7 Roadside Assistance",
      key: "vip",
      component: <VIPTransfer />,
    },
    {
      id: 6,
      name: "24/7 Customer Care",
      key: "private",
      component: <PrivateTransfer />,
    },
  ];

  // Get current service component
  const getCurrentService = () => {
    const service = services.find((s) => s.key === activeService);
    return service ? (
      service.component
    ) : (
      <Box sx={{ padding: "20px" }}>
        <Typography
          sx={{
            fontFamily: "Outfit",
            fontSize: "24px",
            fontWeight: "600",
            color: "#222222",
            marginBottom: "20px",
          }}
        >
          Select a Service
        </Typography>
        <Typography
          sx={{
            fontFamily: "Outfit",
            fontSize: "16px",
            color: "#666",
            lineHeight: "1.6",
          }}
        >
          Please select a service from the right to view its details.
        </Typography>
      </Box>
    );
  };

  return (
    <>
      <Navbar />
      {/* Header Section */}
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
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "left",
            height: "100%",
            color: "white",
            zIndex: 1,
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
              textTransform: "uppercase",
            }}
          >
            What We Do
          </Box>

          <Box
            sx={{
              fontSize: "40px",
              fontFamily: "Outfit",
              fontWeight: "600",
            }}
          >
            Our <span style={{ color: "#f5b754" }}>Services</span>
          </Box>
        </Box>
      </Box>

      <Line />

      {/* Main Container */}
      <Container
        sx={{
          marginTop: "40px",
        }}
      >
        <Grid container spacing={4}>
          

          {/* Right Side - Services List */}
          <Grid item xs={12} md={4} >
            <Box
              sx={{
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              {/* Yellow Header */}
              <Box
                sx={{
                  backgroundColor: "#F5B754",
                  borderRadius: "15px 15px 0 0",
                  padding: "30px",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Outfit",
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "black",
                  }}
                >
                  All Services
                </Typography>
              </Box>

              {/* Services List */}
              <Box
                sx={{
                  backgroundColor: "#222222",
                  padding: "40px 30px",
                  borderRadius: "0 0 15px 15px",
                }}
              >
                {services.map((service) => (
                  <Box
                    key={service.id}
                    onClick={() => setActiveService(service.key)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor:
                        activeService === service.key ? "#F5B754" : "#222222",
                      color: activeService === service.key ? "black" : "white",
                      padding: "15px 20px",
                      marginBottom: "10px",
                      border: "1px solid rgba(255, 255, 255, 0.03)",
                      borderRadius: "15px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "#F5B754",
                        color: "black",
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    <GoArrowUpRight style={{ marginRight: "10px" }} />
                    <Typography
                      sx={{
                        fontFamily: "Outfit",
                        fontSize: "14px",
                        fontWeight: "300",
                      }}
                    >
                      {service.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>

          {/* Left Side - Service Details */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                padding: {md: "20px" , xs: "0px"},
              }}
            >
              {getCurrentService()}
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Line />
      <Footer sx={{ marginTop: "100px" }} />
    </>
  );
}

export default Services;