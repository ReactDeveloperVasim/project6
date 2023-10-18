import React from "react";
import {Grid,Button} from "@mui/material";

export const Colors=()=>{
    return(
        <div>
            <h1>Material UI Grid</h1>
            <Grid container spacing={2}>

                <Grid item xs={3}>
                    <Button variant="contained" fullWidth>01</Button>
                </Grid>
                <Grid item xs={3}>
                <Button variant="contained" fullWidth>02</Button>

                </Grid>
                <Grid item xs={3}>
                <Button variant="contained" fullWidth>03</Button>

                </Grid>
                <Grid item xs={3}>
                <Button variant="contained" fullWidth>04</Button>

                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" color="warning" fullWidth>05</Button>
                </Grid>
                <Grid item xs={8}>
                <Button variant="contained" color="secondary" fullWidth>06</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" color="primary" fullWidth>07</Button>
                </Grid>
                <Grid item xs={1}>
                <Button variant="contained" color="success" fullWidth>08</Button>
                </Grid>
                <Grid item xs={3}>
                <Button variant="contained" color="info" fullWidth>09</Button>
                </Grid>
                <Grid item xs={1}>
                <Button variant="contained" color="error" fullWidth>10</Button>
                </Grid>
                <Grid item xs={3}>
                <Button variant="contained" color="success" fullWidth>11</Button>
                </Grid>
                <Grid item xs={3}>
                <Button variant="contained" color="error" fullWidth>12</Button>
                </Grid>
                <Grid item xs={1}>
                <Button variant="contained" color="success" fullWidth>13</Button>
                </Grid>

            </Grid>
        </div>
    );
}