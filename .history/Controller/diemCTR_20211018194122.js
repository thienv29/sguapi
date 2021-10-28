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
        const listMssv= [
            3119560002, 
            3119560004, 
            3119560005, 
            3119560006, 
            3119560007, 
            3119560008, 
            3119560009, 
            3119560010, 
            3119560012, 
            3119560013, 
            3119560014, 
            3119560015, 
            3119560017, 
            3119560019, 
            3119560021, 
            3119560023, 
            3119560024, 
            3119560026, 
            3119560027, 
            3119560029, 
            3119560030, 
            3119560031, 
            3119560032, 
            3119560033, 
            3119560034, 
            3119560037, 
            3119560038, 
            3119560039, 
            3119560040, 
            3119560042, 
            3119560043, 
            3119560045, 
            3119560046, 
            3119560047, 
            3119560048, 
            3119560050, 
            3119560051, 
            3119560052, 
            3119560053, 
            3119560054, 
            3119560056, 
            3119560057, 
            3119560058, 
            3119560059, 
            3119560061, 
            3119560062, 
            3119560065, 
            3119560066, 
            3119560067, 
            3119560069, 
            3119560070, 
            3119560071, 
            3119560072, 
            3119560073, 
            3119560074, 
            3119560075, 
            3119560076, 
            3119560077, 
            3119560078, 
            3119560079, 
            3119560081, 
            3119560082, 
            3119560083, 
            3119560085,]
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
                            mssv:mssv,
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
                listObjectDiem.sort((a,b) => {
                  return a.mssv -b.mssv
                })
                res.send(listObjectDiem)

                clearInterval(checkRespon)
            }
        }, 200);
    },
};
export default diemCTR;
