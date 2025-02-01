import React from "react";
import { Box, Typography, Container } from "@mui/material";

function FleetLeasing() {
  return (
    <>
      <Container
        sx={{
          marginTop: "20px",
          paddingRight: { lg: "80px", md: "40px", sm: "20px" },
        }}
      >
        {/* Section 1 - Unique Cars for Every Occasion */}
        <Box sx={{ marginBottom: "30px" }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Outfit",
              fontWeight: "500",
              color: "white",
              marginBottom: "10px",
            }}
          >
            Unique Cars for Every Occasion
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
              marginBottom: "10px",
            }}
          >
            Discover our exclusive collection of unique cars, perfect for
            special occasions, luxury travel, or making a statement. From
            vintage classics to modern supercars, we offer a curated selection
            of vehicles that stand out from the crowd.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            Whether you're planning a wedding, a corporate event, or simply want
            to experience the thrill of driving a rare vehicle, our unique cars
            are sure to leave a lasting impression.
          </Typography>
        </Box>

        {/* Section 2 - A Diverse Collection of Unique Cars */}
        <Box sx={{ marginBottom: "30px" }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Outfit",
              fontWeight: "500",
              color: "white",
              marginBottom: "10px",
            }}
          >
            A Diverse Collection of Unique Cars
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
              marginBottom: "10px",
            }}
          >
            Our fleet includes a wide range of unique cars, from rare vintage
            models to high-performance supercars. Each vehicle is meticulously
            maintained to ensure top performance and reliability.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            Whether you're looking for a sleek sports car, a luxurious sedan, or
            a classic vintage ride, we have the perfect vehicle to match your
            style and needs.
          </Typography>
        </Box>

        {/* Section 3 - Customizable Rental Plans */}
        <Box sx={{ marginBottom: "30px" }}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Outfit",
              fontWeight: "500",
              color: "white",
              marginBottom: "10px",
            }}
          >
            Customizable Rental Plans
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
              marginBottom: "10px",
            }}
          >
            We offer flexible rental plans tailored to your needs. Whether you
            need a unique car for a day, a weekend, or an extended period, our
            plans provide the flexibility and convenience you require.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            Enjoy transparent pricing and hassle-free booking. Our team is here
            to ensure your experience with our unique cars is seamless and
            memorable.
          </Typography>
        </Box>

        {/* Section 4 - Exceptional Service and Support */}
        <Box>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Outfit",
              fontWeight: "500",
              color: "white",
              marginBottom: "10px",
            }}
          >
            Exceptional Service and Support
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
              marginBottom: "10px",
            }}
          >
            We pride ourselves on delivering outstanding customer service with
            every rental. Our dedicated team provides round-the-clock assistance,
            ensuring you have the support you need for a smooth and enjoyable
            experience.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            From booking to drop-off, we prioritize your convenience and
            satisfaction. Experience the thrill of driving a unique car with the
            peace of mind that comes from exceptional service.
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default FleetLeasing;