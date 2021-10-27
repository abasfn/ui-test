import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Button from '@mui/material/Button';

const Home: NextPage = () => {
  const [box, setBox] = useState<number[]>([]);
  const handelOnclickBox = () => {
    debugger
    setBox([...box, box.length])
  }
  return (
    <div className={styles.container}>
      <Button sx={{marginTop:2}} onClick={handelOnclickBox} variant="contained">Add</Button>
      <Box mt={2} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {box.map((item, index) => {
            return (
              <Grid onClick={handelOnclickBox} key={index}  item xs={2}>
                <Box sx={{ background: 'red' }}>xs=8</Box>
              </Grid>
            )
          })}


        </Grid>
      </Box>
    </div>
  )
}

export default Home
