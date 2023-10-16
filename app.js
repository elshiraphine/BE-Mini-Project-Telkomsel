const express = require("express");
const path = require("path");
const app = express();
const AWS = require('aws-sdk');



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

AWS.config.update({ region: 'ap-southeast-3' }); // Replace 'your-region' with the AWS region where your Lambda function is deployed.

const lambda = new AWS.Lambda();

app.use(express.json());

app.get("/", (req, res) => {
    res.render("index", { luas_segitiga: null });
});

// app.post("/compute", (req, res) => {

// });

app.use(require("./routes/indexRoute"));

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});



module.exports = app;
