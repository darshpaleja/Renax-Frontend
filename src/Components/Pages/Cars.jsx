import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Line from "../Home/Line";
// Import icons
import { BsPeople } from "react-icons/bs";
import { PiGearFineBold } from "react-icons/pi";
import { LuBaggageClaim } from "react-icons/lu";
import Footer from "../Footer";
import Section10 from "../Home/Section10";
import axios from "axios";
// Add Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

function Cars() {
  const navigate = useNavigate();
  const [carsData, setCarsData] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch Cars Data
  const fetchCarData = () => {
    axios
      .get("https://renax-backend.onrender.com/cars/getCars", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setCarsData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCarData();
  }, []);
  // Function to chunk array into groups of 6
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  };

  // if not token
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

        {/* Main Content Box */}
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
            Select Your Car
          </Box>

          <Box
            sx={{
              fontSize: "40px",
              fontFamily: "Outfit",
              fontWeight: "600",
            }}
          >
            Luxury <span style={{ color: "#f5b754" }}>Car Fleet</span>
          </Box>
        </Box>
      </Box>

      <Line />

      {/* Modified Cars Grid Section */}
      <Container sx={{ mt: 8, mb: 8 }}>
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="cars-swiper"
        >
          {chunkArray(carsData, 6).map((carGroup, groupIndex) => (
            <SwiperSlide key={groupIndex}>
              <Grid container spacing={4}>
                {carGroup.map((car) => (
                  <Grid item xs={12} md={6} key={car._id}>
                    <Box sx={{ position: "relative", mb: 4 }}>
                      {/* Car Image */}
                      <Box
                        sx={{
                          width: "100%",
                          height: 300,
                          overflow: "hidden",
                          borderRadius: "15px",
                          "&:hover img": { transform: "scale(1.04)" },
                        }}
                      >
                        <img
                          src={`https://renax-backend.onrender.com/public/images/${car.images[0]}`}
                          alt={car.name}
                          style={{
                            width: "100%",
                            height: "auto",
                            transition: "all 0.5s ease",
                          }}
                        />
                      </Box>

                      {/* Car Details Card */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: -40,
                          left: "5%",
                          right: "5%",
                          backgroundColor: "#222222",
                          borderRadius: "15px",
                          padding: "30px 25px",
                          color: "white",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        {/* Left Side - Car Info */}
                        <Box>
                          <Typography
                            sx={{
                              fontSize: { md: "18px", xs: "16px", sm: "18px" },
                              fontWeight: "700",
                              fontFamily: "Outfit",
                              color: "#fff",
                              cursor: "pointer",
                              display: "inline",
                            }}
                            onClick={() =>
                              navigate(`/cars/car-details/${car._id}`)
                            }
                          >
                            {car.name}
                          </Typography>
                          <Box sx={{ display: "flex", gap: 1 }}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                              }}
                            >
                              <BsPeople color="#f5b754" />
                              <Typography
                                sx={{
                                  fontSize: { md: "14px", xs: "12px" },
                                  color: "#999",
                                  fontFamily: "Outfit",
                                }}
                              >
                                {car.passengers} passengers
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                              }}
                            >
                              <PiGearFineBold color="#f5b754" />
                              <Typography
                                sx={{
                                  fontSize: { md: "14px", xs: "12px" },
                                  color: "#999",
                                  fontFamily: "Outfit",
                                }}
                              >
                                {car.transmission}
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                              }}
                            >
                              <LuBaggageClaim color="#f5b754" />
                              <Typography
                                sx={{
                                  fontSize: { md: "14px", xs: "12px" },
                                  color: "#999",
                                  fontFamily: "Outfit",
                                }}
                              >
                                {car.luggage} luggage
                              </Typography>
                            </Box>
                          </Box>
                        </Box>

                        {/* Right Side - Price and Button */}
                        <Box
                          sx={{
                            textAlign: "right",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-end",
                          }}
                        >
                          <Button
                            variant="contained"
                            sx={{
                              backgroundColor: "#f5b754",
                              color: "#1b1b1b",
                              borderRadius: "25px",
                              padding: {
                                md: "12px 18px",
                                xs: "12px 14px",
                                sm: "12px 18px",
                              },
                              fontSize: { md: "14px", xs: "11px", sm: "12px" },
                              fontFamily: "Outfit",
                              fontWeight: "300",
                              textTransform: "capitalize",
                              transition: "transform 0.4s",
                              "&:hover": {
                                backgroundColor: "white",
                                transform: "translateY(-4px)",
                              },
                            }}
                            onClick={() =>
                              navigate(`/cars/car-details/${car._id}`)
                            }
                          >
                            Details
                          </Button>
                          <Typography
                            sx={{
                              paddingLeft: "10px",
                              paddingRight: "0px",
                              display: "block",
                              lineHeight: "1",
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: { md: "21px", xs: "18px" },
                                fontWeight: "600",
                                color: "#f5b754",
                                fontFamily: "Outfit",
                              }}
                            >
                              ${car.price}
                              <br />
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: { md: "16px", xs: "12px" },
                                fontWeight: "400",
                                color: "#999",
                                fontFamily: "Outfit",
                              }}
                            >
                              /day
                            </Typography>
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <Line />
      <Section10 />
      <Footer />

      <style>
        {`
          .cars-swiper {
            padding-bottom: 60px !important;
          }
          .cars-swiper .swiper-button-next,
          .cars-swiper .swiper-button-prev {
            color: #F5B754;
            
          }
          .cars-swiper .swiper-pagination-bullet {
            background: #F5B754;
          }
          .cars-swiper .swiper-pagination-bullet-active {
            background: #F5B754;
          }
        `}
      </style>
    </>
  );
}

export default Cars;
