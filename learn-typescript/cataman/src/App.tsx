import * as React from "react";

import Toggle from "./Toggle";

class App extends React.Component {
  public render() {
    return (
      <div>
        <Toggle onToggle={this.handleToggle} />
      </div>
    );
  }

  private handleToggle = (on: boolean) => {
    // eslint-disable-next-line
    console.log(on);
  };
}

export default App;
