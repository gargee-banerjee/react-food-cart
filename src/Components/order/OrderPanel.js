import style from "./order.module.css";
import useInputValidations from "../custom-hooks/useInputValidations";
const OrderPanel = (props) => {
  const fieldValidity = (value) => {
    return value !== "";
  };
  const {
    value: name,
    onChangeHandler: onNameChangeHandler,
    onblurHandler: onNameblurHandler,
    error: nameError,
  } = useInputValidations(fieldValidity);

  const {
    value: phNumber,
    onChangeHandler: onPhNumberChangeHandler,
    onblurHandler: onPhNumberblurHandler,
    error: phNumberError,
  } = useInputValidations(fieldValidity);

  const {
    value: street,
    onChangeHandler: onStreetChangeHandler,
    onblurHandler: onStreetblurHandler,
    error: streetError,
  } = useInputValidations(fieldValidity);

  const {
    value: city,
    onChangeHandler: onCityChangeHandler,
    onblurHandler: onCityblurHandler,
    error: cityError,
  } = useInputValidations(fieldValidity);

  const {
    value: state,
    onChangeHandler: onStateChangeHandler,
    onblurHandler: onStateblurHandler,
    error: stateError,
  } = useInputValidations(fieldValidity);

  const {
    value: zip,
    onChangeHandler: onZipChangeHandler,
    onblurHandler: onZipblurHandler,
    error: zipError,
  } = useInputValidations(fieldValidity);

  const {
    value: country,
    onChangeHandler: onCountryChangeHandler,
    onblurHandler: onCountryblurHandler,
    error: countryError,
  } = useInputValidations(fieldValidity);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(nameError || phNumberError || streetError || streetError || cityError || stateError || zipError || countryError){
        return;
    } 
    console.log("Done");
  };

  const fieldErrorStyle = style.fieldError;

  return (
    <form onSubmit={onSubmitHandler} className={style.formContainer}>
      {/* <label>Order for</label> */}
      <div className={style.formCustomerDetails}>
        <input
          type="text"
          placeholder="Name"
          className={nameError ? fieldErrorStyle : ""}
          onChange={onNameChangeHandler}
          onBlur={onNameblurHandler}
          value={name}
        ></input>
        <input
          type="number"
          id="phoneNumber"
          placeholder="Phone Number"
          className={phNumberError ? fieldErrorStyle : ""}
          onChange={onPhNumberChangeHandler}
          onBlur={onPhNumberblurHandler}
          value={phNumber}
        ></input>
      </div>
      <div className={style.formAddressConrainer}>
        {/* <p>Complete Address</p> */}
        <input
          type="Street"
          placeholder="Street"
          className={
            streetError
              ? `${style.formStreet} ${fieldErrorStyle}`
              : `${style.formStreet}`
          }
          onChange={onStreetChangeHandler}
          onBlur={onStreetblurHandler}
          value={street}
        ></input>
        <input
          type="city"
          placeholder="city"
          className={cityError ? fieldErrorStyle : ``}
          onChange={onCityChangeHandler}
          onBlur={onCityblurHandler}
          value={city}
        ></input>
        <input
          type="state"
          placeholder="State"
          className={stateError ? fieldErrorStyle : ``}
          onChange={onStateChangeHandler}
          onBlur={onStateblurHandler}
          value={state}
        ></input>
        <input
          type="zip"
          placeholder="Zip"
          className={zipError ? fieldErrorStyle : ``}
          onChange={onZipChangeHandler}
          onBlur={onZipblurHandler}
          value={zip}
        ></input>
        <input
          type="country"
          placeholder="Country"
          className={countryError ? fieldErrorStyle : ``}
          onChange={onCountryChangeHandler}
          onBlur={onCountryblurHandler}
          value={country}
        ></input>
      </div>
      <div className={style.formButtons}>
        <button type="submit">PlaceOrder</button>
        <button type="button" onClick={props.closeCartPanelHandler}>Cancel</button>
      </div>
    </form>
  );
};

export default OrderPanel;
