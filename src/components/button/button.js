import classNames from "classnames";
import "./button.css";
import Svg from "../svg/svg";

const Button = ({ children, icon, className, disabled, onClick }) => {
  const classes = classNames("Button", className);
  return (
    <div>
      <button
        className={classes}
        disabled={disabled}
        icon={icon}
        onClick={onClick}
      >
        <Svg className={icon} />
        {children}
      </button>
    </div>
  );
};
export default Button;
