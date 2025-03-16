import { Box, Button, Dialog, DialogContent } from "@mui/material";
import React, { useState } from "react";
import bgImg from "../images/section8bg.jpg"; // Import the image
import { CiPlay1 } from "react-icons/ci";

function Section8() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "50vh", // Reduced height of background image
          backgroundAttachment: "fixed",
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
            backgroundImage: `url(${bgImg})`, // Fix the background URL
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.4, // Apply opacity only to the background image
            zIndex: -1, // Send the background image behind the content
            backgroundAttachment: "fixed",
          }}
        />

        {/* Main Content Box - Centering everything */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Stack the content vertically
            justifyContent: "center", // Center vertically
            alignItems: "center", // Center horizontally
            height: "100%", // Take up the full height of the parent container
            textAlign: "center",
            color: "white",
            zIndex: 1, // Ensure text appears above the background
          }}
        >
          {/* Title and Subtitle */}
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
            EXPLORE
          </Box>

          <Box
            sx={{
              fontSize: "33px",
              fontFamily: "Outfit",
              fontWeight: "600",
            }}
          >
            Car <span style={{ color: "#f5b754" }}>Promo</span> Video
          </Box>

          {/* Play Button */}
          <Button
            variant="outlined"
            onClick={handleClickOpen}
            sx={{
              color: "white",
              fontSize: "28px",
              fontWeight: "200",
              textTransform: "capitalize",
              backgroundColor: "transparent",
              height: "100px",
              width: "100px",
              borderColor: "#f5b754",
              borderRadius: "50%",
              marginTop: "20px",
              "&:hover": {
                color: "#f5b754",
              },
            }}
          >
            <CiPlay1 />
          </Button>
        </Box>
      </Box>

      {/* Dialog for Video */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent sx={{ padding: 0 }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yh0ZGHiizSA?si=_pxJYrhlNOqAWJOw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </DialogContent>
      </Dialog>

    </>
  );
}

export default Section8;
