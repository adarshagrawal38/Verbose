import React from 'react';
import { Typography, Box } from '@material-ui/core';
import {grey, green} from '@material-ui/core/colors';
const ProductView = ()=> {
    return(
        <Box p="18px"
            bgcolor="white"
            boxShadow="8px"
            mx="4px"
            borderRadius="16px">

            <img style={{height: "120px", width:"120px", backgroundColor: grey[50]}}></img>
            <Typography>
                <Typography variant="subtitle1">Title</Typography>
                <Typography variant="subtitle2">
                    <span style={{color: green.A700}}>Offer</span>
                </Typography>
                <Typography variant="h6">Rs. XXX</Typography>
            </Typography>

        </Box>
    );
}

export default ProductView;