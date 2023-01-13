import React from 'react'
import CartIcon from '../Cart/CartIcon'
import styles from './HeaderCardButton.module.css';

const HeaderCardButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onPressButton}>
      <span className={styles.icon}><CartIcon/></span>
      <span>Your cart</span>
      <span className={styles.badge}>3</span>
    </button>
  )
}
export default HeaderCardButton