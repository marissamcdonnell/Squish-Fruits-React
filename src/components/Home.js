import React from 'react';
import List from './List';

export default class Home extends React.Component {
    state = {
        showList: false
    }

handleList = () => {
    this.setState(() => ({ showList: true }))
}

    render() {
        return (
            <div className = "container">
                <div className = "yellowbox homeP">
                    { !this.state.showList ?
                        <div className="front-page-text">
                            <h1>Welcome to Squish Fruit</h1>
                            <h3>Squishing fruit is our thing!</h3>
                            <p>Click below to see a list of all of the available fruit to squish!</p>
                        <button
                            // className="home"
                            onClick={this.handleList}
                            id = "sideFruits"
                        >
                            Fruits!
                        </button>
                    </div>
                        : null
                    }
                </div>

                {
                    this.state.showList ?
                    <List /> : null
                }
            </div>
        )
    }
}
