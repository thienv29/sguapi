import express from 'express'
const route = express.Router()
import tkbCTR from '../../Controller/tkbCTR.js'
route.get('/:mssv',tkbCTR.getTkb)



export default route