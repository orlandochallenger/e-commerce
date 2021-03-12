import React from 'react'
import {Grid} from "@material-ui/core";
import Product from "../Product/Product";

const products =[
    {id: 1, name: "Shoes", description: "walking shoes", price: "$60", image: "https://static01.nyt.com/images/2020/02/25/well/PHYSED-SHOES1/merlin_168154896_a69879b8-d43a-40d0-8297-dd7086d7d784-jumbo.jpg?quality=90&auto=webp"},
    {id: 2, name: "pants", description: "dress pants", price: "$30", image: "https://cdn.shopify.com/s/files/1/1164/6922/products/mens-beach-pants-khaki-front_800x.jpg?v=1505864726"},
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products
