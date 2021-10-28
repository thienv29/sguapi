import request from "request";
import jsdom from "jsdom";
const tkbCTR = {
    getTkb(req, res, next) {
        function dispatchTable2(table) {
            //   const thu,tbd,st;
       
            const id = table.querySelector("tbody tr td:nth-child(1)").innerText;
            const name = table.querySelector("tbody tr td:nth-child(2)").innerText;
            const nmh = table.querySelector("tbody tr td:nth-child(3)").innerText;
            const stc = table.querySelector("tbody tr td:nth-child(4)").innerText;
       
            const thu = Array.from(table.querySelectorAll("tbody tr td:nth-child(9) > *")).map(
                 (e) => {
                      return e.innerText;
                 }
            );
            const tbd = Array.from(table.querySelectorAll("tbody tr td:nth-child(10)  > *")).map(
                 (e) => {
                      return e.innerText;
                 }
            );
            const st = Array.from(table.querySelectorAll("tbody tr td:nth-child(11)  > *")).map(
                 (e) => {
                      return e.innerText;
                 }
            );
            const room = Array.from(
                 table.querySelectorAll("tbody tr td:nth-child(12)  > *")
            ).map((e) => {
                 return e.innerText;
            });
       
            return {
                 id,
                 name,
                 nmh,
                 stc,
                 thu,
                 tbd,
                 st,
                 room,
            };
       }
        const mssv = req.params.mssv;
        request(
            `http://thongtindaotao.sgu.edu.vn/Default.aspx?page=thoikhoabieu&sta=1&id=${mssv}`,
            function (error, response, body) {
                if (!error) {
                    const dom = new jsdom.JSDOM(body);
                    let listElement = Array.from(
                        dom.window.document.querySelectorAll(".row-diemTK")
                    );
                    res.send(body);
                } else {
                    console.log(error);
                }
            }
        );
    },
};
export default tkbCTR;
