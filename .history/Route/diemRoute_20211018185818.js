import express from 'express'
const route = express.Router()
import diemCTR from '../Controller/diemCTR.js'
route.get('/:mssv',diemCTR.getDiemSv)
route.post('/ss',diemCTR.getDiemListSv)

export default route
