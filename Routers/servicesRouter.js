const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("pages/services")
});

router.get("/desease", (req, res, next) => {
    res.send("Nurse nu Page")
});

router.get('/desease/add', (req, res, next) => {
    res.send("Form")
});

router.get('/desease/add/success', (req, res, next) => {
    res.send("Success Page")
});

router.get("/desease/list", (req, res, next) => {
    res.send("desease List")
});

router.get("/desease/:id/update", (req, res, next) => {
    res.send("Update")
});

router.get("/desease/:id/update/success", (req, res, next) => {
    res.send("Update Success")
});


router.get('/desease/:id/delete/success', (req, res, next) => {
    res.send("delete Success")
})
module.exports = router;