import React from 'react';
import s from './Contacts.module.css';
const Contacts = () => {
  return (
    <div className={s.Profile}>
      <div className={s.Header}>Контакты</div>
      <div className={s.Content}>
        {' '}
        <h2>Контактная информация</h2>
      </div>
      <div className={s.Content}>Адрес: площадь Дзержинского, г.Дзержинск</div>
      <div className={s.Content}>Телефон зебры: 8-(902)-302-22-77</div>
      <div className={s.Content}>
        <h2>Время работы:</h2>
      </div>
      <div className={s.Chart}>
        <div className={s.Content}>
          <div>
            <h5>День</h5>
          </div>
          <div>Понедельник:</div>
          <div>Вторник:</div>
          <div>Среда:</div>
          <div>Четверг:</div>
          <div>Пятница:</div>
          <div>Суббота:</div>
          <div>Воскресенье:</div>
        </div>
        <div className={s.Content}>
          <div>
            <h5>Время работы</h5>
          </div>
          <div>с 8:00 - 21:00</div>
          <div>с 8:00 - 21:00</div>
          <div>с 8:00 - 21:00</div>
          <div>с 8:00 - 21:00</div>
          <div>с 8:00 - 21:00</div>
          <div>с 8:00 - 21:00</div>
          <div>с 8:00 - 21:00</div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
