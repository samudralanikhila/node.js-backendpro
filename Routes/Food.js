const express =require('express')
const app = express()
const data =  require("../Controllers/Food")

const dataRouter = express.Router()
dataRouter.route('/food').get(data.Fooddata)

module.exports = dataRouter