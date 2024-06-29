import React from "react";
import { MenuList } from "../data/Data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

const Menu = () => {
  return (
    <Layout>
      <Typography
        variant="h5"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: 4,
          mb: 4,
          fontWeight: "bold",
        }}
      >
        TOP FOOD
      </Typography>
      <Box sx={{ width: "80%", margin: "auto", mt: 2, mb: 4 }}>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        >
          {MenuList.map((menu, index) => (
            <SwiperSlide key={index}>
              <Card>
                <CardMedia
                  sx={{ minHeight: "200px" }} // Adjust the minHeight here
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    {menu.name}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      <Typography
        variant="h5"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: 2,
          mb: 4,
          fontWeight: "bold",
        }}
      >
        SOUTH INDIAN FOOD
      </Typography>
      
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        <Container>
      <Grid container spacing={2} justifyContent="center">
        {MenuList.map((menu) => (
           <Grid item xs={6} sm={6} md={4} lg={3} key={menu.name}>
          <Card sx={{ maxWidth: "300px", display: "flex", m: 2 }} >
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "150px" }} 
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom component={"div"} sx={{ textAlign: "center" }}>
                  {menu.name}
                </Typography>
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

export default Menu;
