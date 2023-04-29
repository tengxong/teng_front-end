import React, { useEffect, useState } from 'react'
import StoryItem from '../Components/StoryItem'


import { Container, Typography } from '@mui/material'
import ButtieRecycleImg from '../Image/R (1).jfif'
import MaterialReuseImg from '../Image/Picture1.png'
import StartImg from '../Image/slider1-banner10.png'
import NatureImg from '../Image/OIP.jfif'
import SaveMaterImg from '../Image/World-Environment-Day-PNG-Free-Download.png'
import axios from 'axios'
export default function Story() {

  const [storiesData, setStoriesData] = useState([])
  useEffect(() => {
    axios({
      url: window.$api + '/stories',
      method: 'get'
    }).then(res => {
      // console.log(res.data)
      let newArr = [...res.data]
      let reverseValue = false
      newArr.forEach((el) => {
        if(reverseValue) {
          el.reversed = false
          reverseValue = false
        }else{
          el.reversed = true
          reverseValue = true
        }
      })
      setStoriesData(newArr)
    })
  }, [])
  return (
    <Container maxWidth='xl'>
      <Typography variant='h3' align='center'>Our Story</Typography>
      {storiesData.map(rows =>
        <StoryItem key={rows.id}
          desscription={rows.storyDesscription}
          year={rows.storyStartedYear}
          img={rows.storyImg}
          reversed={rows.reversed}
        />
      )}
    </Container>
  )
}
