const express = require('express');
const app = express ();
const data = require('../Controllers/Bollywood');

const dataRouter = express.Router()
dataRouter.route('/bollywood')
.get(data.BollywoodData)
module.exports = dataRouter;