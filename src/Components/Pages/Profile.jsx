import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Avatar,
  Tabs,
  Tab,
} from "@mui/material";
import Navbar from "../Navbar";
import Line from "../Home/Line";
import Footer from "../Footer";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // import useHistory for navigation

function Profile() {
  const [userData, setUserData] = useState({});
  const [bookings, setBookings] = useState([]);
  const [value, setValue] = useState(0); // For tabs
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);

      // Fetch user data
      axios
        .get(`https://renax-backend.onrender.com/user/getUserById/${decoded.id}`, {
          headers: { authorization: token },
        })
        .then((res) => {
          setUserData(res.data.Data);
        })
        .catch((err) => console.log(err));

      // Fetch user bookings
      axios
        .get(`https://renax-backend.onrender.com/booking/getBookingByUser/${decoded.id}`, {
          headers: { authorization: token },
        })
        .then((res) => {
          setBookings(res.data.data);
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  const handleStatusChange = (bookingId, newStatus) => {
    axios
      .patch(
        `https://renax-backend.onrender.com/booking/updateStatus/${bookingId}`,
        { status: newStatus },
        { headers: { authorization: token } }
      )
      .then((res) => {
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking._id === bookingId ? { ...booking, status: newStatus } : booking
          )
        );
      })
      .catch((err) => console.log(err));
  };

  // Filter bookings based on the selected tab
  const filteredBookings = bookings.filter((booking) => {
    if (value === 0) {
      // Active Bookings: Only pending and future confirmed bookings
      return booking.status === "pending";
    } else {
      // Past Bookings: Cancelled or confirmed but already past return date
      return (
        booking.status === "cancelled" ||
        booking.status === "confirmed" ||
        (booking.status === "confirmed" && new Date(booking.returnDate) < new Date())
      );
    }
  });

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "45vh",
          padding: "40px",
          backgroundImage: `url(https://duruthemes.com/demo/html/renax/dark/img/slider/1.jpg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
          },
        }}
      >
        <Container
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "11px",
              fontWeight: "200",
              color: "#f5b754",
              fontFamily: "Outfit",
              letterSpacing: "6px",
              marginBottom: "12px",
            }}
          >
            MY ACCOUNT
          </Typography>
          <Typography
            sx={{
              fontSize: "40px",
              fontFamily: "Outfit",
              fontWeight: "600",
              color: "white",
            }}
          >
            Personal <span style={{ color: "#f5b754" }}>Profile</span>
          </Typography>
        </Container>
      </Box>

      <Line />

      {/* Profile Content */}
      <Container sx={{ my: 8 }}>
        <Grid container spacing={4}>
          {/* Profile Summary Card - Always Visible */}
          <Grid item xs={12}>
            <Box
              sx={{
                backgroundColor: "#222222",
                borderRadius: "15px",
                padding: "30px",
                mb: 4,
                display: "flex",
                alignItems: "center",
                gap: 3,
                flexWrap: { xs: "wrap", md: "nowrap" },
              }}
            >
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  backgroundColor: "#f5b754",
                  fontSize: "36px",
                }}
              >
                {userData?.name?.[0]?.toUpperCase()}
              </Avatar>

              <Box sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "24px",
                    fontFamily: "Outfit",
                    fontWeight: "600",
                  }}
                >
                  {userData?.name}
                </Typography>
                <Typography
                  sx={{
                    color: "#999",
                    fontSize: "14px",
                    fontFamily: "Outfit",
                    mb: 1,
                  }}
                >
                  Member since {new Date(userData?.createdAt).toLocaleDateString()}
                </Typography>
                <Box sx={{ display: "flex", gap: 4, color: "#999", fontSize: "14px" }}>
                  <span>📧 {userData?.email}</span>
                  <span>📞 {userData?.phone}</span>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Tabs and Content */}
          <Grid item xs={12}>
            <Box sx={{ borderBottom: 1, borderColor: "#333", mb: 3 }}>
              <Tabs
                value={value}
                onChange={handleChange}
                sx={{
                  "& .MuiTab-root": {
                    color: "#999",
                    "&.Mui-selected": {
                      color: "#f5b754",
                    },
                  },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "#f5b754",
                  },
                }}
              >
                <Tab label="Active Bookings" />
                <Tab label="Past Bookings" />
              </Tabs>
            </Box>

            {/* Bookings Grid */}
            <Grid container spacing={3}>
              {filteredBookings.length === 0 ? (
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#999",
                        fontSize: "18px",
                        fontFamily: "Outfit",
                      }}
                    >
                      {value === 0
                        ? "You have no active bookings."
                        : "You have no past bookings."}
                    </Typography>
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
                      onClick={() => navigate("/cars")}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Grid>
              ) : (
                filteredBookings.map((booking) => (
                  <Grid item xs={12} md={6} key={booking._id}>
                    <Box
                      sx={{
                        backgroundColor: "#222222",
                        borderRadius: "15px",
                        overflow: "hidden",
                        transition: "transform 0.3s",
                        "&:hover": { transform: "translateY(-5px)" },
                      }}
                    >
                      {/* Car Image */}
                      <Box
                        sx={{
                          height: "200px",
                          overflow: "hidden",
                          position: "relative",
                        }}
                      >
                        <img
                          src={`https://renax-backend.onrender.com/public/images/${booking.car?.images[0]}`}
                          alt={booking.car?.name}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            backgroundColor: "#f5b754",
                            color: "#1b1b1b",
                            padding: "8px 16px",
                            borderBottomLeftRadius: "15px",
                            fontFamily: "Outfit",
                            fontWeight: "600",
                          }}
                        >
                          ${booking.totalPrice}
                        </Box>
                      </Box>

                      {/* Booking Details */}
                      <Box sx={{ p: 3 }}>
                        <Typography
                          sx={{
                            color: "white",
                            fontSize: "20px",
                            fontFamily: "Outfit",
                            fontWeight: "600",
                            mb: 2,
                          }}
                        >
                          {booking.car?.name}
                        </Typography>

                        <Grid container spacing={2} sx={{ mb: 2 }}>
                          <Grid item xs={6}>
                            <Typography sx={{ color: "#999", fontSize: "14px" }}>
                              Pickup
                            </Typography>
                            <Typography sx={{ color: "white", fontSize: "14px" }}>
                              {booking.pickupLocation}
                              <br />
                              {new Date(booking.pickupDate).toLocaleDateString()}
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography sx={{ color: "#999", fontSize: "14px" }}>
                              Drop-off
                            </Typography>
                            <Typography sx={{ color: "white", fontSize: "14px" }}>
                              {booking.dropLocation}
                              <br />
                              {new Date(booking.returnDate).toLocaleDateString()}
                            </Typography>
                          </Grid>
                        </Grid>

                        {/* Status and Actions */}
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              color:
                                booking.status === "confirmed"
                                  ? "#4CAF50"
                                  : booking.status === "cancelled"
                                  ? "#f44336"
                                  : "#f5b754",
                              fontSize: "14px",
                              textTransform: "capitalize",
                            }}
                          >
                            {booking.status}
                          </Typography>

                          {booking.status === "pending" && (
                            <Box sx={{ display: "flex", gap: 1 }}>
                              <Button
                                size="small"
                                variant="contained"
                                sx={{
                                  backgroundColor: "#f5b754",
                                  color: "#1b1b1b",
                                  "&:hover": { backgroundColor: "white" },
                                }}
                                onClick={() => handleStatusChange(booking._id, "confirmed")}
                              >
                                Get Car
                              </Button>
                              <Button
                                size="small"
                                variant="outlined"
                                sx={{
                                  borderColor: "#f5b754",
                                  color: "#f5b754",
                                  "&:hover": { borderColor: "white", color: "white" },
                                }}
                                onClick={() => handleStatusChange(booking._id, "cancelled")}
                              >
                                Cancel
                              </Button>
                            </Box>
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                ))
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Line />
      <Footer />
    </>
  );
}

export default Profile;