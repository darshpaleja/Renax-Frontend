import React from "react";
import { Box, Typography, Container } from "@mui/material";

function AirportTransfer() {
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
            Discover Local Tours with Expert Guides
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
            Our local tour services provide an immersive and informative
            experience, helping you explore the best attractions, hidden gems,
            and cultural highlights of the city. Whether you're interested in
            historical sites, nature trails, or vibrant local markets, our
            expert guides will make your journey unforgettable.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            We offer flexible tour packages that cater to solo travelers,
            families, and groups, ensuring a personalized and enjoyable
            exploration of the city's rich heritage.
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
            Well-Planned Itineraries for a Memorable Experience
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
            Our guided tours are designed to offer a balanced mix of
            sightseeing, cultural experiences, and leisure activities. We
            carefully plan each itinerary to maximize your time and provide you
            with the most enriching journey possible.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            With guided tours covering major landmarks, authentic local cuisine
            spots, and interactive activities, you can enjoy a deep and engaging
            travel experience without worrying about logistics.
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
            Comfortable and Safe Travel with Professional Guides
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
            Travel comfortably in well-maintained vehicles with professional and
            knowledgeable guides who ensure you have a smooth and informative
            tour. Our guides are well-versed in local history, traditions, and
            cultural aspects, giving you insights beyond the usual tourist
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
            Whether you prefer private tours or group excursions, we provide a
            safe and enjoyable experience tailored to your travel preferences
            and interests.
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
            Easy Booking and 24/7 Customer Support
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
            Booking a guided local tour is simple and hassle-free with our
            easy-to-use online platform. Choose from a variety of tour options,
            select your preferred schedule, and get instant confirmation.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Outfit",
              fontSize: "14px",
              color: "#959591",
            }}
          >
            Our 24/7 customer support is always available to assist you with any
            inquiries, modifications, or last-minute changes, ensuring a
            seamless and stress-free tour experience.
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default AirportTransfer;
