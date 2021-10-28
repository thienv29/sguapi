import request from "request";
import jsdom from "jsdom");
const diemCTR = {
    getDiemSv(req, res, next) {
        const mssv = req.params.mssv;
        request(
            `http://thongtindaotao.sgu.edu.vn/Default.aspx?page=xemdiemthi&id=${mssv}`,
            function (error, response, body) {
                if (!error) {
                    const jsdom = require("jsdom");
                    const dom = new jsdom.JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
                    let v = dom.window.document.querySelector(".row-diemTK").textContent; // 'Hello world'
                    res.send(v);
                } else {
                    console.log(error);
                }
            }
        );
    },
    getDiemListSv(req, res, next) {},
};
export default diemCTR;
