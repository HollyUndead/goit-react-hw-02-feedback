import { Component } from "react";

import { Statistics } from "./feedback/satistics";
import { FeedbackOptions } from "./feedback/feedbackOptions";
import './feedback/feedback.css'


export class App extends Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0,
}

  increseFeedback = (ev) => {
    let parametr = ev.target.name
    if(parametr !== undefined){
        const newState = {...this.state}
        newState[parametr]++
        this.setState({...newState})
    }
}

calulateNewTotal = () => {
    return this.state.good + this.state.bad + this.state.neutral
}

calculateNewPercantage = (total) => {
    const percentage = (Number(this.state.good)/Number(total))*100
    return Math.round(percentage)
}

  render(){
    const {good, bad, neutral} = this.state
    const total = this.calulateNewTotal()
    const percentage = this.calculateNewPercantage(total)
    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        fontSize: 40,
        color: '#010101'
      }}
    >
      <FeedbackOptions increseFeedback={this.increseFeedback}/>
                <Statistics
                    good={good}
                    bad={bad}
                    neutral={neutral}
                    total={total}
                    percentage={percentage}
                />
    </div>
  );
}};
