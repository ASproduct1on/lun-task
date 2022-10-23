import classNames from "classnames";
import "./Button.css";

const Button = ({ children, className, disabled, onClick }) => {
  const classes = classNames("Button", className);

  return (
    <div>
      <button className={classes} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
