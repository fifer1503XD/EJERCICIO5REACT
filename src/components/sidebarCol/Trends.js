import React from 'react';
import './trends.css'

class Trends extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="trends-container">
                <div className="row">
                    <div className="column">
                        <h6 className="text-gray">{this.props.category}</h6>
                        <h6>{this.props.title}</h6>
                        <h6 className="text-gray">{this.props.noTweets}</h6>
                    </div>
                    <div className="c3"></div>
                </div>
               
            </div>
        )
    }
}

export default Trends;