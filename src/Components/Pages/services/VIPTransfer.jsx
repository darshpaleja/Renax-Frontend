import React from "react";
import { Box, Typography, Container } from "@mui/material";

function VIPTransfer() {
  return (
    <>
      <Container
        sx={{
          marginTop: "20px",
          paddingRight: { lg: "80px", md: "40px", sm: "20px" },
        }}
      >
        {/* Section 1 - 24/7 Roadside Assistance */}
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
            Reliable 24/7 Roadside Assistance
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
            Our 24/7 roadside assistance service ensures that you’re never left
            stranded. Whether you’re facing a flat tire, a dead battery, or any
            other vehicle issue, our team is available around the clock to
            provide prompt and professional assistance.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            With a network of experienced technicians and service providers, we
            guarantee quick response times and reliable solutions to get you
            back on the road safely.
          </Typography>
        </Box>

        {/* Section 2 - Comprehensive Assistance Services */}
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
            Comprehensive Assistance Services
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
            From towing and jump-starts to fuel delivery and lockout services,
            our roadside assistance covers a wide range of emergencies. No
            matter the issue, we’re equipped to handle it efficiently and
            professionally.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            Our goal is to provide peace of mind, knowing that help is just a
            phone call away, no matter where or when you need it.
          </Typography>
        </Box>

        {/* Section 3 - Fast and Reliable Support */}
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
            Fast and Reliable Support
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
            We understand that emergencies can happen at any time. That’s why
            our roadside assistance team is available 24/7 to provide fast and
            reliable support. With just one call, you can count on us to resolve
            your issue quickly and efficiently.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            Our priority is your safety and convenience, ensuring that you’re
            never left waiting for help when you need it most.
          </Typography>
        </Box>

        {/* Section 4 - Nationwide Coverage */}
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
            Nationwide Coverage
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
            Our roadside assistance service is available nationwide, ensuring
            that you’re covered no matter where your travels take you. Whether
            you’re in the city or on a remote highway, our team is ready to
            assist you.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            With a vast network of service providers, we guarantee prompt and
            reliable assistance wherever you are. Travel with confidence,
            knowing that help is always within reach.
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default VIPTransfer;