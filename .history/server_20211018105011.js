import express from "express";
import morgan from "morgan";
const port = 3000;
const app = express();
import request from "request";
app.use(morgan('combined'))

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
