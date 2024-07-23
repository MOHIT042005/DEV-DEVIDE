import React from 'react'

function Slide() {
  return (
    <div> <div className='carousel-inner'>
    <Carousel autoPlay controls>
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
   </div></div>
  )
}

export default Slide