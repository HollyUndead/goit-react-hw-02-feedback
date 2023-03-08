import { Component } from "react";
import { Statistics } from "./Statistics";
import './feedback.css'
import { FeedbackOptions } from "./FeedbackOptions";

export class Feedback extends Component {
    static defaultProps = {};

    static propTypes = {};

    

    increseFeedback = (ev) => {
        let parametr = ev.target.name
        if(parametr !== undefined){
            const newState = {...this.state}
            newState[parametr]++
            newState.total = this.calulateNewTotal(newState)
            newState.percentage = this.calculateNewPercantage(newState)
            this.setState({...newState})
        }
    }

    calulateNewTotal = (newState) => {
        const keys = Object.keys(newState)
        let total = 0;
        for(const key of keys){
            if(key === 'total' || key === 'percentage'){
            }else{
                total+=newState[key]
            }
        }
        return total
    }

    calculateNewPercantage = (newState) => {
        const percentage = (Number(newState.good)/Number(newState.total))*100
        return Math.round(percentage)
    }

    state = {
        good: 0,
        bad: 0,
        neutral: 0,
        total: 0,
        percentage: 0
    }

    render(){
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
                    state={this.state}
                />
            </div>
        )
    }
}