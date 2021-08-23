import { Grid } from '@material-ui/core';
import React from 'react';
import Card from './Card/Card';
import Carousel from './Carousel/Carousel';

const Home = () => {
    return (
        <div style={{ backgroundColor: "black" }}>
            <Grid>
                <Carousel />
                <Card />
            </Grid>
        </div>
    );
};

export default Home;