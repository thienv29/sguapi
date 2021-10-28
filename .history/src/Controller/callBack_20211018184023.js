const requestDiem = (mssv) => {
    const apiDiem = 'http://thongtindaotao.sgu.edu.vn/Default.aspx?page=xemdiemthi&id='
    const apiTkb = 'http://thongtindaotao.sgu.edu.vn/Default.aspx?page=thoikhoabieu&sta=1&id='
    request(
        apiDiem+mssv,
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
                return diemso
            } else {
                return error
            }
        }
    );
}
export default requestDiem;