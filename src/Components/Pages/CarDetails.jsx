import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Navbar from "../Navbar";
import { BsPeople } from "react-icons/bs";
import { PiGearFineBold } from "react-icons/pi";
import { LuBaggageClaim } from "react-icons/lu";
import { FiCheck } from "react-icons/fi";
import Footer from "../Footer";
import Line from "../Home/Line";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Section5 from "../Home/Section5";
import bgImg from "../images/aboutIMG.jpg";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { PiXBold } from "react-icons/pi";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { jwtDecode } from "jwt-decode";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";


// import Footer from "../../Footer";

// Accordion style
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))({
  backgroundColor: "#222222", // Accordion background color
  color: "#999999", // Default text color
  borderRadius: "20px", // Rounded corners for the whole Accordion
  marginBottom: "5px", // Space between accordions

  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },

  // Apply borderRadius to AccordionSummary and AccordionDetails to ensure it appears initially
  "& .MuiAccordionSummary-root": {
    borderTopLeftRadius: "20px", // Rounded top left corner for summary
    borderTopRightRadius: "20px", // Rounded top right corner for summary
  },
  "& .MuiAccordionDetails-root": {
    borderBottomLeftRadius: "20px", // Rounded bottom left corner for details
    borderBottomRightRadius: "20px", // Rounded bottom right corner for details
  },
});

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        style={{
          fontSize: "14px", // Smaller arrow size
        }}
      />
    }
    {...props}
  />
))({
  backgroundColor: "#222222",
  flexDirection: "row",
  padding: "18px",
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  fontFamily: "Outfit, sans-serif", // Explicitly set Outfit font
  fontSize: "14px",
  fontWeight: "400",
  [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
    color: "#f5b754", // Arrow color when closed
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      color: "#1b1b1b", // Arrow color when expanded
      transform: "rotate(90deg)", // Rotate arrow on expand
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: "8px",
    color: "#FFF",
  },
  "&.Mui-expanded": {
    backgroundColor: "#F5B754",
    [`& .${accordionSummaryClasses.content}`]: {
      color: "#1b1b1b",
    },
  },
});

const AccordionDetails = styled(MuiAccordionDetails)({
  padding: "20px",
  color: "#999999",
  fontFamily: "Outfit, sans-serif", // Explicitly set Outfit font
  fontSize: "14px",
  fontWeight: "300",
  lineHeight: "1.95em",
});

const DarshTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Outfit",
  fontSize: "14px",
  fontWeight: "500",
  lineHeight: "14px",
}));

function CarDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate()
  const [expanded, setExpanded] = useState("");
  const [open, setOpen] = useState(false);

  const [openImg, setOpenImg] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [carData, setCarData] = useState();
  const [allCars, setAllCars] = useState([]);
  const [carDetails, setCarDetails] = useState({
    passengers: "",
    transmission: "",
    luggage: "",
    airCondition: "",
    minimumAge: 18,
  });
  const carId = useParams().id;
  const token = localStorage.getItem("token");
  const [showConfirmMsg, setShowConfirmMsg] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userId, setUserId] = useState(null);
  const [formData, setFormData] = useState({
    userId: userData?._id || "",
    fullName: userData?.name || "",
    email: userData?.email || "",
    phone: userData?.phone || "",
    car: "",
    pickupLocation: "",
    pickupDate: "",
    dropLocation: "",
    returnDate: "",
    additionalNote: "",
  });
  const [bookingData , setBookingData] = useState({})

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken);
      } catch (error) {
        console.error("Invalid Token:", error);
      }
    }
  }, [token]);
  const id = userId ? userId.id : null;

  // Fetch User Details
  const fetchUserData = () => {
    if (id) {
      axios
        .get(`https://renax-backend.onrender.com/user/getUserById/${id}`, {
          headers: {
            authorization: token,
          },
        })
        .then((res) => {
          console.log(res.data.Data._id, "res");
          setUserData(res.data.Data);
          setFormData((prev) => ({
            ...prev,
            car: carId,
            userId: res.data.Data?._id || "",
            fullName: res.data.Data?.name || "",
            email: res.data.Data?.email || "",
            phone: res.data.Data?.phone || "",
          }));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // Fetch Car Detail
  const fetCarDetail = () => {
    axios
      .get(`https://renax-backend.onrender.com/cars/getCar/${carId}`, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setCarDetails({
          passengers: res.data.data.passengers,
          transmission: res.data.data.transmission,
          luggage: res.data.data.luggage,
          airCondition: res.data.data.airCondition,
          minimumAge: 18,
        });
        setCarData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Fetch All Car Detail
  const fetchCarData = () => {
    axios
      .get("https://renax-backend.onrender.com/cars/getCars", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setAllCars(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetCarDetail();
    fetchCarData();
  }, []);

  const handleClickOpen = () => {
    if (!userData) {
      fetchUserData();
    }
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setOpenImg(true);
  };

  const handleCloseImg = () => {
    setOpenImg(false);
  };

  const handleInpputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const iconMapping = {
    passengers: <BsPeople />,
    transmission: <PiGearFineBold />,
    luggage: <LuBaggageClaim />,
    airCondition: <BsPeople />,
    minimumAge: <BsPeople />,
  };

  // Booking Form Submit
  const handleBookingFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://renax-backend.onrender.com/booking/addBooking", formData, {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
        setBookingData(res.data.data)
        setShowConfirmMsg(true);

        setTimeout(() => {
          setShowConfirmMsg(false);
          navigate("/profile");
        }, 4000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
            backgroundImage: `url(https://renax-backend.onrender.com/public/images/${carData?.images[1]})`,
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
              textTransform: "uppercase",
            }}
          >
            Luxury Cars
          </Box>

          <Box
            sx={{
              fontSize: "40px",
              fontFamily: "Outfit",
              fontWeight: "600",
            }}
          >
            {carData?.name}
          </Box>
        </Box>
      </Box>

      {/* Main container wrapper for consistent padding */}
      <Container
        sx={{
          padding: "80px 40px",
          maxWidth: "1200px",
        }}
      >
        {/* Car Details Grid */}
        <Grid container spacing={4}>
          {/* Left Side - Service Details */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                padding: "20px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontSize: "26px",
                  fontWeight: "500",
                  color: "#fff",
                }}
              >
                General Information
              </Typography>

              {/* car info */}
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontSize: "14px",
                  fontWeight: "300",
                  color: "#999",
                  marginTop: "10px",
                  lineHeight: "1.95em",
                }}
              >
                {carData?.info}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <ul style={{ padding: "0" }}>
                  <li style={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#222",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#f5b754",
                        fontWeight: "300",
                        fontSize: "17px",
                      }}
                    >
                      <FiCheck />
                    </Box>
                    <Box
                      sx={{
                        color: "#999999",
                        fontSize: "13px",
                        fontWeight: "350",
                        marginLeft: "10px",
                        fontFamily: "Outfit",
                      }}
                    >
                      24/7 Roadside Assistance
                    </Box>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#222",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#f5b754",
                        fontWeight: "300",
                        fontSize: "17px",
                      }}
                    >
                      <FiCheck />
                    </Box>
                    <Box
                      sx={{
                        color: "#999999",
                        fontSize: "13px",
                        fontWeight: "350",
                        marginLeft: "10px",
                        fontFamily: "Outfit",
                      }}
                    >
                      Free Cancellation & Return
                    </Box>
                  </li>
                  <li
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                        backgroundColor: "#222",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#f5b754",
                        fontWeight: "300",
                        fontSize: "17px",
                      }}
                    >
                      <FiCheck />
                    </Box>
                    <Box
                      sx={{
                        color: "#999999",
                        fontSize: "13px",
                        fontWeight: "350",
                        marginLeft: "10px",
                        fontFamily: "Outfit",
                      }}
                    >
                      Rent Now Pay When You Arrive
                    </Box>
                  </li>
                </ul>
              </Box>
            </Box>
          </Grid>

          {/* Right Side - Car Details */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                flexBasis: "30%",
                borderRadius: "15px",
                overflow: "hidden",
                padding: { xs: "30px", md: "0px" },
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
                    fontSize: "32px",
                    fontWeight: "600",
                    color: "#1b1b1b",
                    lineHeight: "1.2",
                  }}
                >
                  ${carData?.price}
                  <span
                    style={{
                      fontSize: "14px",
                      fontFamily: "Outfit",
                      color: "#1b1b1b",
                      fontWeight: "300",
                    }}
                  >
                    / rent per day
                  </span>
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
                {Object.entries(carDetails).map(([key, value]) => (
                  <Box
                    key={key}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "30px", // Add space between rows
                    }}
                  >
                    {/* Left Side - Icon and Label */}
                    <Box
                      sx={{
                        fontFamily: "Outfit",
                        fontSize: "14px",
                        fontWeight: "300",
                        color: "#999999",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          marginRight: "10px",
                          color: "#f5b754",
                          height: "35px",
                          width: "35px",
                          backgroundColor: "#333",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {iconMapping[key] || "?"}
                      </span>
                      <span
                        style={{
                          fontFamily: "Outfit",
                          fontSize: "14px",
                          fontWeight: "400",
                          color: "#999999",
                        }}
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                      </span>
                      {/* Capitalize label */}
                    </Box>
                    {/* Right Side - Value */}
                    <Box
                      sx={{
                        fontFamily: "Outfit",
                        fontSize: "14px",
                        fontWeight: "300",
                        color: "#FFF",
                      }}
                    >
                      {value}
                    </Box>
                  </Box>
                ))}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#f5b754",
                      color: "#1b1b1b",
                      borderRadius: "25px",
                      width: "80%",
                      padding: "12px 0",
                      fontSize: { md: "14px", xs: "16px", sm: "16px" },
                      fontFamily: "Outfit",
                      fontWeight: "300",
                      textTransform: "capitalize",
                      transition: "all 0.4s",
                      marginTop: "20px",
                      "&:hover": {
                        backgroundColor: "white",
                      },
                    }}
                    onClick={handleClickOpen}
                  >
                    Rent Now
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Image Gallery Section */}
        <Box sx={{ marginTop: "40px" }}>
          <Typography
            sx={{
              fontFamily: "Outfit",
              fontSize: "26px",
              fontWeight: "500",
              color: "#fff",
              marginBottom: "20px",
            }}
          >
            Image Gallery
          </Typography>
          <Grid container spacing={2}>
            {carData?.images?.map((image, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    overflow: "hidden",
                    borderRadius: "15px",
                    position: "relative", // Ensures proper scaling context
                    "&:hover img": { transform: "scale(1.04)" },
                  }}
                  onClick={() =>
                    handleImageClick(
                      `https://renax-backend.onrender.com/public/images/${image}`
                    )
                  }
                >
                  <img
                    src={`https://renax-backend.onrender.com/public/images/${image}`}
                    alt={`Car Image ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "208px", // Set a fixed height
                      objectFit: "cover", // Ensures the image covers the container proportionally
                      transition:
                        "transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)", // Smooth scaling with bezier curve
                      cursor: "pointer", // To indicate it's clickable
                      display: "block", // Prevents any inline rendering artifacts
                      backfaceVisibility: "hidden", // Prevents flickering during transition
                    }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Accordion Section */}
        <Box sx={{ marginTop: "40px" }}>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <DarshTypography>
                      <span
                        style={{
                          color: expanded === "panel1" ? "#1b1b1b" : "#f5b754",
                          marginRight: "10px",
                          fontWeight: "500",
                          fontSize: "16px",
                          fontFamily: "Outfit",
                        }}
                      >
                        1.
                      </span>
                      Contract and Annexes
                    </DarshTypography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <DarshTypography
                      sx={{ lineHeight: "1.95em", fontWeight: "300" }}
                    >
                      In addition to the car rental contract to be signed at the
                      time of delivery, a credit card is required from our
                      individual customers. We request our commercial customers
                      to submit their company documents (tax plate, signature
                      slip, ID photocopy).
                    </DarshTypography>
                  </AccordionDetails>
                </Accordion>
              </Grid>

              <Grid item xs={12} md={8}>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <DarshTypography>
                      <span
                        style={{
                          color: expanded === "panel2" ? "#1b1b1b" : "#f5b754",
                          marginRight: "10px",
                          fontWeight: "500",
                          fontSize: "16px",
                          fontFamily: "Outfit",
                        }}
                      >
                        2.
                      </span>
                      Driving License and Age
                    </DarshTypography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <DarshTypography
                      sx={{ lineHeight: "1.95em", fontWeight: "300" }}
                    >
                      The tenant must be 25 years of age and have a 5-year local
                      or valid international driver's license for group A, B, C,
                      D vehicles at the time of the rental agreement.
                    </DarshTypography>
                  </AccordionDetails>
                </Accordion>
              </Grid>

              <Grid item xs={12} md={8}>
                <Accordion
                  expanded={expanded === "panel3"}
                  onChange={handleChange("panel3")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <DarshTypography>
                      <span
                        style={{
                          color: expanded === "panel3" ? "#1b1b1b" : "#f5b754",
                          marginRight: "10px",
                          fontWeight: "500",
                          fontSize: "16px",
                          fontFamily: "Outfit",
                        }}
                      >
                        3.
                      </span>
                      Prices
                    </DarshTypography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <DarshTypography
                      sx={{ lineHeight: "1.95em", fontWeight: "300" }}
                    >
                      Prices include maintenance and insurance guarantee against
                      third parties (within legal policy limits). 18% VAT (value
                      added tax) is not included. Fuel belongs to the renter.
                      Chauffeur driven service and translator guide are
                      available upon request.
                    </DarshTypography>
                  </AccordionDetails>
                </Accordion>
              </Grid>

              <Grid item xs={12} md={8}>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <DarshTypography>
                      <span
                        style={{
                          color: expanded === "panel4" ? "#1b1b1b" : "#f5b754",
                          marginRight: "10px",
                          fontWeight: "500",
                          fontSize: "16px",
                          fontFamily: "Outfit",
                        }}
                      >
                        4.
                      </span>
                      Payments
                    </DarshTypography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <DarshTypography
                      sx={{ lineHeight: "1.95em", fontWeight: "300" }}
                    >
                      The total rental fee is collected at the time of rental.
                      The shortest rental period is 72 hours, and in case of
                      delay, 1/3 of the fee is charged for each additional hour.
                      Delays exceeding 3 hours in total are calculated as a full
                      day. A deposit is required from a valid credit card.
                    </DarshTypography>
                  </AccordionDetails>
                </Accordion>
              </Grid>

              <Grid item xs={12} md={8}>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <DarshTypography>
                      <span
                        style={{
                          color: expanded === "panel5" ? "#1b1b1b" : "#f5b754",
                          marginRight: "10px",
                          fontWeight: "500",
                          fontSize: "16px",
                          fontFamily: "Outfit",
                        }}
                      >
                        5.
                      </span>
                      Delivery
                    </DarshTypography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <DarshTypography
                      sx={{ lineHeight: "1.95em", fontWeight: "300" }}
                    >
                      Delivery is free of charge where our Rent a car company is
                      located. Delivery in these cities is possible with prior
                      notice; hotel, workplace, station, port etc. It can be
                      done in places. For vehicle deliveries and returns in
                      cities where our office is not located, a delivery fee of
                      0.2 Euro/km is applied, starting from the rented location.
                    </DarshTypography>
                  </AccordionDetails>
                </Accordion>
              </Grid>

              <Grid item xs={12} md={8}>
                <Accordion
                  expanded={expanded === "panel6"}
                  onChange={handleChange("panel6")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <DarshTypography>
                      <span
                        style={{
                          color: expanded === "panel6" ? "#1b1b1b" : "#f5b754",
                          marginRight: "10px",
                          fontWeight: "500",
                          fontSize: "16px",
                          fontFamily: "Outfit",
                        }}
                      >
                        6.
                      </span>
                      Traffic Fines
                    </DarshTypography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <DarshTypography
                      sx={{ lineHeight: "1.95em", fontWeight: "300" }}
                    >
                      Traffic fines toll and illegal toll fees belong to the
                      customer. If the vehicles are detained by traffic, this
                      period is included in the rental period. In necessary
                      cases, we may change these conditions and information and
                      the vehicle type specified in the reservation without
                      prior notice. Our vehicles cannot be taken abroad.
                    </DarshTypography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12} md={8}>
                <Accordion
                  expanded={expanded === "panel7"}
                  onChange={handleChange("panel7")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <DarshTypography>
                      <span
                        style={{
                          color: expanded === "panel7" ? "#1b1b1b" : "#f5b754",
                          marginRight: "10px",
                          fontWeight: "500",
                          fontSize: "16px",
                          fontFamily: "Outfit",
                        }}
                      >
                        7.
                      </span>
                      Vehicle Return
                    </DarshTypography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <DarshTypography
                      sx={{ lineHeight: "1.95em", fontWeight: "300" }}
                    >
                      The vehicle must be returned to the same location where it
                      was rented. If the vehicle is returned to a different
                      location, a fee of 0.2 Euro/km is applied, starting from
                      the rented location.
                    </DarshTypography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Container>

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
                value={formData.car} // This controls the selected value
                onChange={handleInpputChange}
                className="form-input"
                style={{ padding: "20px 25px" }}
              >
                <option value="">Select a Car</option>
                {allCars.map((car) => (
                  <option key={car._id} value={car._id}>
                    {car.name}
                  </option>
                ))}
              </select>
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
                id="pickupLocation"
                name="pickupLocation"
                value={formData.pickupLocation} // This controls the selected value
                onChange={handleInpputChange}
                className="form-input"
                style={{ padding: "20px 24px" }}
              >
                <option value="">Pick Up Location</option>
                <option value="Dubai">Dubai</option>
                <option value="Abu Dhabi">Abu Dhabi</option>
                <option value="Sharjah">Sharjah</option>
                <option value="Alain">Alain</option>
              </select>
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
                id="dropLocation"
                name="dropLocation"
                value={formData.dropLocation} // This controls the selected value
                onChange={handleInpputChange}
                className="form-input"
                style={{ padding: "20px 24px" }}
              >
                <option value="">Pick Up Location</option>
                <option value="Dubai">Dubai</option>
                <option value="Abu Dhabi">Abu Dhabi</option>
                <option value="Sharjah">Sharjah</option>
                <option value="Alain">Alain</option>
              </select>
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
            onClick={handleBookingFormSubmit}
          >
            Rent Now
          </Button>
        </DialogContent>
      </Dialog>

      {/* Modal for Fullscreen Image */}
      <Dialog
        open={openImg}
        onClose={handleCloseImg}
        fullWidth
        maxWidth="xl"
        sx={{ height: "100vh", overflow: "hidden" }}
      >
        <DialogContent sx={{ padding: 0, overflow: "hidden" }}>
          <img
            src={selectedImage}
            alt="Full Screen"
            style={{
              width: "100%",
              height: "100%", // Full-screen height
              objectFit: "cover", // Ensures image fits within the screen without distortion
              display: "block", // Remove any unwanted margin or padding around the image
            }}
            onClick={handleCloseImg}
          />
        </DialogContent>
      </Dialog>

      {/* Booking Confirmation Dialog */}
      <Dialog
        open={showConfirmMsg}
        sx={{
          "& .MuiDialog-paper": {
            borderRadius: "15px",
            backgroundColor: "#222222",
            maxWidth: "400px",
            margin: "20px",
          },
        }}
      >
        <DialogContent
          sx={{
            textAlign: "center",
            padding: "40px",
            color: "#fff",
          }}
        >
          <CheckCircleOutlineIcon
            sx={{
              fontSize: "60px",
              color: "#F5B754",
              marginBottom: "20px",
            }}
          />
          <Typography
            sx={{
              fontSize: "24px",
              fontFamily: "Outfit",
              fontWeight: "500",
              marginBottom: "10px",
            }}
          >
            Booking Confirmed!
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Outfit",
              color: "#999",
              marginBottom: "10px",
            }}
          >
            Your booking has been successfully confirmed.
          </Typography>

          {/* Booking Creation Date and Time */}
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Outfit",
              color: "#fff",
              marginTop: "10px",
            }}
          >
            <strong>Created On:</strong>{" "}
            {new Date(bookingData?.createdAt).toLocaleString()}
          </Typography>

          {/* Redirection Message */}
          <Typography
            sx={{
              fontSize: "14px",
              fontFamily: "Outfit",
              color: "#F5B754",
              marginTop: "10px",
            }}
          >
            Redirecting to your profile...
          </Typography>
        </DialogContent>
      </Dialog>

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
      <Line />
      <Footer />

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

export default CarDetails;
