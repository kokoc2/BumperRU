import React from 'react';
import s from './Sort.module.css';
const Sort = (props) => {
  const [open, setOpen] = React.useState(false);
  // const [selected, setSelected] = React.useState(0);
  const arr = [
    { name: 'Популярности', sortCategory: 'Rating' },
    { name: 'По возрастанию цены', sortCategory: '-Price' },
    { name: 'По убыванию цены', sortCategory: 'Price' },
    { name: 'Алфавиту ( А-Я )', sortCategory: '-Name' },
    { name: 'Алфавиту ( Я-А )', sortCategory: 'Name' },
  ];

  const onClickListItem = (i) => {
    props.onClickCategory(i);
    setOpen(false);
  };

  return (
    <div className={s.Body}>
      <div>
        <b className={s.Profile}>Сортировка по: </b>
        <span
          className={s.choice}
          onClick={() => {
            setOpen(!open);
          }}
        >
          {props.value.name}
        </span>
      </div>
      {open && (
        <div className={s.Popup}>
          <ul>
            {arr.map((arr, i) => (
              <div
                key={i}
                onClick={() => onClickListItem(arr)}
                className={props.value.category === arr.category ? s.active : ''}
              >
                <li>{arr.name}</li>
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
