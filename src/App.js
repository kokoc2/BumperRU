import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Bonnet from './components/Bonnet/Bonnet';
import Footer from './components/Footer/Footer';
import Header from './components/Headers/Header';
import Doors from './components/Doors/Doors';
import Navbar from './components/Navbar/Navbar';
import Wing from './components/Wing/Wing';
import Profile from './components/Profile/Profile';

import Bumper from './components/Bumper/Bumper';
import Trunk from './components/Trunk/Trunk';
import Optict from './components/Optict/Optict';

import Information from './/components/Headers/HeadersButton/Information/Information';
import Contacts from './components/Headers/HeadersButton/Contacts/Contacts';
import PaymentDelivery from './components/Headers/HeadersButton/PaymentDelivery/PaymentDelivery';

import CarBrandSparePart from './components/CarBrandSparePart/CarBrandSparePart';
import ProductSpacePartCarBrand from './components/ProductSpacePartCarBrand/ProductSpacePartCarBrand';

const App = (props) => {
  const [searchCarBrand, setSearchCarBrand] = React.useState('');
  const [searchSpacePart, setSearchSpacePart] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <BrowserRouter>
      <div className='App-wrapper'>
        <Header setSearchSpacePart={setSearchSpacePart} searchSpacePart={searchSpacePart} />
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={
              <Profile
                CarBrandAdd={props.state.CarBrandAdd}
                setSearchCarBrand={setSearchCarBrand}
              />
            }
          />
          <Route path='/Bumper' element={<Bumper Product={props.state.Product} />} />
          <Route path='/Doors' element={<Doors />} />
          <Route path='/Bonnet' element={<Bonnet />} />
          <Route path='/Wing' element={<Wing />} />
          <Route path='/Trunk' element={<Trunk />} />
          <Route path='/Optict' element={<Optict />} />
          <Route path='/Information' element={<Information />} />
          <Route path='/Contacts' element={<Contacts />} />
          <Route path='/PaymentDelivery' element={<PaymentDelivery />} />
          <Route
            path='/МаркаАвто'
            element={
              <CarBrandSparePart
                SpacePartAdd={props.state.CarBrandSpacePartAdd}
                searchCarBrand={searchCarBrand}
                setSearchSpacePart={setSearchSpacePart}
              />
            }
          />
          <Route
            path='/МаркаАвто/*'
            element={
              <ProductSpacePartCarBrand
                Product={props.state.Product}
                searchCarBrand={searchCarBrand}
                searchSpacePart={searchSpacePart}
              />
            }
          />
        </Routes>
        <Footer CarBrandAdd={props.state.CarBrandAdd} />
      </div>
    </BrowserRouter>
  );
};

export default App;
