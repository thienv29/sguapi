import request from "request";
import jsdom from "jsdom";
class diemCTR  {
    getdiem(mssv){
        request(
            `http://thongtindaotao.sgu.edu.vn/Default.aspx?page=xemdiemthi&id=${mssv}`,
            function (error, response, body) {
                if (!error) {
                    const dom = new jsdom.JSDOM(body);
                    let listElement = Array.from(
                        dom.window.document.querySelectorAll(".row-diemTK")
                    );
                    listElement = listElement.slice(
                        listElement.length - 6,
                        listElement.length - 4
                    );
                    let diemso={
                        mssv:`${mssv}`,
                        diemhe10:'',
                        diemhe3:''
                    }
                    
                    diemso.diemhe10 = listElement[0].querySelector(".Label:nth-child(2)").textContent;
                    diemso.diemhe3 = listElement[1].querySelector(".Label:nth-child(2)").textContent;
                    return(diemso)
                } else {
                    console.log(error);
                }
            }
        );
    }
    getDiemSv(req, res, next) {
        const mssv = req.params.mssv;
        let diem = this.getdiem(mssv)
        res.send(diem)
        
    },
    getDiemListSv(req, res, next) {
        getDiemSv()
    },
};
export default new diemCTR();
