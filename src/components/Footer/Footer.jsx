import React from 'react';
import s from './Footer.module.css';
import { NavLink } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div className={s.Footer}>
      <div className={s.Content}>
        <div>Интернет-магазин кузовных автозапчастей</div>
        <div>Адрес: площадь Дзержинского, г.Дзержинск</div>
        <div>
          <a href='https://vk.com/public215722152' className={s.Group}>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/800px-VK_Compact_Logo_%282021-present%29.svg.png'
              alt=''
            />{' '}
          </a>
        </div>
      </div>
      <div>
        <div className={s.Block}>
          {props.CarBrandAdd.map((m, index) => (
            <NavLink to={'МаркаАвто'} className={s.Link} key={index}>
              <div className={s.News}>{m.CarBrand}</div>
            </NavLink>
          ))}
        </div>
      </div>
      {/* <div>
        <div>О нас:</div>
        <div>Магазин кузовных деталей для автомобилей российского и зарубежного производства.</div>
        <div>Тел: 8-(902)-302-22-77</div>
      </div> */}
      <div className={s.Content}>
        <div className={s.ContentHeader}>График работы: </div>
        <div className={s.Chart}>
          <div className={s.ContentTime}>
            <span>День</span>
            <div>Время работы: </div>
          </div>
          <div className={s.ContentTime}>
            <span>Время работы</span>
            <div> с 8:00 - 21:00</div>
          </div>
        </div>
        <div className={s.ContentHeader}>БЕЗ ВЫХОДНЫХ</div>
      </div>
    </div>
  );
};

export default Footer;
