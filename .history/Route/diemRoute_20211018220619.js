import express from 'express'
const route = express.Router()
import diemCTR from '../Controller/diemCTR.js'
route.get('/list',diemCTR.getDiemListSv)
route.get('/:mssv',diemCTR.getDiemSv)
export default route
