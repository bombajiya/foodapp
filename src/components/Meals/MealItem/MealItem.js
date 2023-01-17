import styles from './MealItem.module.css';
import MealItemForm from '../MealItem/MealItemForm'
import { useContext } from 'react';
import cartContext from '../../store/cart-context'

const MealItem = (props) => {
  const  cartCtx = useContext(cartContext)
  const price = `$${props.price.toFixed(2)}`;
  const addCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
   }
    )
  }
  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <div>
      <MealItemForm onAddToCart={addCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;