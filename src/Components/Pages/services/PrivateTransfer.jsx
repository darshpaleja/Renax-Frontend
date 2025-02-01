import React from "react";
import { Box, Typography, Container } from "@mui/material";

function PrivateTransfer() {
  return (
    <>
      <Container
        sx={{
          marginTop: "20px",
          paddingRight: { lg: "80px", md: "40px", sm: "20px" },
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
            24/7 Customer Care for Your Peace of Mind
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
            Our dedicated customer support team is available 24/7 to assist you
            with any inquiries, booking modifications, or last-minute requests.
            We prioritize your convenience and are always here to help.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            Whether you need assistance with a reservation, have a special
            request, or require immediate support during your journey, our team
            is ready to provide prompt and professional service at any time.
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
            Instant Assistance Anytime, Anywhere
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
            We understand that travel plans can change unexpectedly. That’s why
            our support team is just a call or message away, ensuring you get
            the help you need without any delay.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            From last-minute changes to urgent inquiries, our 24/7 service is
            designed to offer quick solutions, giving you peace of mind during
            your journey.
          </Typography>
        </Box>

        {/* Section 3 */}
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
            Personalized Support for Every Traveler
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
            Our customer care team is committed to understanding your unique
            travel needs and providing tailored solutions. Whether it's a
            business trip or a leisure vacation, we are here to support you
            every step of the way.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            With multilingual support and a customer-first approach, we ensure
            you receive the best service, no matter where you are.
          </Typography>
        </Box>

        {/* Section 4 */}
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
            Reliable, Friendly, and Always Available
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
            Our professional customer support agents are trained to handle a
            wide range of travel concerns efficiently. No matter what the issue,
            we are here to make your experience hassle-free.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            Get in touch with us via phone, email, or live chat – anytime,
            anywhere. Your satisfaction is our priority.
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default PrivateTransfer;
