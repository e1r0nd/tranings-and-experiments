import React, { Component, Fragment } from "react";
import { getFunName } from "../helpers";

class StorePicker extends Component {
    render() {
        return (
            <Fragment>
                {/* comment */}
                <form className="store-selector">
                    <h2>Please Enter a Store</h2>
                    <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
                    <button type="submit">Select Store</button>
                </form>
            </Fragment>
        );
    }
}

export default StorePicker;