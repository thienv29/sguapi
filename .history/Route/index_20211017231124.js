function route(app) {
    app.use('/news', newsRoute);
    app.use('/course', courseRoute);
    app.use('/me',meRoute)
    app.use('/',siteRoute)

    
}
module.exports = route;