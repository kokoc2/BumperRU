import React from 'react';
import s from './ReviewsOffers.module.css'
import ReviewsOffersPost from './ReviewsOffersPost/ReviewsOffersPost';
import ReviewsOffers from './ReviewsOffers';
import {addReviewsOffersCreator, addReviewsOffersTempCreator} from '../../redux/reviewsOffersReduser'

const ReviewsOffersContainer=(props)=> {

  let onChangeOffers=(tempText)=>{
    props.dispatch(addReviewsOffersTempCreator(tempText))
  } 

  let addReviewsOffers=()=>{
    props.dispatch(addReviewsOffersCreator())
  }

  return (
    <ReviewsOffers store={props.store.Offers} onChangeOffersCon={onChangeOffers} addReviewsOffersCon={addReviewsOffers}/>
  );
}

export default ReviewsOffersContainer;