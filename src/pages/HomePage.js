import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Body from "../components/Body";

const HomePage = () => {
  return (
    <Container style={{backgroundColor: "lightGray", padding: "1rem" }}maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>

        <Body />
      </Box>
    </Container>
  );
};

export default HomePage;
