import { Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Cards from "../components/Cards";
import Box from '@mui/material/Box';
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import {Navigate} from 'react-router-dom'

export default function Horoscopes() {

return (
<>
<Box>
  <Typography variant="h4">
//
    </Typography>
      <Cards/>
</Box>
</>
  
)
}
