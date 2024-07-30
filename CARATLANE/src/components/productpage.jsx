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
import ProductDetails from './ProductDetails';
import ProductImages from './ProductImages';
import ProductReviews from './ProductReviews';
import AddToCart from './AddToCart';

const ProductPage = ({ match }) => {
  // Assuming you have a product ID passed through URL params
  const productId = match.params.productId;

  // Mock product data (replace with actual API call if available)
  const product = {
    id: productId,
    name: 'Diamond Ring',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    price: 50000,
    images: ['image1.jpg', 'image2.jpg', 'image3.jpg'],
    reviews: ['Great product!', 'Amazing quality.'],
  };

  const handleAddToCart = (quantity) => {
    // Implement add to cart functionality
    console.log(`Added ${quantity} of product ${productId} to cart.`);
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <ProductImages images={product.images} />
      <ProductDetails product={product} />
      <ProductReviews reviews={product.reviews} />
      <AddToCart productId={productId} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default ProductPage;

</script>