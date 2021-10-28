import express from 'express'
const route = express.Router()
route.get('/list',diemCTR.getDiemListSv)
import diemCTR from '../Controller/diemCTR.js'
route.get('/:mssv',diemCTR.getDiemSv)

export default route
