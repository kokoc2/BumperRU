import React from 'react';
import Product from '../ProductSpacePartCarBrand/Product/Product';
import Sort from '../Sort/Sort';
import Skeleton from '../ProductSpacePartCarBrand/Product/Skeleton';
import s from './Doors.module.css';
const Doors = () => {
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
      )}&order=${temp}&search=Двер`,
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
      <div className={s.Header}>Двери</div>
      <div className={s.Content}>
        Добро пожаловать в наш интернет-магазин автозапчастей! В этой категории вы найдете широкий
        выбор дверей для вашего автомобиля. Все наши двери изготовлены из прочных материалов,
        гарантируя безопасность и защиту во время движения.
      </div>
      <div className={s.Content}>
        У нас вы найдете большой выбор дверей для автомобилей разных марок и моделей (Lada, Kia,
        Hyundai, Ford, Volkswagen, Mazda, Skoda,Nissan и др.) Мы предлагаем как оригинальные двери,
        так и альтернативные варианты по более привлекательным ценам.
      </div>
      <div className={s.Content}>Выберите идеальную дверь для вашего авто прямо сейчас!</div>
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

export default Doors;
