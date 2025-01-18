import React from 'react';
import s from './SearchList.module.css';
import Product from './ProductSpacePartCarBrand/Product/Product';
import Skeleton from './Product/Skeleton';
import { NavLink } from 'react-router-dom';
import Sort from '../Sort/Sort';

const SearchList = (props) => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sort, setSort] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'Популярности',
    sortCategory: 'Rating',
  });
  // &order=desc&search=${props.searchCarBrand}&order=desc&search=${props.searchSpacePart}
  React.useEffect(() => {
    fetch(
      `https://64668ba32ea3cae8dc199985.mockapi.io/items?sortBy=${sortType.sortCategory}&order=desc&search=${props.searchCarBrand}`,
    )
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
      <div className={s.blockSort}>
        Вы выбрали :{' '}
        <span>
          {props.searchCarBrand} - {props.searchSpacePart}
        </span>{' '}
      </div>
      <Sort value={sortType} onClickCategory={(category) => setSortType(category)} />
      <div className={s.Block}>
        {loading
          ? [...new Array(20)].map((_, index) => <Skeleton key={index} />)
          : items
              .filter((m) => {
                if (m.Name.toLowerCase().includes(props.searchSpacePart.toLowerCase())) {
                  return true;
                }
                return false;
              })
              .map((m) => (
                <div className={s.News}>
                  <Product key={m.id} Name={m.Name} Price={m.Price} Color={m.Color} Src={m.Src} />
                </div>
              ))}
      </div>
    </div>
  );
};

export default SearchList;
