import express from "express";
import morgan from "morgan";
const port = 3000;
const app = express();
import route from "./Route/index.js";
app.use(morgan('combined'))

route(app);
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
