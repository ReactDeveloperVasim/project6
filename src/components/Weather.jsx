import React, { useState } from "react";
import { Grid, Button, TextField } from "@mui/material";

export const Weather = () => {
  const [city, setCity] = useState("");
  const [input, setInput] = useState(" ");

  const handleSearch = () => {
    setInput(city);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <h1>Assignment-11</h1>
          <Grid className="boarder" container spacing={1}>
            <Grid item xs={12}>
              <h2>Weather App</h2>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Enter City"
                fullWidth
                onChange={(e) => setCity(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={handleSearch}
              >
                Search
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h3>City Name : {input}</h3>
            </Grid>
            <Grid item xs={12}>
              <h4>Weather : 🌦️ </h4>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
};
