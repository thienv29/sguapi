import  express  from "express";
import morgan from "morgan";
const port = 3000;
const app = express();
import request from "request"

var parseMyAwesomeHtml = function(html) {
    log
};

request("http://www.myawesomepage.com/", function (error, response, body) {
    if (!error) {
        parseMyAwesomeHtml(body);
    } else {
        console.log(error);
    }
});
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});