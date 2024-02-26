import React, { useState } from 'react';
import './Contact.css';
import { TextField, dividerClasses } from "@mui/material";
import { Button, MenuItem } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


//rendering contact form
return (
    <>
        <div>
            <h1 style={{ display: "flex", justifyContent: "center" }}>Contact Me</h1>
        </div>
        <form style={{ display: "flex", justifyContent: "center" }}>
            <Stack spacing={2}>
                <MenuItem>
                    <TextField
                    defaultValue={name}
                    id="outlined-basic"
                    fullWidth
                    label="Name"
                    name="name"
                    type="text"
                    variant="outlined"
                    style={{ backgroundColor: "white" }}
                    />
                </MenuItem>
                <MenuItem>
                    {" "}
                    <TextField
                    defaultValue={email}
                    id="outlined-basic"
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    variant="outlined"
                    style={{ backgroundColor: "white" }}
                    />
                </MenuItem>
                <MenuItem>
                    <TextField
                    defaultValue={message}
                    rows="15"
                    cols="40"
                    id="outlined-basic"
                    label="Message"
                    name="message"
                    type="text"
                    variant="outlined"
                    style={{ backgroundColor: "white" }}
                    placeholder="Type in your message here!"
                    />
                </MenuItem>
                <MenuItem>
                    <Button id="submit-button" className="pop-on-hover" 
                    xs={{ width: "100%" }} variant="contained">Submit</Button>
                </MenuItem>
            </Stack>
        </form>
    </>
)
};