const router = require("express").Router();
const { Projects } = require("../controllers");

router.route("/").get(Projects.fetch);

module.exports = router;
