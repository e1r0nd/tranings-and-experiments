const ImageCounter = function(props) {
    return (
        <div className="image-count">
            <div className="count">{props.count}</div>
            <img src={props.imgUrl} onClick={props.onCount} />
        </div>
    );
}

const Hero = React.createClass({
    getInitialState: function() {
        return {
            count: 0
        };
    },
    handleClick: function() {
        this.setState({ count: this.state.count + 1 });
    },
    render: function() {
        return (
            <div className="container">
                <ImageCounter imgUrl={this.props.imgUrl} count={this.state.count} onCount={this.handleClick} />
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
});

const App = React.createClass({
    render: function() {
        return  (
            <div>
                {this.props.heroes.map((hero) => {
                    return (
                        <Hero
                            key={id}
                            title={hero.title}
                            subtitle={hero.subtitle}
                            imgUrl={hero.imgUrl}
                        />
                    )
                })}
            </div>
        );
    }
});

const data = [
    {
        id: 1,
        title: "React",
        subtitle: "Test text goes here",
        imgUrl: "https://facebook.github.io/react/img/logo.svg"
    },
    {
        id: 2,
        title: "Angular",
        subtitle: "Yet another one",
        imgUrl: "https://angular.io/resources/images/logos/angular2/angular.svg"
    }
]

ReactDOM.render(<App heroes={data} />, document.getElementById('root'));