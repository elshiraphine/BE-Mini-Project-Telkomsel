const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
var logger = require("morgan");
app.use(cors());

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());


app.get("/", (req, res) => {
    res.status(200).send({
      msg: "Wellcome to mini project API",
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
    }
);

module.exports = app;

