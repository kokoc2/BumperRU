import React from 'react';
import s from './Header.module.css';
import HeaderButton from './HeadersButton/HeaderButton';

const Header = (props) => {
  return (
    <div className={s.Header}>
      <div>
        <HeaderButton
          setSearchSpacePart={props.setSearchSpacePart}
          searchSpacePart={props.searchSpacePart}
        />
      </div>
      <div className={s.HeaderContent}>
        <img
          className={s.Ava}
          src='https://sun9-61.userapi.com/impg/JHG46jrqEgBQYeQBKEe0VDCEnFMQFxVUJLOpWw/uDe7KD9vZl8.jpg?size=2560x1024&quality=95&sign=f336d67aa942feeaea045193d1b24b89&type=album'
          alt=''
        />
        <div className={s.Block}>
          <div>Адрес: площадь Дзержинского, г.Дзержинск</div>
          <div>График работы: с 8:00 - 21:00 БЕЗ ВЫХОДНЫХ</div>
        </div>
        <div className={s.Block}>
          <div>
            <a href='https://vk.com/public215722152' className={s.Group}>
              Наша группа в VK:{' '}
              <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/800px-VK_Compact_Logo_%282021-present%29.svg.png'
                alt=''
              />{' '}
            </a>
          </div>
          <div>Наш телефон: 8-(902)-302-22-77</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
