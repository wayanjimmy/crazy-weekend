import * as React from "react";

interface IProps {
  on: boolean;
  className?: string;
  onClick: () => void;
}

const Switch: React.StatelessComponent<IProps> = ({
  on,
  className = "",
  onClick
}) => {
  return (
    <div className="toggle">
      <input type="checkbox" className="toggle-input" />
      <button
        className={`${className} toggle-btn ${
          on ? "toggle-btn-on" : "toggle-btn-off"
        }`}
        aria-expanded={on}
        onClick={onClick}
      />
    </div>
  );
};

export default Switch;
