import React, { useRef } from 'react';
import Grid from '@mui/material/Grid';
// import './index.module.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { motion, useTransform } from 'framer-motion';

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: 'spring', duration: 1, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        };
    },
};

const variants = {
    visible: {
        opacity: 1,
    },
    hidden: {
        opacity: 0,
    },
};

function Sun() {
    return (
        <motion.svg width="600" height="600" viewBox="0 0 600 600" initial="hidden" animate="visible">
            <motion.circle
                cx="500"
                cy="100"
                r="80"
                stroke="orange"
                style={{ fill: 'transparent', strokeWidth: 2 }}
                variants={draw}
                custom={1}
            />
            <motion.line x1="400" y1="100" x2="200" y2="100" stroke="orange" variants={draw} custom={1} />
            <motion.line x1="410" y1="150" x2="250" y2="250" stroke="orange" variants={draw} custom={1} />
        </motion.svg>
    );
}

function Row(props) {
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                amount: 'all',
            }}
        >
            <Box justifyContent="center" sx={{ display: 'flex', flexDirection: 'row' }}>
                {props.children}
            </Box>
        </motion.div>
    );
}

export default function LandingPage() {
    return (
        <Box display="div" justifyContent="center" alignItems="center">
            <Row>
                {' '}
                {/**title card*/}
                <h1 style={{ textAlign: 'center' }}>The Sun Screen</h1>
            </Row>
            <Row>
                {' '}
                {/**hero: super cool sun graphic and product description */}
                <Typography>We sell sun screens.</Typography>
                <Sun />
            </Row>
            <Row>
                {' '}
                {/** lengthier benefit description card */}
                <Box
                    sx={{
                        height: '500px',
                    }}
                >
                    Here are some factuals about what is cool about our sun screens. Skincare, cancer, etc.
                </Box>
            </Row>
            <Row>
                {' '}
                {/**maybe a lengthier description card for benefits */}
                <Box
                    sx={{
                        height: '500px',
                    }}
                >
                    Here is a purchase card. We can anchor it so that the purchase button takes us directly here.
                </Box>
            </Row>
        </Box>
    );
}
