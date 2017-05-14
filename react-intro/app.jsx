var ImageCounter = function(props) {
    return (
        <div className="image-counter">
            <div className="count">{props.count}</div>
            <img src={'img/' + props.imageUrl} onClick={props.onCount} />
        </div>
    );
}

var Hero = React.createClass({
    getInitialState: function() {
        return {
            count: 0
        };
    },

    handleClick: function () {
        this.setState({ count: this.state.count + 1 });
    },

    render: function() {
        return (
            <div className="container">
                <ImageCounter imageUrl={this.props.imageUrl} count={this.state.count} onCount={this.handleClick} />
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div>
                {this.props.heroes.map(function(hero) {
                    return <Hero key={hero.id} title={hero.title} subtitle={hero.subtitle} imageUrl={hero.imageUrl} />
                })}
            </div>
        );
    }
});

var data = [
    {
        id: 1,
        title: 'React',
        subtitle: 'Библиотека для создания пользовательских интерфейсов',
        imageUrl: 'react.png'
    },
    {
        id: 2,
        title: 'Angular 2',
        subtitle: 'Один фреймворк',
        imageUrl: 'angular.png'
    },
    {
        id: 3,
        title: 'Ember',
        subtitle: 'Фреймворк для создания амбициозных веб-приложений',
        imageUrl: 'ember.png'
    },
    {
        id: 4,
        title: 'Vue',
        subtitle: 'Прогрессивный фреймворк',
        imageUrl: 'vue.png'
    }
];

ReactDOM.render(<App heroes={data} />, document.getElementById('root'));