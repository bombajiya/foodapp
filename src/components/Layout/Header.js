import React from 'react'
import mealsImage from '../assets/meals.jpg'
import styles from './Header.module.css';
import HeaderCardButton from '../Layout/HeaderCardButton'
const Header = () => {
  return (
    <>
     <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCardButton/>
        </header> 
        <div className={styles['main_image']}>
            <img src={mealsImage} alt="pic" />
        </div>
    </>
  ) 
}

export default Header