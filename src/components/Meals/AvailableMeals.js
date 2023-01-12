import styles from './AvailableMeals.module.css'
import Card from '../UI/Card'
import MealItem from '../Meals/MealItem/MealItem'

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const mealslist = DUMMY_MEALS.map((val) =>
        <MealItem
            key={val.id}
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
