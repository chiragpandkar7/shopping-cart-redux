import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function ProductCard({ product, onClickFunction }) {
  
  if (!product) {
    return null; 
  }


  return (
    <Card sx={{ maxHeight: 300, maxWidth: 300, height: 300, width: 300}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={product.thumbnail || "Product Image"}
          alt={product.title || "Product Title"}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {product.title || "Product Title"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.price || "Product Price"}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="contained" onClick={() => onClickFunction(product)}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
