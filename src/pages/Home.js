import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import "../styles/HomeStyles.css";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Stack,
  Grid,
  Container,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Location } from "../data/Data";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>

      <Typography variant="h3" gutterBottom component={"div"} sx={{ textAlign: "center", mt: 4}}>
        Popular localities in and around Coimbatore
      </Typography>

      <Box sx={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "20px", my: 5,}}>
        <Container>

        <Grid container spacing={2} justifyContent="center">
          {Location.map((location) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={location.name}>
              <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h5" gutterBottom component={"div"}>
                      {location.name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component={"div"}>
                      {location.branch}
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography variant="body2">View more</Typography>
                      <ArrowForward />
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        </Container>
      </Box>
    </Layout>
  );
};

export default Home;
