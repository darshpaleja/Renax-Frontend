import React from "react";
import { Box, Typography, Container } from "@mui/material";

function CarRentalWithDriver() {
  return (
    <>
      <Container
        sx={{
          marginTop: "20px",
          paddingRight: { lg: "80px", md: "40px", sm: "20px" },
        }}
      >
        {/* Section 1 - Electric Vehicle Rentals */}
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
            Eco-Friendly Electric Vehicle Rentals
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
            Our electric vehicle rental service offers a sustainable and
            eco-friendly transportation solution. Whether for daily commutes,
            business trips, or city tours, our EVs provide a clean and efficient
            way to travel while reducing your carbon footprint.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            With a focus on innovation and sustainability, we provide
            state-of-the-art electric vehicles equipped with the latest
            technology. Experience the future of transportation with our
            reliable and environmentally conscious fleet.
          </Typography>
        </Box>

        {/* Section 2 - Flexible Plans for EVs */}
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
            Flexible Plans for Electric Vehicles
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
            We offer customizable rental plans tailored to your needs. Whether
            you need an electric vehicle for a few hours, a day, or an extended
            period, our flexible options ensure you get the best value for your
            money.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            Our electric vehicles come with advanced features such as fast
            charging, long-range batteries, and smart connectivity. Enjoy a
            seamless and futuristic driving experience with our eco-friendly
            fleet.
          </Typography>
        </Box>

        {/* Section 3 - Dedicated Support for EV Rentals */}
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
            Dedicated Support for Electric Vehicle Rentals
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
            We provide 24/7 customer support and on-road assistance for all our
            electric vehicle rentals. Our team is always ready to help with
            charging station locations, vehicle troubleshooting, and any other
            queries you may have.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            Our dedicated account managers ensure a hassle-free rental
            experience. From booking to drop-off, we prioritize your convenience
            and satisfaction. Join us in driving towards a greener future with
            our electric vehicle rentals.
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default CarRentalWithDriver;