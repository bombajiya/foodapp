import React from 'react'
import mealsImage from '../assets/meals.jpg'
import styles from './Header.module.css';
import HeaderCardButton from '../Layout/HeaderCardButton'
const Header = (props) => {
  return (
    <>
     <header className={styles.header}>
        <h1>Ratan Meals</h1>
        <HeaderCardButton onPressButton={props.onShowCart}/>
        </header> 
        <div className={styles['main_image']}>
            <img src={mealsImage} alt="pic" />
        </div>
    </>
  ) 
}

export default Header