import React, { useRef } from 'react';
import { getCart } from '../common';

export default function CartPage() {
    getCart();
    return <div>test</div>;
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
