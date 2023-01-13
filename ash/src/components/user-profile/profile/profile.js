/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import profileIcon from '../../../assets/profile-icon.svg'
import AboutCard from './aboutCard';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ConnectionCard from './connectionCard';
import TeamsCard from './teamsCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
export default function Profile(){

    return (
        <>
        <Box sx={{ flexGrow: 1 ,padding:0,backgroundColor:'unset'}}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Item>
          <AboutCard></AboutCard>
          
          </Item>
        </Grid>
        <Grid item xs={8} >
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item><AboutCard></AboutCard></Item>
        </Grid>
        <Grid item xs={8} container spacing={1}>
        <Grid item xs={6} >
          <Item><ConnectionCard></ConnectionCard></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><TeamsCard></TeamsCard></Item>
        </Grid>
          </Grid>
      </Grid>
    </Box>
        {/* <div className=" px-6 py-3 bg-white mb-6" >
            <div className='w-full '>
            
            <p className='text-xs'>ABOUT</p>
            <img src=""></img>
            </div>

            
        </div> */}
        </>

    );
}