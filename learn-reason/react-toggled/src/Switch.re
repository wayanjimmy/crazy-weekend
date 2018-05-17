let component = ReasonReact.statelessComponent("Switch");

let make = (~on, ~onClick, _children) => {
  ...component,
  render: _self => {
    let cn = if (on) {"toggle-btn-on"} else {"toggle-btn-off"};
    <div className="toggle">
      <input type_="checkbox" className="toggle-input" />
      <button className=cn onClick={onClick}/>
    </div>;
  },
};