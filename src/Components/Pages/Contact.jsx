import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import contactImg from "../images/contactUsImg.jpg";
import { TbMailFilled } from "react-icons/tb";
import { TfiLocationPin } from "react-icons/tfi";
import { PiClock } from "react-icons/pi";
import { IoIosCall } from "react-icons/io";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { PiXBold } from "react-icons/pi";

import bgImg from "../images/aboutIMG.jpg";
import Section5 from "../Home/Section5";
import Navbar from "../Navbar";
import Section10 from "../Home/Section10";
import Footer from "../Footer";
// import jwt from "jsonwebtoken"
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserData(decodedToken);
      } catch (error) {
        console.error("Invalid Token:", error);
      }
    }
  }, [token]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    car: "",
    pickupLocation: "",
    pickupDate: "",
    dropLocation: "",
    returnDate: "",
    additionalNote: "",
  });

  const [contactFormData, setContactFormData] = useState({
    userId: userData?.id || "",
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInpputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleContactInputChange = (e) => {
    const { name, value } = e.target;
    setContactFormData((prevData) => ({
      ...prevData,
      userId: userData?.id || "",
      [name]: value,
    }));
  };

  // Contact Form Submit
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    axios.post("https://renax-backend.onrender.com/contact/send" , contactFormData , {
      headers : {
        authorization : token
      }
    })
    .then((res) => {
      setContactFormData({
        userId: userData?.id || "",
        name: "",
        email: "",
        number: "",
        subject: "",
        message: "",
      });
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <Navbar />
      {/* Header IMG */}
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
            backgroundImage: `url(${contactImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.3,
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
              textTransform: "uppercase",
            }}
          >
            Get In Touch
          </Box>

          <Box
            sx={{
              fontSize: "40px",
              fontFamily: "Outfit",
              fontWeight: "600",
            }}
          >
            Contact
            <span style={{ color: "#f5b754" }}> Us</span>
          </Box>
        </Box>
      </Box>

      {/* upper animation cards */}
      <Container
        sx={{
          marginTop: "-120px",
          position: "relative",
          zIndex: "20",
          marginBottom: "60px",
          padding: "0px 40px !important",
          maxWidth: "1200px !important",
        }}
      >
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              className="card-inner-container"
              sx={{
                backgroundColor: "#222222",
                padding: "60px 35px",
                width: "100%",
                borderRadius: "20px",
                boxShadow: 2,
                transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "translateY(-20px)",
                  backgroundColor: "#f5b754",
                  "& .icon": { color: "#1b1b1b" }, // Change icon color on hover
                  "& .title": { color: "#1b1b1b" }, // Change title color on hover
                  "& .email": { color: "#1b1b1b" }, // Change email color on hover
                },
              }}
            >
              {/* Icon */}
              <Box
                className="icon"
                sx={{
                  fontSize: "40px",
                  color: "#f5b754", // Default color
                  transition: "color 0.3s ease",
                }}
              >
                <TbMailFilled />
              </Box>

              {/* Title */}
              <Box
                className="title"
                sx={{
                  marginTop: "5px",
                  fontSize: "21px",
                  fontWeight: 700,
                  fontFamily: "Outfit",
                  color: "#fff", // Default color
                  transition: "color 0.3s ease",
                }}
              >
                Email Us
              </Box>

              {/* Email */}
              <Box
                className="email"
                sx={{
                  marginTop: "10px",
                  fontSize: "14px",
                  fontWeight: 200,
                  color: "#999", // Default color
                  transition: "color 0.3s ease",
                  fontFamily: "Outfit",
                }}
              >
                info@renax.com
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              className="card-inner-container"
              sx={{
                backgroundColor: "#222222",
                // padding: { xs: "60px 250px 60px 30px", md: "60px 140px 60px 30px"}, // Added proper padding
                padding: "60px 40px",
                width: "100%",
                borderRadius: "20px",
                boxShadow: 2,
                transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "translateY(-20px)",
                  backgroundColor: "#f5b754",
                  "& .icon": { color: "#1b1b1b" }, // Change icon color on hover
                  "& .title": { color: "#1b1b1b" }, // Change title color on hover
                  "& .email": { color: "#1b1b1b" }, // Change email color on hover
                },
              }}
            >
              {/* Icon */}
              <Box
                className="icon"
                sx={{
                  fontSize: "40px",
                  color: "#f5b754", // Default color
                  transition: "color 0.3s ease",
                }}
              >
                <TfiLocationPin />
              </Box>

              {/* Title */}
              <Box
                className="title"
                sx={{
                  marginTop: "7px",
                  fontSize: "21px",
                  fontWeight: 700,
                  fontFamily: "Outfit",
                  color: "#fff", // Default color
                  transition: "color 0.3s ease",
                }}
              >
                Our Address
              </Box>

              {/* Email */}
              <Box
                className="email"
                sx={{
                  marginTop: "10px",
                  fontSize: "14px",
                  fontWeight: 200,
                  color: "#999", // Default color
                  transition: "color 0.3s ease",
                  fontFamily: "Outfit",
                }}
              >
                Dubai, Water Tower, Office 123
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              className="card-inner-container"
              sx={{
                backgroundColor: "#222222",
                // padding: { xs: "60px 250px 60px 30px", md: "60px 140px 60px 30px"}, // Added proper padding
                padding: "60px 40px",
                width: "100%",
                borderRadius: "20px",
                boxShadow: 2,
                transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "translateY(-20px)",
                  backgroundColor: "#f5b754",
                  "& .icon": { color: "#1b1b1b" }, // Change icon color on hover
                  "& .title": { color: "#1b1b1b" }, // Change title color on hover
                  "& .email": { color: "#1b1b1b" }, // Change email color on hover
                },
              }}
            >
              {/* Icon */}
              <Box
                className="icon"
                sx={{
                  fontSize: "40px",
                  color: "#f5b754", // Default color
                  transition: "color 0.3s ease",
                }}
              >
                <PiClock />
              </Box>

              {/* Title */}
              <Box
                className="title"
                sx={{
                  marginTop: "5px",
                  fontSize: "21px",
                  fontWeight: 700,
                  fontFamily: "Outfit",
                  color: "#fff", // Default color
                  transition: "color 0.3s ease",
                }}
              >
                Opening Hours
              </Box>

              {/* Email */}
              <Box
                className="email"
                sx={{
                  marginTop: "10px",
                  fontSize: "14px",
                  fontWeight: 200,
                  color: "#999", // Default color
                  transition: "color 0.3s ease",
                  fontFamily: "Outfit",
                }}
              >
                Mon-Sun: 8 AM - 7 PM
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              className="card-inner-container"
              sx={{
                backgroundColor: "#222222",
                // padding: { xs: "60px 250px 60px 30px", md: "60px 140px 60px 30px"}, // Added proper padding
                padding: "60px 40px",
                width: "100%",
                borderRadius: "20px",
                boxShadow: 2,
                transition: "transform 0.3s ease, background-color 0.3s ease",
                backgroundColor: "#f5b754",
                "&:hover": {
                  transform: "translateY(-20px)",
                },
              }}
            >
              {/* Icon */}
              <Box
                className="icon"
                sx={{
                  fontSize: "35px",
                  color: "#1b1b1b", // Default color
                  transition: "color 0.3s ease",
                }}
              >
                <IoIosCall />
              </Box>

              {/* Title */}
              <Box
                className="title"
                sx={{
                  marginTop: "10px",
                  fontSize: "21px",
                  fontWeight: 700,
                  fontFamily: "Outfit",
                  color: "#1b1b1b", // Default color
                  transition: "color 0.3s ease",
                }}
              >
                Call Us
              </Box>

              {/* Email */}
              <Box
                className="email"
                sx={{
                  marginTop: "10px",
                  fontSize: "16px",
                  fontWeight: 200,
                  color: "#1b1b1b", // Default color
                  transition: "color 0.3s ease",
                  fontFamily: "Outfit",
                }}
              >
                +971 52-333-4444
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Form Section */}
      <Container
        sx={{
          padding: "80px 40px !important",
          maxWidth: "1200px !important",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontFamily: "Outfit",
                textAlign: "center",
                color: "#fff",
                fontSize: "21px",
                fontWeight: "600",
                lineHeight: "1.23em",
                marginBottom: "20px",
              }}
            >
              {" "}
              Get In Touch
            </Typography>

            <Grid container spacing={2}>
              {/* userId inpput */}
              <input
                type="hidden"
                id="fullName"
                name="userId"
                value={contactFormData.userId}
                onChange={handleContactInputChange}
                placeholder="Your Name*"
                className="form-input"
              />
              {/* <Grid item xs={12} sm={6}>
              </Grid> */}
              {/* 1 row */}
              <Grid item xs={12} sm={6}>
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  value={contactFormData.name}
                  onChange={handleContactInputChange}
                  placeholder="Your Name*"
                  className="form-input"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={contactFormData.email}
                  onChange={handleContactInputChange}
                  placeholder="Your Email*"
                  className="form-input"
                />
              </Grid>
              {/* 2 row */}
              <Grid item xs={12} sm={6}>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={contactFormData.number}
                  onChange={handleContactInputChange}
                  placeholder="Your Number*"
                  className="form-input"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={contactFormData.subject}
                  onChange={handleContactInputChange}
                  placeholder="subject*"
                  className="form-input"
                />
              </Grid>
              <Grid item xs={12}>
                <Box
                  sx={{
                    gap: "20px",
                    marginBottom: "20px",
                    "& textarea": {
                      width: { sm: "90%", xs: "80%" },
                      minWidth: { sm: "94%", xs: "90%" },
                      display: "block",
                      flex: "1 1 auto",
                    },
                  }}
                >
                  <textarea
                    id="message"
                    name="message"
                    value={contactFormData.message}
                    onChange={handleContactInputChange}
                    placeholder="Message*"
                    className="form-input"
                    rows={4}
                  />
                </Box>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f5b754",
                color: "#1b1b1b",
                borderRadius: "25px",
                padding: {
                  xs: "19px 35px",
                },
                fontSize: "14px",
                fontFamily: "Outfit",
                fontWeight: "300",
                textTransform: "capitalize",
                transition: "transform 0.4s",
                "&:hover": {
                  backgroundColor: "white",
                },
              }}
              onClick={handleContactSubmit}
            >
              Send Message
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ paddingLeft: { md: "100px !important" } }}
          >
            <Typography
              sx={{
                fontFamily: "Outfit",
                textAlign: "center",
                color: "#fff",
                fontSize: "21px",
                fontWeight: "600",
                lineHeight: "1.23em",
                marginBottom: "20px",
              }}
            >
              Location
            </Typography>
            <Box
              sx={{
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: 2,
                width: "100%",
                height: "300px", 
                filter: "grayscale(100%)",
                borderRadius: "20px",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" 
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Section5 */}
      <Box sx={{ marginTop: "40px" }}>
        <Section5
          bgImg={bgImg}
          title1="Rent Your Car"
          title="Interested in Renting?"
          description="Don't hesitate and send us a message."
          buttonText="Rent Now"
          onClick={handleClickOpen}
        />
      </Box>

      <Section10 />
      <Footer></Footer>

      {/* Modal for Booking Form */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        scroll="body"
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "25px",
          },
        }}
      >
        <DialogTitle
          sx={{
            backgroundColor: "#F5B754",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "25px 30px",
            color: "#1b1b1b",
          }}
        >
          <span
            style={{
              fontFamily: "Outfit",
              fontSize: "24px",
              fontWeight: "600",
              color: "#1b1b1b",
            }}
          >
            Booking Form
          </span>
          <Button onClick={handleClose} sx={{ color: "#1b1b1b" }}>
            <PiXBold size={25} />
          </Button>
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: "#1b1b1b",
            padding: "60px 40px !important",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInpputChange}
                placeholder="Full Name*"
                className="form-input"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInpputChange}
                placeholder="Email*"
                className="form-input"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInpputChange}
                placeholder="Phone*"
                className="form-input"
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                "& select": {
                  width: "100%",
                  minWidth: "100%",
                  display: "block",
                  flex: "1 1 auto",
                },
              }}
            >
              <select
                id="car"
                name="car"
                value={formData.car}
                onChange={handleInpputChange}
                className="form-input"
              >
                <option value="">Choose a car</option>
                <option value="Car 1">Car 1</option>
                <option value="Car 2">Car 2</option>
              </select>
            </Grid>

            <Grid item xs={12} md={6}>
              <input
                type="text"
                id="pickupLocation"
                name="pickupLocation"
                value={formData.pickupLocation}
                onChange={handleInpputChange}
                placeholder="Pick Up Location*"
                className="form-input"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <input
                type="date"
                id="pickupDate"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleInpputChange}
                onClick={(e) => e.target.showPicker()}
                className="form-input"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <input
                type="text"
                id="dropLocation"
                name="dropLocation"
                value={formData.dropLocation}
                onChange={handleInpputChange}
                placeholder="Drop Location*"
                className="form-input"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <input
                type="date"
                id="returnDate"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleInpputChange}
                onClick={(e) => e.target.showPicker()}
                className="form-input"
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={12}
              sx={{
                "& textarea": {
                  width: "100%",
                  minWidth: "100%",
                  display: "block",
                  flex: "1 1 auto",
                },
              }}
            >
              <textarea
                id="additionalNote"
                name="additionalNote"
                value={formData.additionalNote}
                onChange={handleInpputChange}
                placeholder="Additional Note"
                className="form-input"
                rows={4}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f5b754",
              color: "#1b1b1b",
              borderRadius: "25px",
              width: "100%",
              padding: "12px 0",
              fontSize: "14px",
              fontFamily: "Outfit",
              fontWeight: "300",
              textTransform: "capitalize",
              marginTop: "25px",
              "&:hover": {
                backgroundColor: "white",
              },
            }}
          >
            Rent Now
          </Button>
        </DialogContent>
      </Dialog>

      <style>
        {`
          .form-input {
            width: 100% !important;
            min-width: 100% !important;
            display: block !important;
            box-sizing: border-box !important;
          }
        `}
      </style>
    </>
  );
}

export default Contact;
