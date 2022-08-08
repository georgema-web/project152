import { Box, ToggleButton, ToggleButtonGroup, FormControl, Button } from '@mui/material';
import React, { useEffect } from 'react';

import { serializeItem } from '../../common';

export default function ProductCard(props) {
    return (
        <Box justifyContent="center" sx={{ display: 'flex', flexDirection: 'row' }}>
            {
                // product card with name, dimensions, count, price
            }
            <Box>what the fuck</Box>
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
