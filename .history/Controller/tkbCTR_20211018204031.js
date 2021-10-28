import request from "request";
import jsdom from "jsdom";
const tkbCTR = {
    getTkb(req, res, next) {
        function dispatchTable2(table) {
            //   const thu,tbd,st;
       
            const id = table.querySelector("tbody tr td:nth-child(1)").textcon;
            const name = table.querySelector("tbody tr td:nth-child(2)").textcon;
            const nmh = table.querySelector("tbody tr td:nth-child(3)").textcon;
            const stc = table.querySelector("tbody tr td:nth-child(4)").textcon;
       
            const thu = Array.from(table.querySelectorAll("tbody tr td:nth-child(9) > *")).map(
                 (e) => {
                      return e.textcon;
                 }
            );
            const tbd = Array.from(table.querySelectorAll("tbody tr td:nth-child(10)  > *")).map(
                 (e) => {
                      return e.textcon;
                 }
            );
            const st = Array.from(table.querySelectorAll("tbody tr td:nth-child(11)  > *")).map(
                 (e) => {
                      return e.textcon;
                 }
            );
            const room = Array.from(
                 table.querySelectorAll("tbody tr td:nth-child(12)  > *")
            ).map((e) => {
                 return e.textcon;
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
        let subjects=[]
        request(
            `http://thongtindaotao.sgu.edu.vn/Default.aspx?page=thoikhoabieu&sta=1&id=${mssv}`,
            function (error, response, body) {
                if (!error) {
                    const dom = new jsdom.JSDOM(body);
                    let listSubjects = Array.from(
                        dom.window.document.querySelectorAll(".grid-roll2 > .body-table")
                    );
                    listSubjects.forEach((table) => {
                        let e = dispatchTable2(table);
                        subjects.push(e);
                    })
                    res.send(subjects);
                } else {
                    console.log(error);
                }
            }
        );
    },
};
export default tkbCTR;
