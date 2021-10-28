import express from 'express'
const route = express.Router()
import diemCTR from '../Controller/diemCTR'
route.get('/:mssv',diemCTR.getDiemSv)
route.post
