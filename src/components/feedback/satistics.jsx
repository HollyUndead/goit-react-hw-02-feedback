import PropTypes from 'prop-types';
const { Component } = require("react");


export class Statistics extends Component {

    render() {
        const {good, bad, neutral, total, percentage} = this.props


        if(total === 0){
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

Statistics.propTypes = {
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
    percentage: PropTypes.number,
    total: PropTypes.number,
}