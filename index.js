const express = require('express');
const app = express();
const cors = require("cors");
const connection = require("./db");

// Use environment variable for port or default to 5000
const port = process.env.PORT || 5000;

const userRoutes = require("./routes/aliceAuth");
const aliceDetails = require("./routes/aliceDetails");
const addTrans = require("./routes/addTrans");
const allDetails = require("./routes/allTrans");

connection();
app.use(express.json());
app.use(cors());
app.use("/api/alice-auth", userRoutes);
app.use("/api/alice-details", aliceDetails);
app.use("/api/alice", addTrans);
app.use("/api", allDetails);

app.listen(port, () => console.log(`Listening on port ${port}...`));
