const express = require('express')
const route = express.Router()

const services = require('../services/render')

/**
 * @description Root Route
 * @method GET/
 */
route.get('/', services.homeRoutes);

/**
 * @description add users
 * @method GET/add-user
 */
route.get('/', services.add_user)

/**
 * @description update user
 * @method GET/update-user
 */
route.get('/', services.add_user)

module.exports=route


// route.get('/', (req,res) =>{
//     res.render('index');
// })

// route.get('/add-user',(req,res) =>{
//     res.render('add_user');
// })

// route.get('/update-user',(req,res)=>{
//     res.render('update_user');
// })