const express = require("express");
const path = require("path");
const middleware = require("./middleware");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(middleware.bodyParser.json());
app.use(middleware.bodyParser.urlencoded({ extended: true }));
app.use(middleware.morgan("common"));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.static(path.join(__dirname, "..", "public", "js")));

app.get("/", (req, res) => res.render("index.pug"));

// data endpoints
app.use("/api/projects", routes.projects);

app.listen(
  port,
  console.log.bind(console, `Ready to accept connections on port ${port}`)
);
