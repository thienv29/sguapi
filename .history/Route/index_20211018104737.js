import diemRoute from './diemRoute';
import tkbRoute from './tkbRoute';

function route(app) {
    app.use('/tkb', tkbRoute);
    app.use('/diem', diemRoute);

    
}
module.exports = route;