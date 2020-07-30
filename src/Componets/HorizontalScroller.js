import React from "react";
import { Typography, Box } from "@material-ui/core";
import ProductView from "./Product";

const HorizontalScroller = () => {
  return (
    <Box bgcolor="white" p="16px">
      <Typography variant="h5">Title</Typography>
      <Box display="flex" overflow="auto">
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
        <ProductView />
      </Box>
    </Box>
  );
};

export default HorizontalScroller;
