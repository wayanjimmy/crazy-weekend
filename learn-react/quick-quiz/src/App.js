import React, { Component } from 'react';
import QuestionList from './QuestionList';
import Scorebox from './Scorebox';
import Results from './Results';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is your name ?',
          choice: [
            {
              id: 'a',
              text: 'Michael'
            },
            {
              id: 'b',
              text: 'Jimmy'
            },
            {
              id: 'c',
              text: 'Dibyo'
            }
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: 'What is your mothers name ?',
          choice: [
            {
              id: 'a',
              text: 'Maggy'
            },
            {
              id: 'b',
              text: 'Sumetri'
            },
            {
              id: 'c',
              text: 'Komang'
            }
          ],
          correct: 'a'
        },
        {
          id: 3,
          text: 'What is your fathers name ?',
          choice: [
            {
              id: 'a',
              text: 'Ketut'
            },
            {
              id: 'b',
              text: 'Robby'
            },
            {
              id: 'c',
              text: 'Erick'
            }
          ],
          correct: 'a'
        }
      ],
      score: 0,
      current: 1
    };
  }
  setCurrent(value) {
    this.setState({
      current: value
    });
  }
  setScore(value) {
    this.setState({
      score: value
    });
  }
  render() {
    let scorebox = <Scorebox {...this.state}/>;
    let results = '';

    if (this.state.current > this.state.questions.length) {
      scorebox = '';
      results = <Results {...this.state}/>;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Quick Question</h1>
            <p className="lead">A small question app built with React</p>
            {scorebox}
            <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
            {results}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
