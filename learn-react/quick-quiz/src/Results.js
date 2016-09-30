import React from 'react';

class Results extends React.Component {
  render() {
    let percent = (this.props.score / this.props.questions.length * 100);
    let message = 'OK!';
    if (percent > 80) {
      message = 'Awesome Job!';
    } else if (percent > 60 && percent <= 80){
      message = 'You did OK!';
    }
    return (
      <div className="well">
        <h4>You Got {this.props.score} out of {this.props.questions.length} Correct</h4>
        <h1>{percent} % - {message}</h1>
        <hr />
        <a href="/">Take Again</a>
      </div>
    );
  }
}

export default Results;
