import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createitemrestaurant } from '../templates/restaurant-content';
 
const Like = {
  async render() {
    return `
    <div class="katalog">
    <h1 tabindex="0" class="katalog_label">Favorite Restaurant</h1>
    <div id="Restaurant"class="posts">
    </div>
  </div>
</section>
    `;
  },
 
  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const RestaurantContainer = document.querySelector('.posts');
    
    restaurant.forEach((restaurant) => {
      RestaurantContainer.innerHTML += createitemrestaurant(restaurant);
    });

    this._showHero();
    this._hideHero();
  },
  _showHero() {
    const heroContent = document.querySelector("favorite-section");
    heroContent.style.display = "block";
  },

  _hideHero() {
    const heroContent = document.querySelector("hero-section");
    heroContent.style.display = "none";
  },
  
};
 export default Like;