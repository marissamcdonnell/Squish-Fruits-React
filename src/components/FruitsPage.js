import React from 'react';
import axios from 'axios';

export default class FruitsPage extends React.Component {
    state = {
        fruits: [],
        click: 0,
        url: ''
    }

    componentDidMount() {
        axios.get(`https://api.myjson.com/bins/8t7qv`).then(res => {
            this.setState({ fruits: res.data.data });
        })
    }

    handleClick = (e) => {
        this.setState(() => ({ click: this.state.click + 1}))
        let imageID = e.currentTarget.id;
        let url = this.state.fruits.map((image) => {
            if (image.id == imageID) {
                return image.url
                }
            })
        let urlB = (url.filter((item) => {if(item !== undefined) { return item}}))[0]

        if (this.state.click === 0) {
            return this.setState({ url: urlB })
        }
        console.log(this.state.url)

        if (this.state.click === 2) {
            this.setState(() => ({ click: 0, url: urlB }))
        }
        console.log(this.state.url)

    }

    render() {
        return (
            <div className = "mix">
                <div className = "mix-container">
                    <div className = "mixLeft">
                        <h3>Now the real fun begins!</h3>
                        <p id ="clickhide"> Pick three of the fruits from the list below.</p>
                        <button id="add-button">Add to Bowl</button>
                        <p>state: {this.state.click}</p>
                        {/* <!--button after fruit is added to bowl--> */}
                        {/* <p className="squish">Squish that fruit!</p>

                        <button className="squish">SQUISH!</button> */}


                        {/* <!--Fruit list on left--> */}
                        <div className = "fruitL2">
                            <div id = "fruitsLB">
                                <ul>
                                    {this.state.fruits.map( fruit =>
                                        <li key={fruit.id}>
                                            <button onClick={this.handleClick} id={fruit.id}>
                                                <img src={fruit.url} />
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!--bowl and fruits on right--> */}
                    <div className = "mix-right-bowl">
                        <img src="https://marissamcdonnellportfolio.files.wordpress.com/2018/04/frontbowl.png" alt="Green Bowl" />
                        <img src="https://marissamcdonnellportfolio.files.wordpress.com/2018/04/backbowl.png" />

                        <div className = "basket">
                            <div className = "fruit-basket_sides">
                                {/* <img id = "a" className = "fruit-boxes-1" src = "https://marissamcdonnellportfolio.files.wordpress.com/2018/04/greenbowl.png" /> */}
                            </div>
                            <div className = "fruit-basket">
                                <img id = "b" className = "fruit-boxes-2" src = "https://marissamcdonnellportfolio.files.wordpress.com/2018/04/greenbowl.png" />
                            </div>
                            <div className = "fruit-basket_sides">
                                <img id = "c" className = "fruit-boxes-3" src = "https://marissamcdonnellportfolio.files.wordpress.com/2018/04/greenbowl.png" />
                            </div>
                        </div>
                        {/* <img className = "squishFruit" src = "" />
                        <img className = "squishFruit2" src = "" />
                        <img className = "squishFruit3" src = "" /> */}
                    </div>

                    {/* <img className = "pestle" src = "images/pestle.png" />
                    <div className = "alert">
                        <h3 id = "finishM">Your squished fruit tastes like <span id ="word"></span>!</h3>
                        <button className = "result" onClick="">Squish Again!</button>
                    </div> */}
                </div>
            </div>
        )
    }
}
