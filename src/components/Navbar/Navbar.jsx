import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navbar.module.css';
const Navbar = (props) => {
  return (
    <div className={s.Content}>
      <div>
        <NavLink to='/' className={(navData) => (navData.isActive ? s.active : s.link)}>
          Главная
        </NavLink>
      </div>
      <div>
        <NavLink
          to='Bumper'
          className={(navData) => (navData.isActive ? s.active : s.link)}
          // onClick={() => props.setSearchClickSpacePart('Бампер')}
        >
          Бампера
        </NavLink>
      </div>
      <div>
        <NavLink
          to='Doors'
          className={(navData) => (navData.isActive ? s.active : s.link)}
          // onClick={() => props.setSearchClickSpacePart('Дверь')}
        >
          Двери
        </NavLink>
      </div>
      <div>
        <NavLink
          to='Bonnet'
          className={(navData) => (navData.isActive ? s.active : s.link)}
          // onClick={() => props.setSearchClickSpacePart('Капот')}
        >
          Капот
        </NavLink>
      </div>
      <div>
        <NavLink
          to='Wing'
          className={(navData) => (navData.isActive ? s.active : s.link)}
          // onClick={() => props.setSearchClickSpacePart('Крыло')}
        >
          Крыло
        </NavLink>
      </div>
      <div>
        <NavLink
          to='Trunk'
          className={(navData) => (navData.isActive ? s.active : s.link)}
          // onClick={() => props.setSearchClickSpacePart('Багажник')}
        >
          Багажник
        </NavLink>
      </div>
      <div>
        <NavLink
          to='Optict'
          className={(navData) => (navData.isActive ? s.active : s.link)}
          // onClick={() => props.setSearchClickSpacePart('Оптика')}
        >
          Оптика
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
