function route(app) {
    app.use('/tkb', newsRoute);
    app.use('/course', courseRoute);
    app.use('/me',meRoute)
    app.use('/',siteRoute)

    
}
module.exports = route;