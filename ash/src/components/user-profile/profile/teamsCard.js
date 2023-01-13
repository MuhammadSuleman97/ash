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
import ReactIcon from '../../../assets/reactIcon.svg'
import DeveloperIcon from '../../../assets/developerIcon.svg'


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




export default function TeamsCard() {
    
  
  return (
    <div>
    <Grid item xs={12} >
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            TEAMS
          </Typography>
          <Demo>
            <List dense='true'>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <img src={DeveloperIcon} alt=""/>
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <img src={ReactIcon} alt=""/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText className="font-bold"
                    primary="React developers"
                    secondary='69 members'
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
    </div>           );
}