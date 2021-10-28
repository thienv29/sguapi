import diemRoute from "./diemRoute";
import tkbRoute from "./tkbRoute.js";

function route(app) {
  app.use("/tkb", tkbRoute);
  app.use("/diem", diemRoute);
}
export default route;
