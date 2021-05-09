import React, { Component } from 'react';

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(`sumbited: ${this.state.email}`);
    }

    handleEmailChange(e) {
        console.log(this.testInput);
        this.setState({ email: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.email}
                    onChange={this.handleEmailChange}
                    ref={(input) => this.testInput = input}
                />
                <button type="submit">OK</button>
            </form>
        );
    }
}

export default RegistrationForm;
