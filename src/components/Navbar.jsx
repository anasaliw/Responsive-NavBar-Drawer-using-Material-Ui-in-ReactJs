import React from 'react'
import {Box,AppBar,Toolbar,Tabs,Tab,Typography,Grid,styled,Button,useMediaQuery,useTheme,TabPanel } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DrawerFile from './DrawerFile';
import { useState } from 'react';
import {NavLink,Link} from 'react-router-dom';

const Navlink =styled(NavLink)`
  color:inherit;
  text-decoration:none;
`

function Navbar() {
    const [value,setValue]=useState('zero');
  const theme=useTheme();
  const isTrue=useMediaQuery(theme.breakpoints.down('md'));
  console.log(isTrue);


  return (
    <div>
      <AppBar position='static'>
        <Toolbar >
            
          { isTrue ? (<DrawerFile/>) : ( 
            <Grid container style={{placeItems:'center'}} >
                <Grid item lg={3} md={2}  xs={1} >
                    <AddShoppingCartIcon />
                </Grid>
                <Grid item lg={6} md={7} xs={5}>
                    
                    <Tabs
                    value={value}
                    onChange={(e,val)=>setValue(val)}
                    indicatorColor='secondary'
                    textColor='inherit'
                    >
                       <Tab value='zero' label="Production" component={Link} to={'/'} /> 
                       <Tab value='one' label="Overview" component={Link} to={'/overview'} />    
                        <Tab value='two' label="Pricing" component={Link} to={'/pricing'} />
                        <Tab value='three' label="Contact Us" component={Link} to={'/contact'} />
                    </Tabs>
                    
                </Grid>
                <Grid item lg={3} md={3} xs={6}>
                    <Box style={{display:'flex'}}>
                        <Button variant='contained' style={{marginLeft:'auto'}} >Login</Button>
                        <Button variant='contained' style={{marginLeft:5}} >Sign Up</Button>
                    </Box>
                </Grid>
            </Grid>
          )
          }
            </Toolbar>
      </AppBar>
    </div>
  )
}

export default React.memo(Navbar)
