import React, { Component } from 'react';
import axios from 'axios';

class Setup extends Component{
    constructor(){
        super();
        this.state = {
            name: "",
            budget: 0
        }
    }

    changeName = (e)=>{
        this.setState({
            name: e.target.value}
        )
    }

    changeBudget = (e)=>{
        console.log("Changing budget",e.target.value)
        this.setState({
            budget: e.target.value}
        )
    }

    submitSetup = async (e)=>{
        e.preventDefault()
        console.log(this.state.budget, this.state.name)
        const setUpUrl = `http://localhost:3000/setup`
        const setupResponse = await axios({
            method: "POST",
            data:{
                name: this.state.name,
                budget: this.state.budget
            },
            url: setUpUrl
        });
        console.log(setupResponse)
    }

    render(){
        return(
            <div className="col col-sm-12">
                <form onSubmit={this.submitSetup}>

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" value={this.state.name} onChange={this.changeName} className="form-control" id="name" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="total-budget">What is your budget?</label>
                        <input type="number" value={this.state.budget}  onChange={this.changeBudget} className="form-control" id="total-buget" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>
        )
    }
}

export default Setup;