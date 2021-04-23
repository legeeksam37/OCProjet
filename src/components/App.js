
import '../styles/App.css';
import Banner from './banner'
import Cart from './cart';
import  ShoppingList from './ShoppingList';
import QuestionForm from './QuestionForm'
import { useState } from 'react'


function App() {
    const [cart, updateCart] = useState([])

  return (<div><Banner /><div className='lmj-layout-inner'>
          <Cart cart={cart} updateCart={updateCart} />
          <ShoppingList cart={cart} updateCart={updateCart} />
        </div><QuestionForm /></div>)
  
}

export default App;

