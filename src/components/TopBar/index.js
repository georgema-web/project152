import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';

import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';

export default function TopBar(props) {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" color="transparent" elevation={0}>
                    <Toolbar>
                        <Button
                            sx={{
                                backgroundColor: 'white',
                            }}
                            component={RouterLink}
                            to="/"
                        >
                            Super Sunny Sun Screen
                        </Button>
                        <Button
                            sx={{
                                backgroundColor: 'white',
                            }}
                            component={RouterLink}
                            to="/product"
                        >
                            Purchase
                        </Button>
                        <Typography sx={{ flexGrow: 1 }} />
                        <Button
                            sx={{
                                backgroundColor: 'white',
                            }}
                            component={RouterLink}
                            to="/cart"
                        >
                            Cart
                        </Button>
                        <Typography sx={{ width: '10px' }} />
                        <IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box //TopBar shadow
                sx={{
                    height: '60px',
                }}
            />
        </>
    );
}
