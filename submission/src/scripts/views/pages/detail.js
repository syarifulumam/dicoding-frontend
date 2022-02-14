import UrlParser from '../../routes/url-parser';
import RestoranDbSource from "../../data/restorandb-source"
import {restoranDetail} from "../templates/template-creator"
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div class="detail"></div>
      <div id="likeButtonContainer"></div>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoran = await RestoranDbSource.detailRestoran(url.id);
    const listRestoran = document.querySelector('.detail');
    listRestoran.innerHTML = restoranDetail(restoran.restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restoran: {
        id: restoran.restaurant.id,
        pictureId: restoran.restaurant.pictureId,
        name: restoran.restaurant.name,
        city: restoran.restaurant.city,
        rating: restoran.restaurant.rating,
        description: restoran.restaurant.description,
      },
    });
  },
};
 

export default Detail;