import React from 'react';
import s from './Search.module.css';
import { NavLink } from 'react-router-dom';
const Search = (props) => {
  return (
    <div className={s.Profile}>
      <NavLink to={'МаркаАвто/Поиск'}>
        <svg
          // onClick={() => <NavLink to={'МаркаАвто/Поиск'}></NavLink>}
          className={s.iconSearch}
          version='1.1'
          id='Capa_1'
          xmlns='http://www.w3.org/2000/svg'
          x='0px'
          y='0px'
          viewBox='0 0 612.08 612.08'
        >
          <g>
            <path
              d='M237.927,0C106.555,0,0.035,106.52,0.035,237.893c0,131.373,106.52,237.893,237.893,237.893
		c50.518,0,97.368-15.757,135.879-42.597l0.028-0.028l176.432,176.433c3.274,3.274,8.48,3.358,11.839,0l47.551-47.551
		c3.274-3.274,3.106-8.703-0.028-11.838L433.223,373.8c26.84-38.539,42.597-85.39,42.597-135.907C475.82,106.52,369.3,0,237.927,0z
		 M237.927,419.811c-100.475,0-181.918-81.443-181.918-181.918S137.453,55.975,237.927,55.975s181.918,81.443,181.918,181.918
		S338.402,419.811,237.927,419.811z'
            />
          </g>
        </svg>
      </NavLink>
      <input
        className={s.input}
        type='text'
        placeholder='Я ищу...'
        value={props.searchSpacePart}
        onChange={(event) => props.setSearchSpacePart(event.target.value)}
      />
      <svg
        className={s.iconClear}
        onClick={(event) => props.setSearchSpacePart('')}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
      >
        <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
      </svg>
    </div>
  );
};

export default Search;
