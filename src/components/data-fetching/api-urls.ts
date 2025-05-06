const BASE_URL = 'https://16.design.htmlacademy.pro';

export const API_URLS = {
  GET_OFFER_DETAIL: `${BASE_URL}/six-cities/offers/:offerId`,
  GET_ALL_OFFERS: `${BASE_URL}/six-cities/offers`,
  GET_NEARBY_OFFERS: `${BASE_URL}/six-cities/offers/:offerId/nearby`,
  GET_FAVORITES: `${BASE_URL}/six-cities/favorite`,
  GET_REVIEWS: `${BASE_URL}/six-cities/comments/:offerId`,
} as const;
