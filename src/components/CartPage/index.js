import React from 'react';
import { getCart } from '../common';
import { Box, Button } from '@mui/material';
import ProductCard from './ProductCard';

export default function CartPage() {
    const cartItems = getCart();

    return (
        <Box display="div" justifyContent="center" alignItems="center">
            {cartItems.map((e) => {
                return <ProductCard paramString={e} />;
            })}
            <Box>
                <Button>Checkout</Button>
            </Box>
        </Box>
    );
}

/**
 *
 * TODO:
 * 1. display all the items from local storage into item cards
 * 2. cart widget , display when new items are added to the cart
 */

/**
 * TODO: make params pulled from db and stored in localstorage
 */
