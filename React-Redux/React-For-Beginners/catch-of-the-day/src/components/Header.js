import React, { Component } from "react";
import PropTypes from "prop-types";

const Header = props => (
    <header className="top">
        <h1>Catch
            <span className="ofThe">
                <span className="of">of</span>
                <span className="the">the</span>
            </span>
            Day
        </h1>
        <h3 className="tag-line">
            <span>{props.tagline}</span>
        </h3>
    </header>
);

Header.protoTypes = {
    tagline: PropTypes.string
}

export default Header;