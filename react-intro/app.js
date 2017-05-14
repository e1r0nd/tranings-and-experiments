const image = React.createElement('img', { src: 'https://facebook.github.io/react/img/logo.svg'});
const title = React.createElement('h1', null, 'Hi React!');
const subtitle = React.createElement('p', null, 'Library');
const container = React.createElement('div', {className: 'container'}, image, title, subtitle);

ReactDOM.render(container, document.getElementById('root'));