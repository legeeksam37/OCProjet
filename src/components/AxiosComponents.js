import axios from "axios";
import React from "react";

export default class AxiosComponents extends React.Component{
    state = {
        plant :[]
    }

    componentDidMount() {
        axios.get('https://run.mocky.io/v3/159e67b4-ea66-4b73-8b15-74279d1af669').then(res => { console.log(res);
        this.setState({plant : res.data});
    
    });
    }

    render() {
        return <ul>{this.state.plant.map(plant =><li>{plant.name, plant.water}</li>)}
        </ul>
    }
}