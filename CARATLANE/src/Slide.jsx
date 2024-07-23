import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Box, Center, Grid, GridItem,SimpleGrid, withDefaultColorScheme } from '@chakra-ui/react';
function Slide() {
  return (
    <div>
       <div className='carousel-inner'>
    <Carousel infinitloop={"true"} autoPlay={"true"}  transitionDuration={500} >
        <div>
         <img src="./images/1X.webp" className="slide-one" />
       </div>
       <div>
         <img src="./images/2x1.webp" className='slide-one' />
       </div>
      <div>
      <img src="./images/2X.webp" className='slide-one'/>
     </div>
   </Carousel> 
   </div>
   <Grid
  h="600px"
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(2, 1fr)'
  gap={4}
  >
  <GridItem rowSpan={2} colSpan={1} onClick={"refOne"} bgImage={"https://cdn.caratlane.com/media/static/images/V4/2024/Shaya/07-July/Responsive/23/Responsive-12.jpg"} />
  <GridItem colSpan={2}  id='banner2' bgImage={"https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/AppBanner/Personal/2X.jpg"}/>
  <GridItem colSpan={2}  id='banner3' bgImage={"https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/justarrived/03/1X.webp"}/>
  <GridItem colSpan={4}  id='banner4'bgColor={"blue"} />
</Grid>

<SimpleGrid columns={[2, null,3 ]} spacing='40px' className='six'>
  <Box bgPosition={"center"} bgSize={"cover"} bgImg={"https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/6tiles/01/Desktop_1.png"} height='120px'></Box>
  <Box bgPosition={"center"} bgSize={"cover"} bgImg={"https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/6tiles/01/Desktop_3.png"} height='120px'></Box>
  <Box bgPosition={"center"} bgSize={"cover"} bgImg={"https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/6tiles/01/Desktop_4.png"} height='120px'></Box>
  <Box bgPosition={"center"} bgSize={"cover"} bgImg={"https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/6tiles/01/Desktop_5.png"} height='120px'></Box>
  <Box bgPosition={"center"} bgSize={"cover"} bgImg={"https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/6tiles/01/Desktop_6.png"} height='120px'></Box>
  <Box bgPosition={"center"} bgSize={"cover"} bgImg={"https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/6tiles/01/Desktop_7.png"} height='120px'></Box>
</SimpleGrid>
   </div>
  )
} 

function refOne(){

}
export default Slide
