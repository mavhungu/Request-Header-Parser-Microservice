const express = require('express')
const router = express.Router()
const whoamicontroller = require('../controllers/whoamicontroller')

router.route('/')
.get(whoamicontroller)

module.exports= router;