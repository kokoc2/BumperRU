import React from 'react';
import s from './ReviewsOffersPost.module.css'
const ReviewsOffersPost=(props)=> {
  return (
    <div className={s.Profile}>
      <div>
        {props.text}
      </div>   
    </div>
  );
}

export default ReviewsOffersPost;