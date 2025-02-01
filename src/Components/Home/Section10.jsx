import { Container, Grid } from '@mui/material'
import React from 'react'
import one from '../images/logo images/1.png'
import two from '../images/logo images/3.png'
import three from '../images/logo images/5.png'
import four from '../images/logo images/2.png'
import five from '../images/logo images/4.png'
import six from '../images/logo images/6.png'

function Section10() {
  return (
    <>
        <Container className='sec10-container' sx={{bgcolor: '#222', margin: '0', padding: '0 30px', marginBottom: '90px'} }>
            <Grid container spacing={2} >
                <Grid item lg={2} md={4} xs={6}>
                    <img style={{height: 'auto', width: '100%'}} src={one} alt="" />
                </Grid>
                <Grid item lg={2} md={4} xs={6}>
                    <img style={{height: 'auto', width: '100%'}} src={two} alt="" />
                </Grid>
                <Grid item lg={2} md={4} xs={6}>
                    <img style={{height: 'auto', width: '100%'}} src={three} alt="" />
                </Grid>
                <Grid item lg={2} md={4} xs={6}>
                    <img style={{height: 'auto', width: '100%'}} src={four} alt="" />
                </Grid>
                <Grid item lg={2} md={4} xs={6}>
                    <img style={{height: 'auto', width: '100%'}} src={five} alt="" />
                </Grid>
                <Grid item lg={2} md={4} xs={6}>
                    <img style={{height: 'auto', width: '100%'}} src={six} alt="" />
                </Grid>
            </Grid>
        </Container> 
    </>
  )
}

export default Section10
