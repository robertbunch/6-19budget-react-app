import React, { Component } from 'react';
import axios from 'axios';
import { is } from '@babel/types';

class Home extends Component{

    state = {
        submitName: false
    }

    async componentDidMount(){
    }

    getDude = async ()=>{
        const getDudesUrl = `${window.apiUrl}/get-dudes`
        const dudeInfo = await axios.post(
            getDudesUrl,
            {name:this.props.name}
        );
        console.log(dudeInfo);
    }

    submitNameHandler = (e)=>{
        e.preventDefault();
        this.setState({
            submitName: true
        },this.getDude)
    }

    render(){
        // If we dont know who the user is... ASK THEM!
        if(!this.state.submitName){ 
            const form = 
                <form onSubmit={this.submitNameHandler}>
                <div className="form-group">
                    <label htmlFor="name">What is your name?</label>
                    <input type="text" value={this.props.name} onChange={this.props.changeName} className="form-control" id="name" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>                        
            return (
                <div className="col col-sm-12">
                    {form}
                </div>
            )
        }

        return(
            <div className="col col-sm-12">
                <div className="total-budget">Total Budget: $2000</div>
                <div className="total-spent">Total Spent: $1000</div>
            </div>
        )
    }
}

export default Home