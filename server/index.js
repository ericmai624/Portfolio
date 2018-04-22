const express = require("express");
const path = require("path");
const middleware = require("./middleware");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(middleware.helmet());
app.use(middleware.compression());
app.use(middleware.bodyParser.json());
app.use(middleware.bodyParser.urlencoded({ extended: true }));
app.use(middleware.morgan("common"));
app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.use("/public", express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => res.render("index.pug"));
app.get("/dev/:project", (req, res) => res.render("index.pug"));

// data endpoints
app.use("/api/projects", routes.projects);

app.listen(
  port,
  console.log.bind(console, `Ready to accept connections on port ${port}`)
);
