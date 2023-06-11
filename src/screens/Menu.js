import { Avatar, Box, Button, Grid, List, ListItem, Typography, Card } from '@mui/material'
import React from 'react'
import { styles } from '../styles'
import axios from 'axios';
import { API_URL, IMAGE_HOST } from '../config';

export default function Menu() {
    const [categories, setCategories] = React.useState([])
    React.useEffect(() => {
        axios.get(`${API_URL}/api/categories/`).then(response => { setCategories(response.data) })
    }, [])

    const [filteredDishes, setFilteredDishes] = React.useState([{}])

    function getDishes(id) {
        axios.get(`${API_URL}/api/categories/${id}`).then(response => { setFilteredDishes(response.data) })
    }

    return (
        <Box sw={styles.root}>
            <Box sw={styles.main}>
                <Grid container>
                    <Grid item md={2}>
                        <List>
                            {categories.map(category => (
                                <ListItem key={category.name}>
                                    <Button onClick={() => { getDishes(category.id) }}>
                                        <Avatar alt={category.name} src={IMAGE_HOST + category.image} sx={{ width: 64, height: 64 }}> </Avatar>
                                    </Button>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                    <Grid item md={10}>
                        {filteredDishes.map(filteredDish => (
                            <Card key={filteredDish.name}>
                                <img src={IMAGE_HOST + filteredDish.image} alt={filteredDish.name} width="200px"></img>
                                <Typography component="h4" variant="h4" >{filteredDish.name}</Typography>
                                <Typography component="h6" variant="h6" >
                                    <p>{filteredDish.price}</p>
                                    <p>{filteredDish.description}</p>
                                </Typography>
                            </Card>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}