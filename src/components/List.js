import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class List extends React.Component {
    state = {
        fruits: []
    }

    componentDidMount() {
        axios.get(`https://api.myjson.com/bins/8t7qv`).then(res => {
            this.setState({ fruits: res.data.data });
        })
    }

    render() {
        return (
        <div className="container">
            <div className = "side">
                <ul>
                    {this.state.fruits.map( fruit => <li key={fruit.id}><img id={fruit.id} src={fruit.url} />{fruit.name}</li>)}
                </ul>
            </div>

            <div className = "yellowbox instructions">
                <div className="front-page-text">
                    <h3>Now that you have seen our list of squishables, it is time to start the squishing process.</h3>
                    <p>Please click the button below to begin.</p>
                    <Link to="/fruits"><button>Squishables</button></Link>
                </div>
            </div>
        </div>
        )
    }
}
