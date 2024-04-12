import React from 'react';
import style from "./index.module.css";
import Grid from '@mui/material/Grid';

const Index = ({ images }) => {
  return (
    <div>
      <Grid container spacing={2} sx={{ gap: 1 }}>
        {Array.isArray(images) && images.length > 0 ? (
          images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <img src={image.urls.small} alt={image.alt_description} className={style.image} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <div className={style.warning}>Axtardığınız kontentə aid şəkil yoxdur!</div>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Index;


