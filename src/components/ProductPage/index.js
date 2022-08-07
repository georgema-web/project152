import React, { useRef } from 'react';
import Grid from '@mui/material/Grid';
// import './index.module.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ProductCard from './ProductCard';
import Typography from '@mui/material/Typography';

import { motion, useTransform } from 'framer-motion';

const variants = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
};

function Row(props) {
    return (
        <motion.div variants={variants} initial="hidden" animate="visible">
            <Box justifyContent="center" sx={{ display: 'flex', flexDirection: 'row' }}>
                {props.children}
            </Box>
        </motion.div>
    );
}

export default function OrderPage() {
    /**
     * TODO: make params pulled from db and stored in localstorage
     */
    return (
        <Box display="div" justifyContent="center" alignItems="center">
            <Row>
                {' '}
                {/**title card*/}
                <h1 style={{ textAlign: 'center' }}>The Sun Screen</h1>
            </Row>
            <Row>
                {' '}
                {/**hero: order card */}
                <ProductCard
                    params={{
                        name: 'The Sun Screen 30x30',
                        options: {
                            Tint: ['Clear', 'Blue'],
                            Size: ['Small', 'Medium', 'Large', 'XtraLarge'],
                        },
                    }}
                />
            </Row>
            <Row>
                <ProductCard
                    params={{
                        name: 'The Sun Screen 40x40',
                        options: {
                            Tint: ['Clear', 'Blue'],
                            Size: ['Small', 'Medium', 'Large', 'XtraLarge'],
                        },
                    }}
                />
            </Row>
        </Box>
    );
}
