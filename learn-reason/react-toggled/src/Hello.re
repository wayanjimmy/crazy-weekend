let component = ReasonReact.statelessComponent("Hello");

let make = (~name, _children) => {
  ...component,
  render: _self => <button> (ReasonReact.string(name)) </button>,
};