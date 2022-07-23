import {ListItemButton,Drawer, IconButton, ListItemIcon,styled, ListItemText, List } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import React from 'react'
import { useState } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { NavLink } from 'react-router-dom';

const Navlink =styled(NavLink)`
  color:white;
  text-decoration:none;
  margin-top:15px;
`
function DrawerFile() {
  const [open , setOpen]=useState(false)


  return (
    <>
    <Drawer PaperProps={{ sx:{backgroundColor:'rgba(49, 49 ,116, 1)'} }} open={open} onClose={()=>setOpen(false)}   >
      <List>
      <ListItemButton onClick={()=>setOpen(!open)}> 
        <CloseRoundedIcon style={{marginLeft:'auto'}} />
      </ListItemButton>

      <ListItemButton onClick={()=>setOpen(!open)}>
        <ListItemIcon>
            <Navlink to='/' > Production </Navlink>  
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton onClick={()=>setOpen(!open)}>
        <ListItemIcon>
            <Navlink to='/overview' > Overview </Navlink>  
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton onClick={()=>setOpen(!open)}>
        <ListItemIcon>
            <Navlink to='/pricing' > Pricing </Navlink>  
        </ListItemIcon>
      </ListItemButton>
      <ListItemButton  onClick={()=>setOpen(!open)}>
        <ListItemIcon>
            <Navlink to='/contact' > Contact Us </Navlink>  
        </ListItemIcon>
      </ListItemButton>

      </List>
    </Drawer>


    <IconButton onClick={()=>setOpen(!open)} style={{color:'white'}}>
        <MenuRoundedIcon />
    </IconButton>

    </>
  )
}

export default React.memo(DrawerFile);