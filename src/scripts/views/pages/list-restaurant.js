import Dbrestaurant from "../../data/db-restaurant";
import { createitemrestaurant,LoadingIndicator,} from "../templates/restaurant-content";

const DaftarRestaurant = {
  async render() {
    return `
      <section class="content">  
        <div class="katalog">
          <h1 tabindex="0" class="katalog_label">Explore Restaurant</h1>
          <div id="restaurants" class="posts">
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    this.renderLoading();
    const restaurants = await Dbrestaurant.listRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createitemrestaurant(restaurant);
    });

    this._showHero();
    this._hideHero();
    
  },
  _showHero() {
    const heroContent = document.querySelector("hero-section");
    heroContent.style.display = "block";
  },

  _hideHero() {
    const heroContent = document.querySelector("favorite-section");
    heroContent.style.display = "none";
  },

  renderLoading() {
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = LoadingIndicator();
    
  },

  renderError(message) {
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = `<p class="error-message">${message}</p>`;
  },
};

export default DaftarRestaurant;
