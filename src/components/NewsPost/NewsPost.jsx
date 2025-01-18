import React from 'react';
import s from './News.module.css'
const News=()=> {
  return (
    <div className={s.News}>
      <div>
        <img src="https://mamasmart.ru/uploadedFiles/newsimages/big/raspr.jpg" alt="" className={s.img}/>
      </div>
      <div>
        Распродажа 24.04.2023 НА ВСЕ
      </div>
      <div>
        Описание
      </div>
    </div>
  );
}

export default News;