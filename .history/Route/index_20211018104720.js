import diemRoute from 
function route(app) {
    app.use('/tkb', tkbRoute);
    app.use('/diem', diemRoute);

    
}
module.exports = route;