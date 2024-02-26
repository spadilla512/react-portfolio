import React from "react";
import Box from "@mui/material/Box";

export default function Resume() {
    return (
        <Box>
            <div>
                <h1>Resume PDF Coming Soon!</h1>
                <h2 style={{ display: "flex", justifyContent: "center", }}>Front-end Proficiencies</h2>
                <p style={{ display: "flex", justifyContent: "center", paddingRight: "100px", }}
                >
                    <br></br>- HTML
                    <br></br>- CSS
                    <br></br>- JavaScript
                    <br></br>- JQuery
                    <br></br>- responsive design
                    <br></br>- React
                    <br></br>- Bootstrap
                </p>
                <h2 style={{ display: "flex", justifyContent: "center", }}>Back-end Proficiencies</h2>
                <p style={{ display: "flex", justifyContent: "center", paddingRight: "80px", }} 
                >
                    <br></br>- APIs
                    <br></br>- Node
                    <br></br>- Express
                    <br></br>- MySQL, Sequelize
                    <br></br>- MongoDB, Mongoose
                    <br></br>- REST
                    <br></br>- GraphQL
                </p>
            </div>
        </Box>
    )
}