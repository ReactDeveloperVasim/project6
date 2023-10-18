import React, { useState } from "react";
import { Grid,TextField,Button,Card,CardContent } from "@mui/material";

export const Signup=()=>{
    const[user,Setuser]=useState(" ");
    const[email,Setemail]=useState("");
    const[mobile,Setmobile]=useState("");
    const[password,Setpassword]=useState("");
    const[repass,Setrepass]=useState("");

    const handleClear=()=>{
        Setuser('');
        Setemail('');
        Setmobile('');
        Setpassword('');
        Setrepass('');
    }

    return(
        <div className="">
            <Grid container spacing={2}>
            
            <Grid item xs={4}>
            <Card>
                <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <h2>Sign In</h2>
                </Grid>
                <Grid item xs={12}>
                    <TextField variant="outlined" value={user} label="Username" fullWidth onChange={(e)=>Setuser(e.target.value)} />

                </Grid>
                <Grid item xs={12}>
                    <TextField variant="outlined" value={email}  label="Email Id" fullWidth onChange={(e)=>Setemail(e.target.value)} />

                </Grid>
                <Grid item xs={12}>
                    <TextField variant="outlined" value={mobile}  label="Mobile No" fullWidth onChange={(e)=>Setmobile(e.target.value)} />
                </Grid>
                <Grid item xs={6}>
                    <TextField variant="outlined" value={password}  label="PassWord" fullWidth onChange={(e)=>Setpassword(e.target.value)} />
                </Grid>
                <Grid item xs={6}>
                    <TextField variant="outlined" value={repass}  label="ReType Password" fullWidth onChange={(e)=>Setrepass(e.target.value)} />
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="success">submit</Button>
                </Grid>
                <Grid item xs={3}>
                    <Button variant="contained" fullWidth color="error" onClick={handleClear}>cancel</Button>
                </Grid>
                    </Grid>

                </CardContent>
            </Card>
            </Grid>
       
        

            <Grid item xs={8}>
                <Card>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={4}><h3>User Name : </h3></Grid>
                            <Grid item xs={8}><h3>{user} </h3></Grid>
                            <Grid item xs={4}><h3>Email ID : </h3></Grid>
                            <Grid item xs={8}><h3>{email} </h3></Grid>
                            <Grid item xs={4}><h3>Mobile No : </h3></Grid>
                            <Grid item xs={8}><h3>{mobile} </h3></Grid>
                            <Grid item xs={4}><h3>PassWord : </h3></Grid>
                            <Grid item xs={8}><h3>{password} </h3></Grid>
                            <Grid item xs={4}><h3>Confirm Password : </h3></Grid>
                            <Grid item xs={8}><h3>{repass} </h3></Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            </Grid>
        </div>
    );
}