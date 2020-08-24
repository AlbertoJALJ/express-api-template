import express from 'express'
const router = express.Router()
import {index,post} from '../controllers/users'

router.get('/', index)
router.post('/', post)

module.exports = router