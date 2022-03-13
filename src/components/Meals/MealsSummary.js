import styles from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Best food in town at your doorstep</h2>
      <p>
        Order your favorite meals from the best restaurants and enjoy a
        delicious food at any time in the comfort of your home.
      </p>
    </section>
  );
};

export default MealsSummary;
