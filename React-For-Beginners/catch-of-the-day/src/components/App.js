import React, { Component } from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends Component {
    state = {
        fishes: {},
        order: {},
    };

    componentDidMount() {
        const {params} = this.props.match;
        const localStorageRef = localStorage.getItem(this.props.match.params.storeId);
        if (localStorageRef) {
            this.setState({ order: JSON.parse(localStorageRef)});
        }
        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    };
    
    componentDidUpdate() {
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }


    addFish = fish => {
        const fishes = {...this.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState({ fishes });
    };

    updateFish = (key, updatedFish) => {
        const fishes = {...this.fishes};
        fishes[key] = updatedFish;
        this.setState({ fishes });
    }

    deleteFish = (key) => {
        const fishes = {...this.fishes};
        fishes[key] = null;
        this.setState({ fishes });
    }

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    };

    addToOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    };

    removeFromOrder = (key) => {
        const order = {...this.state.order};
        delete order[key];
        this.setState({ order });
    }

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
                <Order {...this.state} removeFromOrder={this.removeFromOrder}/>
                <Inventory addFish={this.addFish}
                updateFish={this.updateFish}
                deleteFish={this.deleteFish}
                loadSampleFishes={this.loadSampleFishes} fishes={this.state.fishes} />
            </div>
        );
    }
}

export default App;