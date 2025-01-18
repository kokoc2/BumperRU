import ReviewsReducer from './reviewsReduser';
import ReviewsOffersReduser from './reviewsOffersReduser';
import HYUNDAI from '../img/Hyundai_symbol.svg.png';
import KIA from '../img/Kia_symbol.png';
import LADA from '../img/Lada_symbol.png';
import RENAULT from '../img/Renault_symbol.png';
import FORD from '../img/Ford_symbol.png';
import SKODA from '../img/Skoda_symbol.png';
import TOYOTA from '../img/Toyota_symbol.png';
import MITSUBISHI from '../img/Mitsubishi_symbol.png';
import VOLKSWAGEN from '../img/Volkswagen_symbol.png';
import NISSAN from '../img/Nissan_symbol.png';
import CHEVROLET from '../img/Chevrolet_symbol.png';
import MAZDA from '../img/Mazda_symbol.png';
import HONDA from '../img/Honda_symbol.png';

import ERROR from '../img/Error_symbol.png';

import BONNET from '../img/bonnet.jpg';
import WING from '../img/Wing.jpg';
import TRINKLID from '../img/TriunkLid.jpg';
import HEADLIGHT from '../img/HeadLight.jpg';
import GLASS from '../img/Glass.jpg';
import BUMPER from '../img/bumper.jpg';
import DOORS from '../img/Doors.jpg';

let store = {
  _state: {
    CarBrandAdd: [
      {
        CarBrand: 'Hyundai',
        Des: 'Запчасти для автомобилей марки HYUNDAI',
        Src: HYUNDAI,
      },
      {
        CarBrand: 'Kia',
        Des: 'Описаниее KIA',
        Src: KIA,
      },
      {
        CarBrand: 'Lada',
        Des: 'Описаниее LADA',
        Src: LADA,
      },
      {
        CarBrand: 'Renault',
        Des: 'Описаниее RENAULT',
        Src: RENAULT,
      },
      {
        CarBrand: 'Ford',
        Des: 'Описаниее FORD',
        Src: FORD,
      },
      {
        CarBrand: 'Skoda',
        Des: 'Описаниее SKODA',
        Src: SKODA,
      },
      {
        CarBrand: 'Toyota',
        Des: 'Описаниее Toyota',
        Src: TOYOTA,
      },
      {
        CarBrand: 'Volkswagen',
        Des: 'Описаниее VOLKSWAGEN',
        Src: VOLKSWAGEN,
      },
      {
        CarBrand: 'Chevrolet',
        Des: 'Описаниее CHEVROLET',
        Src: CHEVROLET,
      },
      {
        CarBrand: 'Nissan',
        Des: 'Описаниее NISSAN',
        Src: NISSAN,
      },
      {
        CarBrand: 'Mitsubishi',
        Des: 'Описаниее MITSUBISHI',
        Src: MITSUBISHI,
      },
      {
        CarBrand: 'Mazda',
        Des: 'Описаниее MITSUBISHI',
        Src: MAZDA,
      },
      {
        CarBrand: 'Honda',
        Des: 'Описаниее MITSUBISHI',
        Src: HONDA,
      },
    ],
    CarBrandSpacePartAdd: [
      { id: 1, SpacePart: 'Бампера', SpacePartObj: 'Бампер', Src: BUMPER },
      {
        id: 2,
        SpacePart: 'Двери',
        SpacePartObj: 'Двер',
        Src: DOORS,
      },
      {
        id: 3,
        SpacePart: 'Капот',
        SpacePartObj: 'Капот',
        Src: BONNET,
      },
      {
        id: 4,
        SpacePart: 'Крыло',
        SpacePartObj: 'Крыло',
        Src: WING,
      },
      {
        id: 5,
        SpacePart: 'Крышки багажника',
        SpacePartObj: 'Крышка багажника',
        Src: TRINKLID,
      },
      {
        id: 6,
        SpacePart: 'Оптика',
        SpacePartObj: 'Оптика',
        Src: HEADLIGHT,
      },
      {
        id: 7,
        SpacePart: 'Стекла',
        SpacePartObj: 'Стекло',
        Src: GLASS,
      },
    ],
    Reviews: {
      MessageAdd: [
        {
          id: 1,
          text: 'Класс, все понравилость',
          src: 'https://m.buro247.ru/images/dasha/news/putin4.jpg',
        },
        {
          id: 2,
          text: 'Класссс, все понравилость',
          src: 'https://m.buro247.ru/images/dasha/news/putin4.jpg',
        },
        {
          id: 3,
          text: 'Класссссс, все понравилость',
          src: 'https://m.buro247.ru/images/dasha/news/putin4.jpg',
        },
        { id: 4, text: '1234 j5', src: 'https://m.buro247.ru/images/dasha/news/putin4.jpg' },
      ],
      MessageAddTemp: 'hyu',
    },
    Offers: {
      MessageAddOffers: [
        { id: 1, text: 'Хочу бампер на калину' },
        { id: 2, text: 'Ты красив, но чуть похож на обезьяну' },
        { id: 3, text: 'Класссссс, все понравилость' },
      ],
      MessageAddOffersTemp: 'uuu',
    },
    CarBrandTemp: '',
    ObjSpacePart: [
      {
        id: 1,
        textHeader: 'Бампер передний #маркаавто',
        price: '10000P',
        desc: 'Бампер передний #маркаавто седан',
        color: [
          'Черный',
          'Белый',
          'Красный',
          'Синий',
          'Зеленый',
          'Коричневый',
          'Бордовый',
          'Серый',
          'Оранжевый',
        ],
        src: 'https://m.buro247.ru/images/dasha/news/putin4.jpg',
      },
      {
        id: 2,
        textHeader: 'Бампер передний #маркаавто',
        price: '2000P',
        desc: 'Бампер передний #маркаавто седан',
        color: [
          'Черный',
          'Белый',
          'Красный',
          'Синий',
          'Зеленый',
          'Коричневый',
          'Бордовый',
          'Серый',
          'Оранжевый',
        ],
        src: 'https://m.buro247.ru/images/dasha/news/putin4.jpg',
      },
      {
        id: 3,
        textHeader: 'Бампер передний #маркаавто',
        price: '3000P',
        desc: 'Бампер передний #маркаавто седан',
        color: [
          'Черный',
          'Белый',
          'Красный',
          'Синий',
          'Зеленый',
          'Коричневый',
          'Бордовый',
          'Серый',
          'Оранжевый',
        ],
        src: 'https://m.buro247.ru/images/dasha/news/putin4.jpg',
      },
    ],
    Product: [
      {
        id: 1,
        CarBrand: 'Kia',
        SpacePart: 'Hood',
        Name: 'Капот Rio 11 - API ',
        Price: '14700 Pуб',
        Color: 'Выбрать цвет',
        Src: ERROR,
      },
      {
        id: 2,
        CarBrand: 'Kia',
        SpacePart: 'Hood',
        Name: 'Капот Rio 11 - Начало ',
        Price: '10200 Pуб',
        Color: 'Выбрать цвет',
        Src: ERROR,
      },
      {
        id: 3,
        CarBrand: 'Kia',
        SpacePart: 'Wing',
        Name: 'Крыло левое, правое Rio 11 - API',
        Price: '6300 Pуб',
        Color: 'Выбрать цвет',
        Src: ERROR,
      },
      {
        id: 4,
        CarBrand: 'Kia',
        SpacePart: 'Wing',
        Name: 'Крыло левое, правое Rio 11 - Начало',
        Price: '4800 Pуб',
        Color: 'Выбрать цвет',
        Src: ERROR,
      },
      {
        id: 5,
        CarBrand: 'Kia',
        SpacePart: 'Hood',
        Name: 'Капот Rio 05 - Китай',
        Price: '17400 Pуб',
        Color: 'Выбрать цвет',
        Src: ERROR,
      },
    ],
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this.rerender = observer;
  },
  rerender() {},
  dispatch(action) {
    this._state.Reviews = ReviewsReducer(action, this._state.Reviews);
    this._state.MessageAddOffers = ReviewsOffersReduser(this._state.MessageAddOffers, action);
    this.subscribe(this._state);
  },
};

export default store;
