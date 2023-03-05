import React from 'react'
import StoryItem from '../Components/StoryItem'
import {Container, Typography} from '@mui/material'

export default function Story() {
  const Item = [1,2,3,4,5]
  return (
    <Container maxWidth='xl'>
      <Typography variant='h3' align='center'>Our Story</Typography>
       {Item.map( rows =>
        <StoryItem key={rows}/>
        )}
    </Container>
  )
}
