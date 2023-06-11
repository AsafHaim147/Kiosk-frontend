import { Box, Button, Card, CardActionArea, Typography } from '@mui/material'
import React from 'react'
import Logo from '../components/Logo'
import { styles } from '../styles'
import { Link } from 'react-router-dom'


export default function HomeScreen(props) {
    return (
        <Card>
            <CardActionArea>
                <Box sx={[styles.root, styles.offwhite]}>
                    <Box sx={[styles.main, styles.center]}>
                        <Typography component="h1" variant='h1'>
                            Beit Haam
                        </Typography>
                        <Logo />
                    </Box>
                    <Button variant="contained" color="success" sw={styles.center}>
                        <Link to="/menu">Order!</Link>
                    </Button>
                </Box>
            </CardActionArea>
        </Card>
    )
}
