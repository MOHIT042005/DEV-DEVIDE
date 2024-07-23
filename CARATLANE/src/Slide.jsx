import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Grid, GridItem, withDefaultColorScheme } from '@chakra-ui/react';

function Slide() {
  return (
    <div>
       <div className='carousel-inner'>
    <Carousel >
        <div>
         <img src="./images/1X.webp" className='slide-one' />
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
<Grid templateColumns='repeat(2, 1fr)' gap={6}>
  <GridItem w='100%' h='10'bgImage={"./images/mobile-1.png"} />
  <GridItem w='100%' h='10'bgImage={"./images/mobile-1.png"} />
  <GridItem w='100%' h='10'bgImage={"./images/mobile-1.png"} />
  <GridItem w='100%' h='10'bgImage={"./images/mobile-1.png"} />
  <GridItem w='100%' h='10'bgImage={"./images/mobile-1.png"} />
</Grid>
   </div>
  )
}

function refOne(){
  
}
export default Slide