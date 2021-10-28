import  express  from "express";
import morgan from "morgan";
const port = 3000;
const app = express();
import http from 'http';

var options = {
    host: 'http://thongtindaotao.sgu.edu.vn/Default.aspx?page=xemdiemthi&id=3119560069',
    path: '/'
}
var request = http.request(options, function (res) {
    var data = '';
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', function () {
        console.log(data);

    });
});
request.on('error', function (e) {
    console.log(e.message);
});
request.end();
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});