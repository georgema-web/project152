import { Box, ToggleButton, ToggleButtonGroup, FormControl, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';

import { unserializeItem } from '../../common';

const CountButton = (props) => {
    const [count, setCount] = React.useState(localStorage.getItem(props.Product));
    const [block, setBlock] = React.useState(false);
    return (
        <Box>
            <Button
                onClick={() => {
                    // add unit count
                    localStorage.setItem(props.Product, parseInt(localStorage.getItem(props.Product)) + 1);
                    setCount(localStorage.getItem(props.Product));
                    if (localStorage.getItem(props.Product) > 0) {
                        setBlock(false);
                    }
                    console.log('buttoin', block);
                }}
            >
                +
            </Button>
            <Typography>{count}</Typography>
            <Button
                disabled={block}
                onClick={() => {
                    localStorage.setItem(props.Product, parseInt(localStorage.getItem(props.Product)) - 1);
                    setCount(localStorage.getItem(props.Product));
                    // remove unit count
                    console.log('buttoin', block);
                    // grey out if unit count == 0
                    if (localStorage.getItem(props.Product) < 1) {
                        setBlock(true);
                    }
                }}
            >
                {' '}
                __
            </Button>
        </Box>
    );
};

export default function ProductCard(props) {
    const itemString = props.paramString;
    const itemDict = unserializeItem(props.paramString);
    console.log(itemDict, itemString);
    return (
        <Box justifyContent="center" sx={{ display: 'flex', flexDirection: 'row' }}>
            {
                // product card with name, dimensions, count, price
                // TODO: add a remove button
            }
            <Box>
                <h2>{itemDict.Product}</h2>
                {Object.keys(itemDict).map((k) => {
                    if (k === 'Product') return <></>;
                    return (
                        <Typography>
                            {k}: {itemDict[k]}
                        </Typography>
                    );
                })}
                <CountButton Product={itemString}></CountButton>
            </Box>
            <Box
                component="img"
                src="https://madico.com/wp-content/uploads/2019/02/IDP-Architectural-UV-Gard.jpg"
                sx={{
                    width: '500px',
                    height: '500px',
                }}
            ></Box>
        </Box>
    );
}

/**
 * make stripe API app with functions.
 *
 *
 *
 * build a cart -> when you buy an item, it adds it to a cart
 * then you can
 *
 */
