import React from "react";
import { Grid, Button } from "@mui/material";

export const Assignment12 = () => {
  return (
    <div>
      <Grid   container spacing={2}>
        <Grid item xs={5}></Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="success" fullWidth>
            1
          </Button>
        </Grid>
        <Grid item xs={5}></Grid>
      </Grid>
      <Grid sx={{marginBottom:"15px"}} container spacing={2}>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}><Button variant="contained" color="secondary" fullWidth>2</Button></Grid>
            <Grid item xs={3}><Button variant="contained" color="secondary" fullWidth>3</Button></Grid>
            <Grid item xs={3}></Grid>
      </Grid>


      <Grid  sx={{marginBottom:"15px"}} container spacing={2}>
            <Grid item xs={4}><Button variant="contained" color="error" fullWidth>4</Button></Grid>
            <Grid item xs={4}><Button variant="contained" color="error" fullWidth>5</Button></Grid>
            <Grid item xs={4}><Button variant="contained" color="error" fullWidth>6</Button></Grid>

      </Grid>


      <Grid  sx={{marginBottom:"15px"}} container spacing={2}>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}><Button variant="contained" color="secondary" fullWidth>7</Button></Grid>
            <Grid item xs={3}><Button variant="contained" color="secondary" fullWidth>8</Button></Grid>
            <Grid item xs={3}></Grid>
      </Grid>


      <Grid  sx={{marginBottom:"15px"}} container spacing={2}>
        <Grid item xs={5}></Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="success" fullWidth>
            9
          </Button>
        </Grid>
        <Grid item xs={5}></Grid>
      </Grid>
    </div>
  );
};
