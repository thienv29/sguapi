
const tkbCTR = {
    getTkb(req, res, next) {
        const mssv = req.params.mssv;
        request(
            `http://thongtindaotao.sgu.edu.vn/Default.aspx?page=thoikhoabieu&sta=1&id=${mssv}`,
            function (error, response, body) {
                if (!error) {
                    res.send(body);
                } else {
                    console.log(error);
                }
            }
        );
    },
};
export default tkbCTR;
