import React from 'react';
import Product from '../ProductSpacePartCarBrand/Product/Product';
import s from './Bumper.module.css';
import Sort from '../Sort/Sort';
import Skeleton from '../ProductSpacePartCarBrand/Product/Skeleton';
import { NavLink } from 'react-router-dom';
import Pagination from '../Pagination';
const Bumper = (props) => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'Популярности',
    sortCategory: 'Rating',
  });
  const temp = sortType.sortCategory.includes('-') ? 'asc' : 'desc';

  React.useEffect(() => {
    setLoading(true);
    fetch(
      `https://64668ba32ea3cae8dc199985.mockapi.io/items?page=${currentPage}&limit=16&sortBy=${sortType.sortCategory.replace(
        '-',
        '',
      )}&order=${temp}&search=Бампер`,
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
  }, [sortType, currentPage]);
  return (
    <div className={s.Body}>
      <Pagination onChangeSelected={(number) => setCurrentPage(number)} />
      <div className={s.Header}>Бампера</div>
      <div className={s.Content}>
        Добро пожаловать в наш интернет-магазин автозапчастей! В этой категории вы найдете широкий
        выбор бамперов для вашего автомобиля. Все наши бамперы выполнены из высококачественных
        материалов, обеспечивающих долгий срок службы и надежную защиту вашего автомобиля.
      </div>
      <div className={s.Content}>
        У нас представлены бамперы различных марок и моделей с гарантией качества (Lada, Kia,
        Hyundai, Ford, Volkswagen, Mazda, Skoda,Nissan и др.) Мы предлагаем как оригинальные
        бамперы, так и альтернативные варианты по более привлекательным ценам.
      </div>
      <div></div>
      <div className={s.Content}>Выберите идеальный бампер для вашего авто прямо сейчас!</div>
      <Sort value={sortType} onClickCategory={(category) => setSortType(category)} />
      <div className={s.Block}>
        {loading
          ? [...new Array(20)].map((_, index) => <Skeleton key={index} />)
          : items.map((m) => (
              <div className={s.News} key={m.id}>
                <Product key={m.id} Name={m.Name} Price={m.Price} Color={m.Color} Src={m.Src} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Bumper;
