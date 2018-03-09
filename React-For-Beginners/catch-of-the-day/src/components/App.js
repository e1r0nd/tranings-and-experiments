import React, { Component } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends Component {
    state = {
        fishes: {},
        order: {},
    };

    componentDidMount() {
        const {params} = this.props.match.params;
        this.ref = base.syncState(`${params.storeId}/fishes`);
    };

    addFish = fish => {
        const fishes = {...this.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState({ fishes });
    };

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    };

    addToOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seefood Market" />
                    <ul className="fishes">
                        {
                            Object
                                .keys(this.state.fishes)
                                .map(key =>
                                    <Fish key={key} index={key}
                                    addToOrder={this.addToOrder} details={this.state.fishes[key]}>
                                        {key}
                                    </Fish>
                                )
                        }
                    </ul>
                </div>
                <Order {...this.state} />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        );
    }
}

export default App;