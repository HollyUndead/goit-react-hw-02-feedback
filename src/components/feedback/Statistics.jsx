const { Component } = require("react");


export class Statistics extends Component {
    state = {}
    
    constructor(props){
        super(props)
        this.state = props.state
    }

    render() {
        const {good, bad, neutral, total, percentage} = this.props.state


        if(good===0 && bad === 0 && neutral === 0){
            return(
                <section className="parag-wrap">
                    <p>There is no feedback</p>
                </section>
            )
        }

        return(
            <section className="parag-wrap">
                <p>Good: {good}</p>
                <p>Bad: {bad}</p>
                <p>Neutral: {neutral}</p>
                <p>Total: {total}</p>
                <p>Percentage: {percentage}%</p>
            </section>
        )
    }
}