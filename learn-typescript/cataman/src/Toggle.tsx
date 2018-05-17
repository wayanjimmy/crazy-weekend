import * as React from "react";

import Switch from "./Switch";

interface IState {
  on: boolean;
}

interface IProps {
  onToggle: any;
}

class Toggle extends React.Component<IProps, IState> {
  public state = {
    on: false
  };

  public render() {
    const { on } = this.state;
    return <Switch on={on} onClick={this.toggle} />;
  }

  private toggle = () => {
    this.setState(
      prevState => ({ on: !prevState.on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );
  };
}

export default Toggle;
