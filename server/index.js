require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./config/db.config")();

const app = express();

app.use(express.json());
app.use(cors({origin: "http://localhost:3000"}))

const ticketRouter = require("./routes/ticketsRoute")
app.use("/ticket", ticketRouter)

app.listen(Number(process.env.PORT), () => {
    console.log("Server up and running at port:", process.env.PORT);
})