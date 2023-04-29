import React, { useEffect ,useState} from 'react'
import Card from '../Components/Card'
import { Box, Container, Typography } from '@mui/material'
import ButtieRecycleImg from '../Image/R (1).jfif'
import MaterialReuseImg from '../Image/Picture1.png'
import StartImg from '../Image/slider1-banner10.png'
import NatureImg from '../Image/OIP.jfif'
import SaveMaterImg from '../Image/World-Environment-Day-PNG-Free-Download.png'
import axios from 'axios'


export default function Project() {

  const [projectdata,setprojectData] = useState([])

  useEffect(() =>{
    axios({
      url: window.$api+'/projects',
      method:'GET'
    }).then(res =>{
      // console.log(res.data)
      setprojectData(res.data)
    })
  },[])


  
//   const data = [
//   {id: 1, title: 'Buttle Recycle', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut modi vel hic officiis quisquam, officia sit quae mollitia debitis libero praesentium, aperiam eos illum.', img: ButtieRecycleImg},
//   {id: 2, title: 'Material Reuse', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut modi vel hic officiis quisquam, officia sit quae mollitia debitis libero praesentium, aperiam eos illum.', img: MaterialReuseImg},
//   {id: 3, title: 'Start', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut modi vel hic officiis quisquam, officia sit quae mollitia debitis libero praesentium, aperiam eos illum.', img: StartImg},
//   {id: 4, title: 'Nature ', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut modi vel hic officiis quisquam, officia sit quae mollitia debitis libero praesentium, aperiam eos illum.', img:NatureImg},
//   {id: 5, title: 'Save Mater', description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ut modi vel hic officiis quisquam, officia sit quae mollitia debitis libero praesentium, aperiam eos illum.', img:SaveMaterImg}

// ]
  return (
    <Container maxWidth='xl' sx={{ pt: 10 }}>
      <Typography align='center' variant='h4'>Our Project</Typography>


      <Box sx={{ mt: 5 }} display='flex' justifyContent='space-between' flexWrap='wrap'>
        {projectdata.map(rows =>
          <Box mt={5} key={rows.id}>
            <Card
            //  key={rows.id}
            title={rows.projectName}
            description={rows.projectDescription}
            img={rows.projectImg}
            />
          </Box>
        )}

      </Box>
    </Container>
  )
}
