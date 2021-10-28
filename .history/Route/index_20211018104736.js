import diemRoute from './diemRoute';
import tkbRoute from './diemRoute';

function route(app) {
    app.use('/tkb', tkbRoute);
    app.use('/diem', diemRoute);

    
}
module.exports = route;