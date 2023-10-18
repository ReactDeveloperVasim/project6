import React from "react";
import { TextField,Button } from "@mui/material";

export const Emp=()=>{
    return(
        <div className="sub">
            <TextField variant="outlined" label="First Name" />
            <TextField variant="outlined" label="Last Name" />
            <Button variant="contained">Submit</Button>
            <Button variant="contained">cancel</Button>

        </div>
    );
}