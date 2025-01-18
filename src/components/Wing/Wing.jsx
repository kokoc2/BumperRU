import React from 'react';
import Sort from '../Sort/Sort';
import Product from '../ProductSpacePartCarBrand/Product/Product';
import Skeleton from '../ProductSpacePartCarBrand/Product/Skeleton';
import s from './Wing.module.css';
const Wing = () => {
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
      )}&order=${temp}&search=Крыло`,
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
      <div className={s.Header}>Крыло</div>
      <div className={s.Content}>
        Добро пожаловать в наш интернет-магазин автозапчастей! В этой категории вы найдете широкий
        выбор крыльев для вашего автомобиля. Все наши крылья изготовлены с использованием
        высококачественных материалов, обеспечивая надежное крепление и прочность.
      </div>
      <div className={s.Content}>
        Благодаря широкому ассортименту вы сможете найти идеальное крыло, подходящее именно к вашему
        авто. (Lada, Kia, Hyundai, Ford, Volkswagen, Mazda, Skoda,Nissan и др.) Мы предлагаем как
        оригинальные крылья, так и альтернативные варианты по более привлекательным ценам.
      </div>
      <div className={s.Content}>Обновите внешний вид своего автомобиля с нашими крыльями!</div>
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

export default Wing;
