import  express  from "express";
import morgan from "morgan";
const port = 3000;
const app = express();

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});