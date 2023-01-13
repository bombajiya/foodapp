

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

function App() {
  const[cartIsShown, setCartShown] = useState(false)
  const showCartHandler = ()=>{
    setCartShown(true)
  };
  const hideCartHandler = ()=>{
    setCartShown(false)
  };
  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;