import React from 'react'
import CartIcon from '../Cart/CardIcon'
import styles from './HeaderCardButton.module.css';

const HeaderCardButton = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}><CartIcon/></span>
      <span>Your cart</span>
      <span className={styles.badge}>3</span>
    </button>
  )
}
export default HeaderCardButton