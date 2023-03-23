import PropTypes from 'prop-types';
const { Component } = require("react");

export class FeedbackOptions extends Component{
    render(){
        return (
            <div className="button-wrap" onClick={this.props.increseFeedback}>
                <button name="good" >Good</button>
                <button name="bad" >Bad</button>
                <button name="neutral" >Neutral</button>
            </div>
        )
    }
}

FeedbackOptions.propTypes = {
    increseFeedback: PropTypes.func
}