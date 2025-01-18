import React from 'react';
import s from './CarBrand.module.css';
import CarBrandPost from './CarBrandPost/CarBrandPost';
import { NavLink } from 'react-router-dom';

const CarBrand = (props) => {
  return (
    <div className={s.Body}>
      {/* <NavLink to='CarBrandSparePart' className={s.News} onClick={onClickBrand}>
        {props.CarBrandAdd.map((m) => (
          <CarBrandPost Header={m.CarBrand} Des={m.Des} Src={m.Src} />
        ))}
      </NavLink> */}
      <div className={s.Block}>
        {props.CarBrandAdd.map((m, i) => (
          <div className={s.News} key={i}>
            <NavLink
              // to={'CarBrandSparePart/' + `${m.CarBrand}`}

              to={'МаркаАвто'}
              onClick={() => props.setSearchCarBrand(m.CarBrand)}
              className={s.Link}
            >
              <CarBrandPost Header={m.CarBrand} Des={m.Des} Src={m.Src} />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarBrand;
