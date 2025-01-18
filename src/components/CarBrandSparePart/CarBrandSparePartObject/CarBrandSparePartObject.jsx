import React from 'react';
import s from './CarBrandSparePartObject.module.css';
const CarBrandSparePartObject = (props) => {
  return (
    <div className={s.NewsPost}>
      <img src={props.Src} alt='' className={s.img} />
      <div>{props.SpacePart}</div>
    </div>
  );
};

export default CarBrandSparePartObject;
