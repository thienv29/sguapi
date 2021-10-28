function route(app) {
    app.use('/tkb', newsRoute);
    app.use('/diem', courseRoute);

    
}
module.exports = route;