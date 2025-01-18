import React from 'react';
import Sort from '../Sort/Sort';
import Product from '../ProductSpacePartCarBrand/Product/Product';
import Skeleton from '../ProductSpacePartCarBrand/Product/Skeleton';
import s from './Bonnet.module.css';
const Bonnet = () => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [sortType, setSortType] = React.useState({
    name: 'Популярности',
    sortCategory: 'Rating',
  });

  const temp = sortType.sortCategory.includes('-') ? 'asc' : 'desc';

  React.useEffect(() => {
    setLoading(true);
    fetch(
      `https://64668ba32ea3cae8dc199985.mockapi.io/items?sortBy=${sortType.sortCategory.replace(
        '-',
        '',
      )}&order=${temp}&search=Капот`,
    ) //sortBy=desc&search=Бампер&sortBy=${sortType.sortCategory}&order=desc
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setLoading(false);
        console.log('render');
      });
    window.scroll(0, 0);
  }, [sortType]);
  return (
    <div className={s.Body}>
      <div className={s.Header}>Капот</div>
      <div className={s.Content}>
        Добро пожаловать в наш интернет-магазин автозапчастей! У нас представлен широкий ассортимент
        капотов для различных марок и моделей автомобилей. Все наши капоты изготовлены с
        использованием качественных материалов, обеспечивающих надежную защиту двигателя и
        безопасность во время езды.
      </div>
      <div className={s.Content}>
        Наша команда постоянно обновляет ассортимент, чтобы предложить вам самые новые модели для
        автомобилей марок и (Lada, Kia, Hyundai, Ford, Volkswagen, Mazda, Skoda,Nissan и др.) Мы
        предлагаем как оригинальные двери, так и альтернативные варианты по более привлекательным
        ценам.
      </div>
      <div className={s.Content}>Найдите идеальный капот для своего автомобиля прямо сейчас!</div>
      <Sort value={sortType} onClickCategory={(category) => setSortType(category)} />
      <div className={s.Block}>
        {loading
          ? [...new Array(20)].map((_, index) => <Skeleton key={index} />)
          : items.map((m) => (
              <div className={s.News} key={m.id}>
                <Product Name={m.Name} Price={m.Price} Color={m.Color} Src={m.Src} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Bonnet;
