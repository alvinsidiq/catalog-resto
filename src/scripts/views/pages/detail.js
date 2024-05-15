import parselurl from "../../routes/parsel-url";
import Dbrestaurant from "../../data/db-restaurant";
import { DetailRestoku } from "../templates/restaurant-content";
import LikeButtonInitiator from '../../utils/like-button-initiator';
const DetailResto = {
  async render() {
    return `
    <section class="content">
      <div class="katalog">
        <h1 tabindex="0" class="katalog_label">Detail Restaurant</h1>
        <div class="resto-detail">
        </div>
      </div>

      <div id="likeButtonContainer"></div>
    </section>
    
    `;
  },

  async afterRender() {
    
    const url = parselurl.parseActiveUrlWithoutCombiner();
    const detail = await Dbrestaurant.detailRestaurant(url.id);
    const detailContainer = document.querySelector(".resto-detail");
    

    detailContainer.innerHTML = DetailRestoku(detail);
    
    
    this._hideHero();

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: detail.id,
        name: detail.name,
        city: detail.city,
        description: detail.description,
        pictureId: detail.pictureId,
        rating: detail.rating,
      },
    });
  },

  _hideHero() {
    const heroContent = document.querySelector("hero-section");
    heroContent.style.display = "none";
  },

  
};

export default DetailResto;
