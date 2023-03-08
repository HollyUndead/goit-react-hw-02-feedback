const { Component } = require("react");

export class FeedbackOptions extends Component{
    constructor(props){
        super(props)
        this.propsFunc = this.props.increseFeedback
    }
    render(){
        return (
            <div className="button-wrap" onClick={this.propsFunc}>
                <button name="good" >Good</button>
                <button name="bad" >Bad</button>
                <button name="neutral" >Neutral</button>
            </div>
        )
    }
}