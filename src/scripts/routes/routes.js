import DaftarRestaurant from "../views/pages/list-restaurant";
import DetailResto from "../views/pages/detail";
import Like from '../views/pages/favorite';

const routes = {
  "/": DaftarRestaurant, // default page
  "/list-restaurant": DaftarRestaurant,
  "/like": Like,
  "/detail/:id": DetailResto,

};

export default routes;
