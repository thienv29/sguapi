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
                    let diemso = {
                        mssv: `${mssv}`,
                        diemhe10: "",
                        diemhe3: "",
                    };

                    diemso.diemhe10 =
                        listElement[0].querySelector(".Label:nth-child(2)").textContent;
                    diemso.diemhe3 =
                        listElement[1].querySelector(".Label:nth-child(2)").textContent;
                    res.send(diemso);
                } else {
                    res.send(error);
                }
            }
        );
    },
    getInfoListSv(req,res,next){
        const listMssv = req.body;
        console.log(req);
        let listSuccess = [];
        let listErr = [];
        listMssv.forEach((mssv) => {
            console.log(mssv);
            let diemso = {
                id: mssv,
                fullname: "",
                class: "",
                birth: "",
                faculty: "",
                major: "",
            };
            request(
                `http://thongtindaotao.sgu.edu.vn/Default.aspx?page=thoikhoabieu&sta=1&id=${mssv}`,
                (error, response, body) => {
                    if (!error) {
                        try {
                            const dom = new jsdom.JSDOM(body);
                            const fullname =
                                dom.window.document.querySelector(
                                    "#ctl00_ContentPlaceHolder1_ctl00_lblContentTenSV"
                                ).textContent;
                            const classM =
                                dom.window.document.querySelector(
                                    "#ctl00_ContentPlaceHolder1_ctl00_lblContentLopSV"
                                ).textContent;

                            if (fullname.includes("Ngày sinh:")) {
                                diemso.fullname = fullname.split("-")[0];
                                diemso.birth = fullname
                                    .split("-")[1]
                                    .split(":")[1];
                            } else if (fullname.includes("Ngày sinh")) {
                                diemso.fullname =
                                    fullname.split("Ngày sinh")[0];
                                diemso.birth =
                                    fullname.split("Ngày sinh")[1];
                            } else {
                                diemso.fullname =
                                    fullname.split("NgaySinh")[0];
                                diemso.birth =
                                    fullname.split("NgaySinh")[1];
                            }

                            diemso.class = classM.substring(0, 8);
                            if (classM.includes("Nganh")) {
                                diemso.major = classM
                                    .split("Nganh")[1]
                                    .split("Khoa")[0];
                                diemso.faculty = classM
                                    .split("Nganh")[1]
                                    .split("Khoa")[1];
                            } else if (
                                classM.includes("Ngành:") &&
                                classM.includes("Khoa:")
                            ) {
                                diemso.major = classM
                                    .split("-")[1]
                                    .split(":")[1];
                                diemso.faculty = classM
                                    .split("-")[2]
                                    .split(":")[1];
                            } else if (
                                classM.includes("Ngành:") &&
                                classM.includes("Khoa")
                            ) {
                                diemso.major = classM
                                    .split("Ngành:")[1]
                                    .split("Khoa")[0];
                                diemso.faculty = classM
                                    .split("Ngành:")[1]
                                    .split("Khoa")[1];
                            } else {
                                diemso.major = classM
                                    .split("Ngành")[1]
                                    .split("-")[0];
                                diemso.faculty = classM
                                    .split("Ngành")[1]
                                    .split("Khoa:")[1];
                            }
                            //check 2
                            if (
                                diemso.major == undefined ||
                                diemso.faculty == undefined ||
                                diemso.fullname == undefined ||
                                diemso.birth == undefined ||
                                diemso.class == undefined
                            ) {
                                //DCT1201NgànhCông nghệ thông tinKhoaCông nghệ thông tin
                                diemso.major = classM
                                    .split("Ngành")[1]
                                    .split("Khoa")[0];
                                diemso.faculty = classM
                                    .split("Ngành")[1]
                                    .split("Khoa")[1];
                            }
                            listSuccess.push(diemso);
                        } catch (error2) {
                            listErr.push(mssv);
                            console.log("err0", mssv);
                        }
                    } else {
                        listErr.push(mssv);
                        console.log("err1");
                    }
                }
            );
        })
        let checkRespon = setInterval(() => {
            console.log(listSuccess.length);
            console.log(listErr.length);
            console.log(listErr);
            console.log(listMssv.length);
            if (listMssv.length <= listSuccess.length + listErr.length) {
                listSuccess.sort((a, b) => {
                    return a.mssv - b.mssv;
                });
                res.send({ listSuccess, listErr });
                clearInterval(checkRespon);
            }
        }, 1000);
    },
    getDiemListSv(req, res, next) {
        const listMssv = req.body;

        console.log(req);
        let listSuccess = [];
        let listErr = [];
        listMssv.forEach((mssv) => {
            console.log(mssv);
            let diemso = {
                id: mssv,
                diemhe10: "",
                diemhe3: "",
                
            };
            request(
                `http://thongtindaotao.sgu.edu.vn/Default.aspx?page=xemdiemthi&id=${mssv}`,
                function (error, response, body) {
                    if (!error) {
                        try {
                            const dom = new jsdom.JSDOM(body);
                            let listElement = Array.from(
                                dom.window.document.querySelectorAll(".row-diemTK")
                            );
                            listElement = listElement.slice(
                                listElement.length - 6,
                                listElement.length - 4
                            );
                            diemso.diemhe10 =
                                listElement[0].querySelector(
                                    ".Label:nth-child(2)"
                                ).textContent;
                            diemso.diemhe3 =
                                listElement[1].querySelector(
                                    ".Label:nth-child(2)"
                                ).textContent;
                                listSuccess.push(diemso);
                        } catch (error) {
                            listErr.push(mssv);
                            console.log("err2");
                        }
                    } else {
                        listErr.push(mssv);
                        console.log("err3");
                    }
                }
            );
        });
        let checkRespon = setInterval(() => {
            console.log(listSuccess.length);
            console.log(listErr.length);
            console.log(listErr);
            console.log(listMssv.length);
            if (listMssv.length <= listSuccess.length + listErr.length) {
                listSuccess.sort((a, b) => {
                    return a.mssv - b.mssv;
                });
                res.send({ listSuccess, listErr });
                clearInterval(checkRespon);
            }
        }, 1000);
    },
};
export default diemCTR;
