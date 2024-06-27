import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10,mr:10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact My Resturant</Typography>
        <p>
          Welcome to [ Rhythm Restaurant ], where culinary artistry meets warm hospitality.
          Nestled in the heart of [Coimbatore], we pride ourselves on offering a unique
          dining experience that blends tradition and innovation.
          <br />
          Founded in [March 2024], [Rhythm Restaurant] was born out of a passion for exquisite food
          and a love for community. Our founder, [AR0118], envisioned a place where
          friends and family could come together to enjoy delicious meals in a welcoming
          atmosphere. Over the years, we've grown from a small, cozy eatery into a beloved
          dining destination, thanks to the support of our loyal patrons.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 9443444404
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> rishiragu25@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> +919443444404
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;