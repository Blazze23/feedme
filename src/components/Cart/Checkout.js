import useInput from "../../hooks/use-input";
import styles from "./Checkout.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isPostalCode = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInvalid,
    inputChageHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    resetInput: resetName,
  } = useInput(isNotEmpty);

  const {
    value: enteredAddress,
    isValid: addressIsValid,
    hasError: addressInvalid,
    inputChageHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    resetInput: resetAddress,
  } = useInput(isNotEmpty);

  const {
    value: enteredCity,
    isValid: cityIsValid,
    hasError: cityInvalid,
    inputChageHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    resetInput: resetCity,
  } = useInput(isNotEmpty);

  const {
    value: enteredPostalCode,
    isValid: postalCodeIsValid,
    hasError: postalCodeInvalid,
    inputChageHandler: postalCodeChangeHandler,
    inputBlurHandler: postalCodeBlurHandler,
    resetInput: resetPostalCode,
  } = useInput(isPostalCode);

  let formIsValid = false;

  if (nameIsValid && addressIsValid && cityIsValid && postalCodeIsValid) {
    formIsValid = true;
  }

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      address: enteredAddress,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });

    resetName();
    resetAddress();
    resetCity();
    resetPostalCode();
  };

  const nameInputStyles = nameInvalid
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;

  const addressInputStyles = addressInvalid
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;

  const cityInputStyles = cityInvalid
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;

  const postalCodeInputStyles = postalCodeInvalid
    ? `${styles.control} ${styles.invalid}`
    : `${styles.control}`;

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={nameInputStyles}>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInvalid && (
          <p className={styles["error-text"]}>Please enter your name</p>
        )}
      </div>
      <div className={addressInputStyles}>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          value={enteredAddress}
          onChange={addressChangeHandler}
          onBlur={addressBlurHandler}
        />
        {addressInvalid && (
          <p className={styles["error-text"]}>Please enter a valid address</p>
        )}
      </div>
      <div className={cityInputStyles}>
        <label htmlFor="city">City</label>
        <input
          id="city"
          type="text"
          value={enteredCity}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityInvalid && (
          <p className={styles["error-text"]}>Please enter a valid city</p>
        )}
      </div>
      <div className={postalCodeInputStyles}>
        <label htmlFor="postal">Postal Code</label>
        <input
          id="postal"
          type="text"
          value={enteredPostalCode}
          onChange={postalCodeChangeHandler}
          onBlur={postalCodeBlurHandler}
        />
        {postalCodeInvalid && (
          <p className={styles["error-text"]}>
            Please enter a valid postal code (5 digit long)
          </p>
        )}
      </div>
      <div className={styles.actions}>
        <button
          type="button"
          className={styles["button-alt"]}
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button className={styles.button} disabled={!formIsValid}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
