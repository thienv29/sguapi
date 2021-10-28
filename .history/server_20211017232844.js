import  express  from "express";
import morgan from "morgan";
const port = 3000;
const app = express();
import request from "request"


app.get('/:mssv',(req,res,next) => {
    mssv = req.params.mssv
    request(`http://thongtindaotao.sgu.edu.vn/Default.aspx?page=xemdiemthi&id=${mssv}`, function (error, response, body) {
        if (!error) {
            res.send(body)
        } else {
            console.log(error);
        }
    });
})
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});