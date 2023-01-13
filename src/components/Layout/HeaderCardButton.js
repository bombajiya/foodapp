import React from 'react'
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCardButton.module.css';
import { useContext } from 'react'
import CartContext from '../store/cart-context'

const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext)
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)
  return (
    <button className={styles.button} onClick={props.onPressButton}>
      <span className={styles.icon}><CartIcon /></span>
      <span>Your cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  )
}
export default HeaderCardButton