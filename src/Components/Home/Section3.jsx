import { Box, Button, Container, Grid, Dialog, DialogContent } from '@mui/material';
import React, { useState } from 'react';
import { FiCheck } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { CiPlay1 } from "react-icons/ci";
import GirlImg from '../images/girlImg.jpg'


function Section3() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const imgStyle = {
        maxWidth: '100%',  
        height: 'auto',    
        transition: 'transform 0.3s ease',
        borderRadius: '26px'
    };

    return (
        <Box sx={{padding: '40px'}}>
        <Container maxWidth={false} sx={{ padding: '0' }}>
            <Grid container spacing={2} sx={{ 
                 justifyContent: 'flex-start' }}>
                <Grid item lg={6} md={6} xs={12}>
                    <Box sx={{ fontFamily: 'Outfit', color: '#f5b754', fontSize: '10px', fontWeight: '100', marginBottom: '2px', marginBottom: '10px', letterSpacing: '5px'}}>
                        RENTEX
                    </Box>
                    <Box sx={{ color: 'white', fontSize: '35px', fontWeight: '600', lineHeight: '1.23em' , fontFamily: 'Outfit' }}>
                        We Are More Than
                        <span style={{ color: '#f5b754', fontSize: '35px', fontWeight: '600', display: 'block' , fontFamily: 'Outfit'}}>
                            A Car Rental Company
                        </span>
                    </Box>
                    <Box sx={{ color: '#999999', fontSize: '13px', marginTop: '10px', lineHeight: '24px', fontFamily: 'Outfit' }}>
                        At Rentax, we understand that your vehicle is essential to your daily life. That's why we provide comprehensive car repair services to keep your vehicle running smoothly. Our team of certified technicians specializes in everything from routine maintenance to complex repairs, including engine diagnostics, brake services, and transmission repairs.
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                        <ul style={{ padding: '0' }}>
                            <li style={{ display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ height: '35px', width: '35px', borderRadius: '50%', backgroundColor: '#222222', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#f5b754', fontWeight: '100', fontSize: '16px' }}>
                                    <FiCheck />
                                </Box>
                                <Box sx={{ color: '#999999', fontSize: '13px', fontWeight: '350', marginLeft: '10px' , fontFamily: 'Outfit'}}>
                                    Sports and Luxury Cars
                                </Box>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                <Box sx={{ height: '35px', width: '35px', borderRadius: '50%', backgroundColor: '#222222', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#f5b754', fontWeight: '100', fontSize: '16px' }}>
                                    <FiCheck />
                                </Box>
                                <Box sx={{ color: '#999999', fontSize: '13px', fontWeight: '350', marginLeft: '10px' , fontFamily: 'Outfit'}}>
                                    Economy Cars
                                </Box>
                            </li>
                        </ul>
                    </Box>
                    <Box sx={{ marginTop: '15px' }}>
                        <Link to={"/contact"} style={{ textDecoration: "none" }}>
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
                                    fontFamily: 'Outfit',
                                    transition: 'transform 0.3s',
                                    "&:hover": {
                                        color: "black",
                                        borderColor: "white",
                                        backgroundColor: "white",
                                    },
                                }}
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </Box>
                </Grid>

                <Grid item lg={6} md={6} xs={12}>
                    <Box
                        component="div"
                        sx={{
                            overflow: 'hidden',
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 'auto',
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                '&:hover img': {
                                    transform: 'scale(1.04)',
                                },
                                transition: 'transform 0.3s ease',
                                overflow: 'hidden',
                                borderRadius: '26px'
                            }}
                        >
                            <img
                                src={GirlImg}
                                alt="girl img"
                                style={imgStyle}
                            />

                            <Box sx={{ position: 'relative', color: 'white', bottom: '72px', left: '11px'}}>
                                <Button
                                    variant="outlined"
                                    onClick={handleClickOpen}
                                    sx={{
                                        color: "white",
                                        fontSize: '18px',
                                        fontWeight: "200",
                                        textTransform: "capitalize",
                                        backgroundColor: "#f5b754",
                                        height: '60px',
                                        width: '60px',
                                        borderColor: '#f5b754' ,
                                        borderRadius: '50%',
                                        transition: 'transform 0.3s',
                                        "&:hover": {
                                            color: "black",
                                            backgroundColor: "white",
                                            transform: 'translateY(-8px)',
                                            borderColor: 'white' 
                                        },
                                    }}
                                >
                                    <CiPlay1 />
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            {/* Modal for YouTube Video */}
            <Dialog open={open} onClose={handleClose} >
                <DialogContent sx={{ padding: 0 }}>
                    <iframe
                        width="600px"
                        height="584px"
                        src="https://www.youtube.com/embed/1LxcTt1adfY?si=OPCCjTcRlWWMJXbd" // Replace with your actual YouTube video ID
                        title="YouTube Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        // allowFullScreen
                    ></iframe>
                </DialogContent>
            </Dialog>
                                                
        </Container>

        </Box>
    );
}

export default Section3;
