import React from 'react';
import Sort from '../Sort/Sort';
import Product from '../ProductSpacePartCarBrand/Product/Product';
import Skeleton from '../ProductSpacePartCarBrand/Product/Skeleton';
import s from './Optict.module.css';
const Optict = () => {
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
      )}&order=${temp}&search=Оптик`,
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
      <div className={s.Header}>Оптика</div>
      <div className={s.Content}>
        Добро пожаловать в категорию оптики нашего интернет-магазина автозапчастей! Здесь вы найдете
        большой выбор фар, фонарей, поворотников и других элементов освещения для вашего автомобиля.
        Вся наша оптика соответствует высоким стандартам и обеспечивает яркое освещение и
        безопасность на дороге.
      </div>
      <div className={s.Content}>
        Мы предлагаем широкий ассортимент оригинальной и альтернативной оптики, чтобы удовлетворить
        все ваши потребности. (Lada, Kia, Hyundai, Ford, Volkswagen, Mazda, Skoda,Nissan и др.) Мы
        предлагаем как оригинальные крышки, соответствующие высоким стандартам качества, так и
        альтернативные варианты по более привлекательным ценам.
      </div>
      <div className={s.Content}>
        Обновите внешний вид и функциональность автомобиля с нашей оптикой прямо сейчас!
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

export default Optict;
