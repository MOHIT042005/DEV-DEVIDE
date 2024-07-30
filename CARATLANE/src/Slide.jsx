import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Box, Grid, GridItem,SimpleGrid,Img,AspectRatio} from '@chakra-ui/react';
import { color, px } from 'framer-motion';
function Slide() {
  return (
    <>
       <Box className='carousel-inner'>
       <Carousel infiniteLoop={"true"} autoPlay={"true"}  transitionDuration={2} >
        <Box  >
         <img src="./images/1.jpg" className="slide-one" as='a' target='_blank' href='https://www.caratlane.com/jewellery/daily+wear+rings.html'/>
       </Box>
        <Box>
         <img src="./images/2.jpg" className="slide-one" as='a' target='_blank' href='https://www.caratlane.com/jewellery/daily+wear+rings.html' />
       </Box>
       <Box>
         <img src="./images/Desktop.webp" className='slide-one' as='a' target='_blank' href='https://www.caratlane.com/jewellery/daily+wear+rings.html' />
       </Box>
   </Carousel> 
   </Box>
   <Grid
  h="600px"
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(2, 1fr)'
  gap={4}
  >
  <GridItem rowSpan={2} colSpan={1} onClick={"refOne"} bgImage={"https://cdn.caratlane.com/media/static/images/V4/2024/Shaya/07-July/Responsive/23/Responsive-12.jpg"} as='a' target='_blank' href='https://www.caratlane.com/jewellery/daily+wear+rings.html'/>
  <GridItem colSpan={2}  id='banner2' bgImage={"https://cdn.caratlane.com/media/static/images/V4/2024/CL/07_JULY/AppBanner/Personal/2X.jpg"} as='a' target='_blank' href='https://www.caratlane.com/jewellery/daily+wear+rings.html' />
  <GridItem colSpan={2}  id='banner3' bgImage={"https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/justarrived/03/1X.webp"} as='a' target='_blank' href='https://www.caratlane.com/jewellery/daily+wear+rings.html' />
  <GridItem colSpan={4}  id='banner4'bgColor={"blue"} />
</Grid>

<SimpleGrid columns={[2, null,3 ]} spacing='6%' className='six' my='3%'>
  <Box boxShadow='md' p='5' rounded='40' mx='2%'mb='3%' bgPosition={"center"} bgSize={"cover"} bgImg={"https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/6tiles/01/Desktop_1.png"} height='120px' as='a' target='_blank' href='https://www.caratlane.com/jewellery/daily+wear+rings.html' ></Box>
  <Box boxShadow='md' p='5' rounded='40' mx='2%'mb='3%' bgPosition={"center"} bgSize={"cover"} bgImg={"https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/6tiles/01/Desktop_3.png"} height='120px' as='a' target='_blank' href='https://www.caratlane.com/jewellery/daily+wear+rings.html' ></Box>
  <Box boxShadow='md' p='5' rounded='40' mx='2%'mb='3%' bgPosition={"center"} bgSize={"cover"} bgImg={"https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/6tiles/01/Desktop_4.png"} height='120px' as='a' target='_blank' href='https://www.caratlane.com/jewellery/daily+wear+rings.html' ></Box>
  <Box boxShadow='md' p='5' rounded='40' mx='2%'mb='3%' bgPosition={"center"} bgSize={"cover"} bgImg={"https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/6tiles/01/Desktop_5.png"} height='120px' as='a' target='_blank' href='https://www.caratlane.com/jewellery/daily+wear+rings.html' ></Box>
  <Box boxShadow='md' p='5' rounded='40' mx='2%'mb='3%' bgPosition={"center"} bgSize={"cover"} bgImg={"https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/6tiles/01/Desktop_6.png"} height='120px' as='a' target='_blank' href='https://www.caratlane.com/jewellery/daily+wear+rings.html' ></Box>
  <Box boxShadow='md' p='5' rounded='40' mx='2%'mb='3%' bgPosition={"center"} bgSize={"cover"} bgImg={"https://cdn.caratlane.com/media/static/images/V4/2024/CL/06_JUNE/Banner/6tiles/01/Desktop_7.png"} height='120px' as='a' target='_blank' href='https://www.caratlane.com/jewellery/daily+wear+rings.html' ></Box>
</SimpleGrid>

<Box as='a' target='_blank' href='https://chakra-ui.com'
className='disney' mt="8%" mx="5%" boxShadow='Dark-lg'  p='6' rounded='md'  >
<AspectRatio  ratio={18.9/7} rounded="30"  autoPlay ={'true'} >
  <iframe
    title='naruto'
    src='./images/video2.mp4'
   
  />
</AspectRatio> 
</Box>




</>
  )
}

function ref(){
  <a href='https://www.caratlane'></a>
}

export default Slide
