import React from "react";
import { Box, Typography, Container } from "@mui/material";

function CorporateCarRental() {
  return (
    <>
      <Container
        sx={{
          marginTop: "20px",
          paddingRight: { lg: "80px", md: "40px", sm: "20px" } ,
          
        }}
      >
        {/* Section 1 */}
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
            Premium Corporate Travel Solutions
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
            Our corporate car rental services are designed for professionals who
            demand efficiency and class. Whether it’s transporting your team to
            meetings or providing airport pickups for executives, we ensure a
            smooth and luxurious experience every time.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            With years of experience serving corporate clients, we understand
            the importance of punctuality, reliability, and professionalism. Our
            dedicated team ensures every journey meets your expectations.
          </Typography>
        </Box>

        {/* Section 2 */}
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
            A Wide Range of Vehicles
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
            Choose from our extensive fleet of vehicles, including sedans, SUVs,
            and luxury cars. Each vehicle is meticulously maintained to ensure
            reliability and comfort, giving your business the professional image
            it deserves.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            Our fleet is equipped with modern amenities to enhance your travel
            experience. From spacious interiors to advanced safety features, we
            prioritize your comfort and well-being.
          </Typography>
        </Box>

        {/* Section 3 */}
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
            Affordable Plans with Unmatched Service
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
            We offer competitive pricing without compromising on quality. Our
            rental plans are tailored to suit your budget and travel needs.
            Enjoy peace of mind with 24/7 customer support and on-road
            assistance.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            Our transparent pricing model ensures no hidden costs. Whether you
            need a short-term rental or a long-term leasing option, we’ve got
            you covered with flexible plans designed for your convenience.
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default CorporateCarRental;
