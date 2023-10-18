import React from "react";
import { Button, Grid } from "@mui/material";

export const EmpPrac = () => {
  return (
    <div className="sub">
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Button variant="contained" label="item 1" color="error" fullWidth>
            Item 1
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button variant="contained" label="item 2" color="error" fullWidth>
            Item 2
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" label="City" color="inherit" fullWidth>
            Item 3
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" label="City" color="inherit" fullWidth>
            Item 4
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" label="City" color="secondary" fullWidth>
            Item 5
          </Button>
        </Grid>
        <Grid item xs={9}>
          <Button variant="contained" label="City" color="secondary" fullWidth>
            Item 6
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" label="City" color="warning" fullWidth>
            Item 7
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" label="City" color="success" fullWidth>
            Item 8
          </Button>
        </Grid>
        <Grid item xs={9}>
          <Button variant="contained" label="City" color="success" fullWidth>
            Item 9
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" label="City" color="inherit" fullWidth>
            Item 10
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" label="City" color="inherit" fullWidth>
            Item 11
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" label="City" color="inherit" fullWidth>
            Item 12
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" label="City" color="inherit" fullWidth>
            Item 13
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
