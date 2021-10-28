function route(app) {
    app.use('/tkb', tkbRoute);
    app.use('/diem', courseRoute);

    
}
module.exports = route;