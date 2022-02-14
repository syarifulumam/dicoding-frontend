import CONFIG from '../../globals/config';
 
const restoranDetail = (restoran) => `
<div class="detail">
    <div>
    <img src="${CONFIG.BASE_IMAGE_URL + restoran.pictureId}" width="100%" alt="${restoran.name} Restaurant">
    </div>
    <div class="deskripsi">
        <h1>${restoran.name}</h1>
        <p>${restoran.description.substring(0, 500 - 3)}...</p>
        <div class="alamat">Alamat : <i class="fa-solid fa-location-dot" style="color: #EB3333;"></i> ${restoran.address}, ${restoran.city}</div>
        <div class="menus">
        <ul>
            <li><b>Makanan</b></li>
            ${restoran.menus.foods.map((food) => (
                `<li> ${food.name} </li>`
            ))}
        </ul>
        <ul>
            <li><b>Minuman</b></li>
            ${restoran.menus.drinks.map((drink) => (
                `<li> ${drink.name} </li>`
            ))}
        </ul>
        </div>
        <h2>Review</h2>
        ${restoran.customerReviews.map((value) => 
            `<p> ${value.date}</p><p> ${value.name} : " ${value.review} "</p>`
        )}
    </div>
</div>
`;
 
const homeRestoran = (restoran) => `
    <a href="/#/detail/${restoran.id}"><div class="card">
    <img src="${CONFIG.BASE_IMAGE_URL + restoran.pictureId}" width="250" alt="${restoran.name} Restaurant">
    <div class="card-header">
        <span><i class="fa-solid fa-star" style="color: gold;"></i> ${restoran.rating}</span>
        <span><i class="fa-solid fa-location-dot" style="color: #EB3333;"></i> ${restoran.city}</span>
    </div>
    <div class="card-body">
        <h4>${restoran.name}</h4>
        <p>${restoran.description.substring(0, 100 - 3)}...</p>
    </div>
    </div></a>
  `;

  const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
 
export { homeRestoran, restoranDetail, createLikeButtonTemplate, createLikedButtonTemplate,};