import styles from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from '../Meals/MealItem/MealItem'

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Fry Fish',
        description: 'Indian fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Biryani',
        description: 'A Haidrabadi specialty!',
        price: 16.5000,
    },
    {
        id: 'm3',
        name: 'Chicken Burger',
        description: 'Indian, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Sarso di Saag',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const mealslist = DUMMY_MEALS.map((val) =>
        <MealItem
            key={val.id}
            id ={val.id}
            name={val.name}
            description={val.description}
            price={val.price}
        />
    )
    return (
        <section className={styles.meals}>
            <Card>
                <ul>{mealslist}</ul>
            </Card>
        </section>
    )
}

export default AvailableMeals
