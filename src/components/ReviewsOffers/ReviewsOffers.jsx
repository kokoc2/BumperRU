import React from 'react';
import s from './ReviewsOffers.module.css'
import ReviewsOffersPost from './ReviewsOffersPost/ReviewsOffersPost';
import {addReviewsOffersCreator, addReviewsOffersTempCreator} from '../../redux/reviewsOffersReduser'
const ReviewsOffers=(props)=> {

  let newReviewsOffersElement = React.createRef();

  let onChangeOffers=()=>{
    let tempText = newReviewsOffersElement
    props.onChangeOffersCon(tempText)
  }

  let addReviewsOffers=()=>{
    props.addReviewsOffersCon()
  }

  return (
    <div className={s.Profile}>
      <div>
        Предложения по улучшению, добавление новых марок/автозапчастей 
      </div>
      <div>
        <textarea name="" id="" cols="30" rows="3" ref={newReviewsOffersElement} onChange={onChangeOffers}>{props.MessageAddOffersTemp}</textarea>
      </div>
      <div>
        <button className={s.btn} onClick={addReviewsOffers} placeholder='Я хотел бы...'>Добавить</button>
      </div>
      <div>
        {props.Offers.MessageAddOffers.map(m=><ReviewsOffersPost id={m.id} text = {m.text} />)}
        
      </div>
    </div>
  );
}

export default ReviewsOffers;