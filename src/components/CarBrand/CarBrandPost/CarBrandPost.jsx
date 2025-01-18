import React from 'react';
import s from './CarBrandPost.module.css';
const CarBrandPost = (props) => {
  return (
    <div className={s.NewsPost}>
      <img src={props.Src} alt='#logo#' className={s.img} />
      {/* <img src={props.Src} alt='#logo#' className={s.img} /> */}

      <div>{props.Header}</div>
    </div>
  );
};

export default CarBrandPost;
