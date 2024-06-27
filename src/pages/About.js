import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Divider, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 8,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
      </Box>

      <Box sx={{ ml: 12, mr: 12 }}>
        <Divider sx={{ mb: 5 }} />
        <Typography variant="h4">ABOUT US</Typography>
        <p>
          Welcome to [ Rhythm Restaurant ], where culinary artistry meets warm hospitality.
          Nestled in the heart of [Coimbatore], we pride ourselves on offering a unique
          dining experience that blends tradition and innovation.
        </p>
        <Divider sx={{ my: 5 }} />
        <Typography variant="h4">Our Story</Typography>
        <p>
          Founded in [March 2024], [Rhythm Restaurant] was born out of a passion for exquisite food
          and a love for community. Our founder, [AR0118], envisioned a place where
          friends and family could come together to enjoy delicious meals in a welcoming
          atmosphere. Over the years, we've grown from a small, cozy eatery into a beloved
          dining destination, thanks to the support of our loyal patrons.
        </p>
        <Divider sx={{ my: 5 }} />
        <Typography variant="h4">Our Philosophy</Typography>
        <p>
          At [Rhythm Restaurant], we believe that food is more than just sustenance; it’s a
          way to connect people and create lasting memories. Our menu is a reflection of
          this philosophy, featuring a curated selection of dishes crafted from the freshest,
          locally-sourced ingredients. Each plate is a testament to our commitment to quality,
          creativity, and sustainability.
        </p>
        <Divider sx={{ my: 5 }} />
        <Typography variant="h4">Our Menu</Typography>
        <p>
        Our chefs take pride in blending traditional recipes with contemporary culinary 
        techniques to bring you a dining experience like no other. From hearty breakfasts 
        to sumptuous dinners, every dish is prepared with the utmost care and attention to 
        detail. Whether you're craving a classic favorite or eager to try something new, 
        our diverse menu has something to satisfy every palate.
        </p>
        <Divider sx={{ my: 5 }} />
        <Typography variant="h4">Our Ambiance</Typography>
        <p>
        Step into [Rhythm Restaurant] and you'll be greeted by a warm, inviting atmosphere.
        Our interior, designed with a perfect balance of elegance and comfort, creates the
        ideal setting for any occasion. Whether you're here for a casual meal, a romantic
        dinner, or a special celebration, we strive to make every visit memorable.
        </p>
        <Divider sx={{ my: 5 }} />
        <Typography variant="h4">Our Team</Typography>
        <p>
        Behind every great meal is a dedicated team of culinary professionals and hospitality
        experts. Our chefs, waitstaff, and managers share a common goal: to provide you with 
        an exceptional dining experience. We are passionate about food and committed to ensuring 
        that every guest feels like a part of our family.
        </p>
        <Divider sx={{ my: 5 }} />
        <Typography variant="h4">Community Engagement</Typography>
        <p>
        We are proud to be a part of the [Coimbatore] community. From sourcing local ingredients 
        to supporting local events and charities, we believe in giving back to the community that
         has embraced us. Your support helps us continue to contribute to the vibrant fabric of our neighborhood.
        </p>
        <Divider sx={{ my: 5 }} />
        <Typography variant="h4">Visit Us</Typography>
        <p>
        We invite you to join us at [Rhythm Restaurant] and experience the perfect blend of delicious food, 
        delightful ambiance, and dedicated service. Whether you're a longtime friend or a first-time visitor, 
        we look forward to welcoming you and making your dining experience truly special.
        </p>
        <Divider sx={{ my: 5 }} />
      </Box>
    </Layout>
  );
};

export default About;