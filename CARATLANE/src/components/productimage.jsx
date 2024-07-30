<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>
<body>
    
</body>
</html>
<scrpit>
import React from 'react';

const ProductImages = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Product ${index}`} style={{ maxWidth: '100px', margin: '5px' }} />
      ))}
    </div>
  );
};

export default ProductImages;

</scrpit>