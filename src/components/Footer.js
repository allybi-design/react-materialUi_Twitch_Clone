import React from "react";
import styled from "styled-components";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
`;

const FooterComponent = () => {
  return (
    <Footer>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://material-ui.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Footer>
  );
};

export default FooterComponent;
