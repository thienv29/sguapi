import tkbCTR from "../Controller/tkbCTR";
import 
function route(app) {
    app.use('/tkb', tkbRoute);
    app.use('/diem', diemRoute);

    
}
module.exports = route;