import React, { Component } from "react";

class EditFishForm extends Component {
    handleChange = (event) => {
        const updatedFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };

        this.props.updateFish(this.props.index, updatedFish)
    }

    render() {
        return (
            <div className="fish-edit">
                <input name="name"  type="text" placeholder="Name" value={this.props.fish.name} onChange={this.handleChange}/>
                <input name="price"  type="text" placeholder="Price" value={this.props.fish.price} onChange={this.handleChange}/>
                <select name="status" onChange={this.handleChange}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc"  placeholder="Desc"value={this.props.fish.desc} onChange={this.handleChange}/>
                <input name="image"  type="text" placeholder="Image" value={this.props.fish.image} onChange={this.handleChange}/>
                <button onClick={() => this.props.deleteFish(this.props.index)}>x Delete fish</button>
            </div>
        );
    }
}

export default EditFishForm;