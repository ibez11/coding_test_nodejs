var express = require("express");
var router = express.Router();

const { UserController } = require('../controllers/UserController');

// Register
router.post("/register", UserController.register);
router.post("/assign", UserController.assign);
router.post("/unassign", UserController.unassign);
router.get("/tasks/common", UserController.common);

router.get("/", function(req,res) {
    res.status(500).send({
        success: false,
        message: "Not Found"
    })
});

module.exports = router;