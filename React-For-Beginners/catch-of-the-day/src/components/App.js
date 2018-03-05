import React, { Component } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";

class App extends Component {
    state = {
        fishes: {},
        order: {},
    };

    addFish = fish => {
        const fishes = {...this.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState({ fishes });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seefood Market" />
                </div>
                <Order />
                <Inventory addFish={this.addFish} />
            </div>
        );
    }
}

export default App;