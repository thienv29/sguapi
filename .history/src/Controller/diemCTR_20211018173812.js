import request from "request";
import jsdom from "jsdom";
const diemCTR = {
    
    getDiemSv(req, res, next) {
        const mssv = req.params.mssv;
        let diem = this.getdiem(mssv)
        res.send(diem)
        
    },
    getDiemListSv(req, res, next) {
        getDiemSv()
    },
};
export default diemCTR;
