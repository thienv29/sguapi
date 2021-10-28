import request from "request";
const diemCTR = {
    getDiemSv(req, res, next) {
        const mssv = req.params.mssv;
        request(
            `http://thongtindaotao.sgu.edu.vn/Default.aspx?page=xemdiemthi&id=${mssv}`,
            function (error, response, body) {
                if (!error) {
                    var parser = new DOMParser();
                    var doc = parser.parseFromString(html, "text/html");
                    var paragraphs = doc.querySelectorAll(".row-diemTK");
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
