import mainVideo from '../../Components/videos/mainVideo.mp4'
import { Box, Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


function Section1() {
    const buttonHoverStyle = {
        // backgroundColor: 'darkorange',
        transform: 'translateY(-5px)',
    };

  return (
    <>
       <Box
            sx={{
                width: "100%",
                height: { xs: "500px", md: "550px", lg: "650px", xl: "750px" },
                overflow: "hidden",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            >
                <video
                    src={mainVideo}
                    autoPlay
                    loop
                    muted
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "bottom",
                        position: "absolute",
                        top: 0,
                        left: 0,
                    }}
                >
                    Your browser does not support the video tag.
                </video>

                <Box
                    sx={{
                        position: "absolute",
                        zIndex: "20",
                        width: "100%",
                        height: "100%",
                        color: "white",
                        backgroundColor: "transparent",
                        top: "0",
                        display: "flex",
                        alignItems: "center",
                    }} >

                    <Container fixed sx={{display:'flex' , justifyContent:'center' , alignItems: 'center'}}>
                        <Box>
                            <Box
                                sx={{
                                    width: "100%",
                                    fontSize: { xs: "11px", sm: "12px" },
                                    color: '#F5B754',
                                    fontWeight: "300",
                                    textTransform: "uppercase",
                                    letterSpacing: "3px",
                                    textAlign: 'center'
                                }}
                            >
                                * Premium
                            </Box>

                            <Box
                                sx={{
                                    fontSize: { xs: "61px", sm: "90px" },
                                    fontWeight: "700",
                                    textTransform: "capitalize",
                                    lineHeight: { xs: "1", sm: "1.1" },
                                    // margin: { xs: "10px 0px", sm: "10px 0px" },
                                    textAlign: 'center'
                                }}
                            >
                                Rental Car
                            </Box>

                            <Box
                                sx={{
                                    fontSize: {xs : '12px' , sm : '16px'},
                                    fontWeight: "300",
                                    textTransform: "capitalize",
                                    fontFamily: 'Outfit, sans-serif',
                                    textAlign: 'center',
                                    margin : { xs: '10px 0' , sm : '15px 0'}
                                }}
                            >
                                Bugatti Mistral W16 <span style={{color: '#F5B754', fontWeight:'500', fontSize : '20px'}}> $800 </span> /DAY
                            </Box>
                            
                            <Box sx={{ marginTop: "20px", display:'flex', justifyContent:'center'}}>
                                <Link to={"/signup"} style={{ textDecoration: "none" }}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            color: "black",
                                            fontSize: '13px',
                                            borderColor: "#f5b754",
                                            fontWeight: "200",
                                            padding: "14px 42px",
                                            textTransform: "capitalize",
                                            backgroundColor: "#f5b754",
                                            borderRadius: '30px',
                                            "&:hover": {
                                                color: "black",
                                                borderColor: "white",
                                                backgroundColor: "white",
                                                transform: 'translateY(-5px)', 
                                                transition: 'transform 0.3s',
                                            },
                                        }}
                                    >
                                        Join Now
                                    </Button>
                                </Link>

                                <Link to={"/cars"} style={{ textDecoration: "none" }}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            color: "white",
                                            fontSize: '13px',
                                            fontWeight: "10",
                                            padding: "14px 42px",
                                            marginLeft:'10px' ,
                                            textTransform: "capitalize",
                                            borderColor: "white",
                                            backgroundColor: "transparent",
                                            fontFamily: 'Outfit, sans-serif',
                                            borderRadius: '30px',
                                            "&:hover": {
                                                color: "black",
                                                backgroundColor: "#F5B754",
                                                transform: 'translateY(-5px)', 
                                                transition: 'transform 0.3s',
                                                borderColor: "#F5B754",

                                            },
                                        }}
                                    >
                                        Rent Now
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Container>
                    
                </Box>
            </Box>
    </>
  )
}

export default Section1
