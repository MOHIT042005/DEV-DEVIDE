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
<script>
import React from 'react';

const ProductReviews = ({ reviews }) => {
  return (
    <div>
      <h3>Customer Reviews</h3>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <p>{review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductReviews;

</script>