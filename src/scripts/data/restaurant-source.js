import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async homeRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async favoriteRestaurants() {
    const response = await fetch(API_ENDPOINT.review);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantSource;
