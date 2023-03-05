import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import Img from '../Image/OIP.jfif'

export default function StoryItem() {
    return (
        <Box display={'flex'} mt={5} flexDirection={{md:'row', xs:'column'}}>
            <Box flex={1} display={'flex'} alignItems={{md:'flex-end',xs:'center'}} flexDirection={'column'} pr={{md:5,xs:0}}>
                <Typography variant='h3'>
                    1995
                </Typography>
                <img src={Img} width={'80%'} />
            </Box>
            <Divider flexItem orientation='vertical'/>
            <Box flex={1} pl={{md:5,xs:0}} display={'flex'} alignItems={'center'} textAlign={'center'}>
             <Typography variant='h6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis voluptatum obcaecati quidem tempora deleniti iusto quam sed sequi odio!</Typography>
            </Box>
        </Box>
    )
}
