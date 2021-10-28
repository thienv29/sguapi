import request from "request";
import jsdom from "jsdom";
const requestSgu =  {
    asyrequestDiem(mssv){
        request(
            'http://thongtindaotao.sgu.edu.vn/Default.aspx?page=xemdiemthi&id='+mssv,
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
                    return body
                } else {
                    return error
                }
            }
        );
    },
    requestTkb(mssv){
        request(
            'http://thongtindaotao.sgu.edu.vn/Default.aspx?page=thoikhoabieu&sta=1&id='+mssv,
            function (error, response, body) {
                if (!error) {
                    
                    return body
                } else {
                    return error
                }
            }
        );
    }
    
}
export default requestSgu;