import React from 'react';
import Sort from '../Sort/Sort';
import Product from '../ProductSpacePartCarBrand/Product/Product';
import Skeleton from '../ProductSpacePartCarBrand/Product/Skeleton';
import s from './Trunk.module.css';
const Trunk = () => {
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
      )}&order=${temp}&search=Крышка`,
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
      <div className={s.Header}>Крышка багажника</div>
      <div className={s.Content}>
        Добро пожаловать в наш интернет-магазин автозапчастей! В этой категории вы найдете широкий
        ассортимент крышек багажника для автомобилей разных марок и моделей. Все крышки багажника
        изготовлены из прочных материалов, обеспечивающих надежную защиту вашего багажного отделения
        и простое открывание/закрывание.
      </div>
      <div className={s.Content}>
        У нас представлены багажники различных марок и моделей с гарантией качества (Lada, Kia,
        Hyundai, Ford, Volkswagen, Mazda, Skoda,Nissan и др.) Мы предлагаем как оригинальные крышки,
        соответствующие высоким стандартам качества, так и альтернативные варианты по более
        привлекательным ценам.
      </div>
      <div className={s.Content}>
        Найдите идеальную крышку багажника для своего автомобиля в нашем магазине уже сегодня!
      </div>
      <Sort value={sortType} onClickCategory={(category) => setSortType(category)} />
      <div className={s.Block}>
        {loading
          ? [...new Array(20)].map((_, index) => <Skeleton key={index} />)
          : items.map((m) => (
              <div className={s.News}>
                <Product key={m.id} Name={m.Name} Price={m.Price} Color={m.Color} Src={m.Src} />
              </div>
            ))}
      </div>
    </div>
  );
};
export default Trunk;
