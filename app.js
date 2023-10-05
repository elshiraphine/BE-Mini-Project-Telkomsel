const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get("/calculate", (req, res) => {
    res.render("index", { luas_segitiga: null });
});
app.use(require("./routes/indexRoute"));

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});

module.exports = app;
