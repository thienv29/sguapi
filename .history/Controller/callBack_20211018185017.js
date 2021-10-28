import request from "request";
import jsdom from "jsdom";
const requestSgu =  {
    async requestDiem(mssv){
        
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