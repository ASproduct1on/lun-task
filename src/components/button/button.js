import classNames from "classnames";
import "./button.css";

const Button = ({ children, onClick, className, disabled, active }) => {
  const classes = classNames("Button", className, { active });

  return (
    <div>
      <button className={classes} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
