import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Multiverse Burger",
    description:
      "Beef, BBQ sauce, double Cheddar, double Bacon, Iceberg, Halapenjo",
    price: 19.99,
  },
  {
    id: "m2",
    name: "Tomahawk Steak",
    description: "Premium Rib Steak, also know as Queen of all Steaks",
    price: 74.99,
  },
  {
    id: "m3",
    name: "Achiote Chicken",
    description:
      "Grilled marinated chicken, melted Cheese, Pico de Gallo Salsa, Creme fraiche",
    price: 14.99,
  },
  {
    id: "m4",
    name: "Porcheta Pizza",
    description: "Spicy pork slices, red Onion, Parsley and Oriental dressing",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
