import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './HeaderButton.module.css';
import Search from './Search/Search';

const HeaderButton = (props) => {
  return (
    <div className={s.Content}>
      <div className={s.Block}>
        <NavLink to='Information' className={(navData) => (navData.isActive ? s.active : s.link)}>
          Информация
        </NavLink>
      </div>
      <div className={s.Block}>
        <NavLink
          to='PaymentDelivery'
          className={(navData) => (navData.isActive ? s.active : s.link)}
        >
          Оплата
        </NavLink>
      </div>
      <div className={s.Block}>
        <NavLink to='Contacts' className={(navData) => (navData.isActive ? s.active : s.link)}>
          Контакты
        </NavLink>
      </div>
      <div className={s.Block}>
        <Search
          setSearchSpacePart={props.setSearchSpacePart}
          searchSpacePart={props.searchSpacePart}
        />
      </div>
    </div>
  );
};

export default HeaderButton;
