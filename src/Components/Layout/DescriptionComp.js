import style from "./DescriptionComp.module.css";

const DescriptionComp = () => {
  return (
    <div className={style.descriptionContainer}>
      <div className={style.title}>Delicious Food</div>
      <p>
        A password reset for your account was requested. Please click the button
        below to change your password. Note that this link is valid for 24
        hours. After the time limit has expired, you will have to resubmit the
        request for a password reset.
      </p>
    </div>
  );
};

export default DescriptionComp;
