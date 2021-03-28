const express = require("express")
const router = express.Router()
const Formdata = require("../models/form")

router.get('/', (req, res) => {
    res.render("form")
})

router.post("/", async (req, res) => {
    try {


        const registerUser = await new Formdata({
            Username: req.body.Username,
            Useremail: req.body.Useremail,
            Userscaling: req.body.Userscaling,
            place: req.body.place,
            content: req.body.content
        })
        console.log(req.body)
        const registered = await registerUser.save()
    } catch (error) {
        console.log(error)
        res.status(400).send();
    }
})

module.exports = router