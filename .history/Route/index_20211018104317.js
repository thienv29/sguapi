import tkbCTR from "../Controller/tkbCTR";
function route(app) {
    app.use('/tkb', tkbRoute);
    app.use('/diem', diemRoute);

    
}
module.exports = route;