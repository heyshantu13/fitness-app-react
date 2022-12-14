import React from 'react'
import logo  from "../assets/images/Logo.png"
import {Link} from "react-router-dom";
import {Stack} from "@mui/material";

function Navbar() {
  return (
   <Stack
   direction="row"
   justifyContent="space-around"
   px="20px"
   sx={{gap  : {
    sm : '122px',
    xs : '40px',
   },
   mt : {
    sm : "32px",
    xs : "20px"
   },
   justifyContent : 'none'
  }}
   >
    <Link to="/">
    <img src={logo} alt={logo} style={{
      width : '48px',
      height: '48px',
      margin : '0 20px',
    }}/>
    </Link>
    <Stack
    direction="row"
    gap="40px"
    fontSize="24px"
    alignItems="flex-end"
    >
      <Link to="/"
        style={{
          textDecoration : 'none',
          color : "#3A1212",
          borderBottom: '3px solid #FF2625'
        }}
      >Home</Link>
      <a href="#exercises" style={{
        textDecoration: 'none',
        color : "#3A1212",
      }}>Exercies</a>
    </Stack>
    </Stack>
  )
}

export default Navbar