import React from "react";
import Trends from './Trends'
import {Trend} from './trend';
import './trends.css'
import Searchbar from "./SearchBar";

class TrendsContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            trends: Trend,
            
        }
    }

    render() {


        return (
            
            <div>
              <Searchbar/>
            
            <div className="containerTrends">
            
                <span className="top-text">Qué está pasando</span>
                 
               {     this.state.trends.map( trends => {
                        return (
                            <Trends
                            category={trends.category}
                            title={trends.title}
                            noTweets={trends.noTweets}
                               
                                />
                        )
                    })
                }
                
            </div>
            </div>);
    }
}

export default TrendsContainer;