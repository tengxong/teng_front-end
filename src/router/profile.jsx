import React, { useEffect, useContext, useState } from 'react'
import { Avatar, Container, Box, Typography, TextField, MenuItem,Button,IconButton } from '@mui/material'
import { UserContext } from './Index'
import axios from 'axios'

export default function profile() {
  const { userInfo, setuserInfo } = useContext(UserContext)
  const [userProfileData, setuserProfileData] = useState([])
  const [userProfileInfo, setuserProfileInfo] = useState({})

  useEffect(() => {
    axios({
      url: window.$api + '/users/' + userInfo.id,
      method: 'get',
    }).then(res => {
      setuserProfileInfo(res.data[0])
      setuserProfileData([
        { id: 0, title: 'username', label: 'username' , value:res.data[0]?.username},
        { id: 1, title: 'email', label: 'email' ,value:res.data[0]?.email},
        { id: 2, title: 'Firstname', label: 'firstname', value:res.data[0]?.firstname },
        { id: 3, title: 'lastname', label: 'lastname' , value:res.data[0]?.lastname},

      ])
    })
  }, [userInfo.id])
  const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    
    let arr = [...userProfileData]
    userProfileData.forEach((row, index) => {
        if (row.label === name) {
            row.value = value
        }
    })
    setuserProfileData(arr)
}

const handleUpdate = () =>{
  axios({
    url: window.$api + '/users/' + userInfo.id,
    method:'put',
    data:{
      username: userProfileData[0].value,
      email: userProfileData[1].value,
      firstname: userProfileData[3].value,
      lastname: userProfileData[4].value,
    }
  }).then(res =>{
    alert (res.data);
  })
}

const handleGetUploadImage = (e) =>{
      let file = e.target.files[0]
      let formData = new FormData()
      formData.append('image',file)
      formData.append('id',userInfo.id)
      axios({
        url:window.$api+'/uploadProfileImage',
        method:'post',
        data:formData,
        // headers:{
        //   'Content-Type': 'multipart/form-data'
        // }
      }).then(res =>{
        setuserInfo({...userInfo, img: res.data.data.img});
      })
}


  return (
    <Container maxWidth='xl'>
      <Box display='flex'>
        <Box flex={1}>
        <IconButton  component='label'>
          <Avatar sx={{ width: 200, height: 200, fontSize: 60 }} src={window.$api + '/images/'+ userInfo.img} alt=''/>
          <input type='file' hidden accept='image/*' onChange={handleGetUploadImage}/>
        </IconButton>
        </Box>
        <Box flex={3}>
          <Typography variant='h4'>{userProfileInfo?.firstname}{userProfileInfo?.lastname}</Typography>
          <Typography variant='body1'>{userProfileInfo?.email}</Typography>
        </Box>
        <Box paddingTop={13} >
          <Typography variant='h4'>Account</Typography>

          <Button variant='contained' onClick={handleUpdate}>Update</Button>

          {userProfileData.map(rows =>
            <Box display={'flex'} alignItems='center' p={2} key={rows.id}>
              <Box flex={1}>
                <Typography variant='h6'>{rows.title}</Typography>
              </Box>
              <Box flex={2}>
                <TextField fullWidth variant='outlined' name={rows.label} label={rows.label} value={rows.value || ""}  onChange={handleChange}/>
              </Box>
            </Box>
          )}
          {/* <Box display={'flex'} alignItems={'center'} p={2}>
            <Box flex={1}>
              <Typography>Languager</Typography>
            </Box>
            <Box flex={2}>
              <TextField fullWidth variant='outlined' label={'choose'} select>
                <MenuItem>Lao</MenuItem>
                <MenuItem>Thai</MenuItem>
                <MenuItem>English</MenuItem>
                <MenuItem>China</MenuItem>
                <MenuItem>Viennam</MenuItem>
              </TextField>
            </Box>
          </Box> */}
        </Box>
      </Box>
    </Container>
  )
}
