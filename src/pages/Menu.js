import React from "react";
import { MenuList } from "../data/Data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Typography variant="h5" sx={{ml:14,mt:5,fontWeight:"bold"}}>SOUTH INDIAN FOOD</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "300px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "200px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent >
                <Typography variant="h5" gutterBottom component={"div"} sx={{textAlign:"center"}}>
                  {menu.name}
                </Typography>
                
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;