import API_RESTAURANT from '../globals/api-restaurant';

class Dbrestaurant {
  static async listRestaurant() {
    const response = await fetch(API_RESTAURANT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_RESTAURANT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default Dbrestaurant;
