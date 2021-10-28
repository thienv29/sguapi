import express from "express";
import morgan from "morgan";
const port = process.env.PORT || 5000;
const app = express();
import cors from 'cors'

import route from "../Route/index.js";
app.use(cors()) // Use this after the variable declaration
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
route(app);
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
