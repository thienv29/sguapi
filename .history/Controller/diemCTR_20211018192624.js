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
                    res.send(diemso)
                } else {
                    res.send(error)
                }
            }
        );
    },
    getDiemListSv(req, res, next) {
        const listMssv= ['3119560069','3119330575','3119330209']
        let listObjectDiem = []
        listMssv.forEach((mssv) => {
            request(`http://thongtindaotao.sgu.edu.vn/Default.aspx?page=xemdiemthi&id=${mssv}`,
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
                        listObjectDiem.push(diemso)
                    } else {
                        res.send(error)
                    }
                }
            );
        })
        let checkRespon =setInterval(() => {
            if (listMssv.length ==listObjectDiem.length) {
                listObjectDiem.sort(lis)
                res.send(listObjectDiem)

                clearInterval(checkRespon)
            }
        }, 200);
    },
};
export default diemCTR;
