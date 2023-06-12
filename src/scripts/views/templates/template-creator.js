import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div class="restaurant">
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId}" alt="${restaurant.restaurant.name}" />
</div>
  <div class="detail">
  <h1>${restaurant.restaurant.name}</h1>
  <p>Rating : <b>${restaurant.restaurant.rating}⭐️</b></p>
  <h3>Alamat</h3>
  <p>${restaurant.restaurant.address}</p>
  <h3>Kota</h3>
  <p>${restaurant.restaurant.city}</p>
  <h3>Deskripsi</h3>
  <p>${restaurant.restaurant.description}</p>
  <h3>Menu Makanan</h3>
  <p>${restaurant.restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
  <h3>Menu Minuman</h3>
  <p>${restaurant.restaurant.menus.drinks.map((food) => food.name).join(', ')}</p>
  <h3>Customer Review</h3>
  ${restaurant.restaurant.customerReviews.map(
    (review) => `
    <p>${review.name}</p>
    <p>${review.review}</p>
    <p>${review.date}</p>
    
    
  `,
  )}
  </div>
  
  `;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}"
      src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">     
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h2><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
