import React from 'react';
import s from './CarBrandSparePart.module.css';
import CarBrandSparePartObject from './CarBrandSparePartObject/CarBrandSparePartObject';
import { NavLink } from 'react-router-dom';
import Sort from '../Sort/Sort';

const CarBrandSparePart = (props) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  let onClickBrand = () => {
    console.log('11111111111111111111111111');
  };
  let Temp = (props) => {};

  return (
    <div className={s.Profile}>
      <div>
        <div className={s.blockSort}>
          Вы выбрали : <span>{props.searchCarBrand}</span>{' '}
        </div>
        <div className={s.blockSort}>Выберите интересующую запчасть</div>
      </div>

      <div className={s.Block}>
        {props.SpacePartAdd.map((m, index) => (
          <div className={s.News} key={index}>
            <NavLink
              // to={'ProductSpacePartCarBrand/' + `${m.SpacePart}`}

              to={`${m.SpacePart}`}
              //onClick={() => alert(m.CarBrand)}
              onClick={() => props.setSearchSpacePart(m.SpacePartObj)}
              className={s.Link}
            >
              <CarBrandSparePartObject SpacePart={m.SpacePart} Src={m.Src} />
            </NavLink>
          </div>
        ))}
      </div>

      {/* <div className={s.News}>
        {props.SpacePartAdd.map((m) => (
          <CarBrandSparePartObject CarBrandSparePartObject={m.SpacePart} Src={m.Src} />
        ))}
      </div> */}
    </div>
  );
};

export default CarBrandSparePart;
