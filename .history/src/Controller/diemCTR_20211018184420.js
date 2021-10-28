import request from "request";
import jsdom from "jsdom";
import requestSgu from "./callBack.js";
const diemCTR = {
    getDiemSv(req, res, next) {
        const mssv = req.params.mssv;
        res.send(requestSgu.requestDiem(mssv))
    },
    getDiemListSv(req, res, next) {
        
    },
};
export default diemCTR;
