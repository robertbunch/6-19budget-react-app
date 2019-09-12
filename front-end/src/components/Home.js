import React, { Component } from 'react';

class Home extends Component{
    render(){
        return(
            <div className="col col-sm-12">
                <div className="total-budget">Total Budget: $2000</div>
                <div className="total-spent">Total Spent: $1000</div>
            </div>
        )
    }
}

export default Home