import React from 'react';
import CarBrand from '../CarBrand/CarBrand';
import Product from '../ProductSpacePartCarBrand/Product/Product';
import s from './Profile.module.css';
const Profile = (props) => {
  return (
    <div className={s.Profile}>
      <div className={s.Header}>КАТАЛОГ АВТОЗАПЧАСТЕЙ ПО МАРКЕ АВТОМОБИЛЯ</div>
      <div>
        <CarBrand
          CarBrandAdd={props.CarBrandAdd}
          setSearchCarBrand={props.setSearchCarBrand}
          searchCarBrand={props.searchCarBrand}
        />
      </div>
    </div>
  );
};

export default Profile;
