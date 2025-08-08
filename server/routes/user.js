const express=require('express')
const auth = require('../middleware/auth')
const getUser = require('../controllers/getUser')
const logout = require('../controllers/logout')
const getAccess = require('../controllers/getAccess')

const router=express.Router()

router.get('/profile',auth,getUser)
router.get('/logout',logout)
router.get('/access',auth,getAccess)

module.exports=router