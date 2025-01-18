import { combineReducers, legacy_createStore as createStore } from 'redux';
import ReviewsReducer from './reviewsReduser';
import ReviewsOffersReduser from './reviewsOffersReduser';

let reducers = combineReducers({
  Reviews: ReviewsReducer,
  Offers: ReviewsOffersReduser,
});

let store = createStore(reducers);

export default store;
