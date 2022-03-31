const express = require('express')
const hellocontroller = require('../controllers/hellocontroller')
const router = express.Router()

router.route('/')
.get(hellocontroller)

module.exports = router;