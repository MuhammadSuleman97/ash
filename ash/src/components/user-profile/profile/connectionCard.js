import React from "react";
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import connectionAvatar from '../../../assets/connectionAvatar.svg'
// import activeConnectionIcon from '../../../assets/activeConnectionIcon.svg'
import connectionIcon from '../../../assets/connectionIcon.svg'


function generate(element) {
  return [0, 1, 2,3,4].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));




export default function ConnectionCard() {
    
  
  return (
    <div>
    <Grid item xs={12} >
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
           CONNECTIONS
          </Typography>
          <Demo>
            <List dense='true'>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <img src={connectionIcon} alt=""/>
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <img src={connectionAvatar} alt=""/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText className="font-bold"
                    primary="Suleman"
                    secondary='69 connections'
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
    </div>           );
}