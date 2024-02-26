import React, { useState } from 'react';
import './Contact.css';
import { TextField, dividerClasses } from "@mui/material";
import { Button, MenuItem } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

// validating name, email, and message
    const validateName = (e) => {
        console.log(e);
        const { name, value } = e.target;
        setName(value);
        if (name === "name") {
            if (value === "") {
                setName("");
                setErrorMessage(`This field is required`);
            }
            
        }
        if (value.length > 0) {
                setErrorMessage(``);
        }
    };

    const validateEmail = (e) => {
        e.preventDefault();
        console.log(e);
        const { name, value } = e.target;
        setEmail(value);
        if (name === "email") {
            if (value === "") {
                setEmail("");
                setErrorMessage(`This field is required`);
            }
            const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
            console.log(!pattern.test(value));
            if (!pattern.test(value)) {
                setErrorMessage(`Please enter a valid email address`);
            } else {
                setErrorMessage("");
            }
        }
    };

    const validateMessage = (e) => {
        console.log(e);
        const { name, value } = e.target;
        setMessage(value);
        if (name === "message") {
            if (value === "") {
                setMessage("");
                setErrorMessage(`This field is required`);
            }
            
        }
        if (value.length > 0) {
            setErrorMessage(``);
        }
    };

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
                    {errorMessage && (
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <MenuItem>
                        <Button id="submit-button" className="pop-on-hover" 
                        xs={{ width: "100%" }} variant="contained">Submit</Button>
                    </MenuItem>
                </Stack>
            </form>
        </>
    )
};