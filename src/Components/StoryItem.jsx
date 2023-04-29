import { Box, Divider, Typography } from '@mui/material'
import React from 'react'


export default function StoryItem(props) {
    return (
        <Box display={'flex'} mt={5} flexDirection={{md:props.reversed ? 'row-reverse':'row', xs:'column'}}>
            <Box flex={1} display={'flex'} alignItems={{md:props.reversed ?'flex-start' :'flex-end',xs:'center'}} flexDirection={'column'} pr={{md:5,xs:0}}>
                <Typography variant='h3'>
                   {props.year}
                </Typography>
                <img src={window.$api+'/images/'+ props.img} width={'80%'} />
            </Box>
            <Divider flexItem orientation='vertical'/>
            <Box flex={1} pl={{md:5,xs:0}} display={'flex'} alignItems={'center'} textAlign={'center'}>
             <Typography variant='h6'>{props.desscription}</Typography>
            </Box>
        </Box>
    )
}
