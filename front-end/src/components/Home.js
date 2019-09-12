import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component{

    async componentDidMount(){
        const getDudesUrl = `${window.apiUrl}/get-dudes`
        const dudeInfo = await axios.get(getDudesUrl);
        console.log(dudeInfo);
    }

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