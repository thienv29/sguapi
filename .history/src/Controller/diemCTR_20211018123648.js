import request from "request";
import jsdom from "jsdom";
const diemCTR = {
    getDiemSv(req, res, next) {
        const mssv = req.params.mssv;
        request(
            `http://thongtindaotao.sgu.edu.vn/Default.aspx?page=xemdiemthi&id=${mssv}`,
            function (error, response, body) {
                if (!error) {
                   
                    const dom = new jsdom.JSDOM(body);
                    console.log(dom.window.document.querySelectorAll(".row-diemTK").textContent);
                    res.send(body);
                } else {
                    console.log(error);
                }
            }
        );
    },
    getDiemListSv(req, res, next) {},
};
export default diemCTR;
