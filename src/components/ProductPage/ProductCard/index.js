import { Box, ToggleButton, ToggleButtonGroup, FormControl, Button } from '@mui/material';
import React, { useEffect } from 'react';

import { serializeItem } from '../../common';

/**
 * ButtonGroup to display a row of options
 * @param {*} title
 * @param {*} options
 * @param {*} reactState
 * @param {*} reactSetState
 * @returns
 */
const ButtonGroup = (title, options, reactState, reactSetState) => {
    const handleOption = (event, newOption) => {
        if (newOption !== null) {
            reactState[title] = newOption;
            reactSetState({ ...reactState });
            // We also need to update the price to display
        }
    };
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <h3>{title}</h3>
            <ToggleButtonGroup color="primary" value={reactState[title]} exclusive onChange={handleOption}>
                {options.map((e) => {
                    return <ToggleButton value={e}>{e}</ToggleButton>;
                })}
            </ToggleButtonGroup>
        </Box>
    );
};

export default function ProductCard(props) {
    const initialOptions = {
        Product: props.params.name,
    };
    Object.keys(props.params.options).forEach((key) => (initialOptions[key] = ''));
    const [options, setOptions] = React.useState(initialOptions);

    // disable add to cart button before all options are selected
    const [blockPurchase, setBlockPurchase] = React.useState(true);
    useEffect(() => {
        if (Object.values(options).every((e) => e !== '')) {
            setBlockPurchase(false);
        }
    }, [options]);

    return (
        <Box justifyContent="center" sx={{ display: 'flex', flexDirection: 'row' }}>
            <FormControl
                sx={{
                    width: '500px',
                    height: '500px',
                }}
            >
                {
                    // order form, title, size, tint, add to cart
                }
                <h2>{props.params.name}</h2>
                {Object.entries(props.params.options).map(([key, value]) => {
                    return ButtonGroup(key, value, options, setOptions);
                })}

                <Button
                    disabled={blockPurchase}
                    onClick={() => {
                        // add new item to cart with unique id
                        // TODO: implement this thing, purchase {item: count of item }
                        const serialItem = serializeItem(Object.assign(options));

                        if (localStorage.getItem(serialItem) === null) {
                            localStorage.setItem(serialItem, 0);
                        }
                        localStorage.setItem(serialItem, parseInt(localStorage.getItem(serialItem)) + 1);
                        console.log(localStorage);
                        //flush previous state after adding to cart
                        setOptions(initialOptions);
                        setBlockPurchase(true);
                    }}
                >
                    Add to Cart
                </Button>
            </FormControl>

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
