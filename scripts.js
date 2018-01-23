var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: 0
    };
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  },

  square: function() {
    this.setState({
      counter: this.state.counter * this.state.counter
    })
  },

  render: function() {
    return React.createElement('div', {},
      React.createElement('button', {
        onClick: this.increment
      }, 'Add 1'),
      React.createElement('button', {
        onClick: this.decrement
      }, 'Take away 1'),
      React.createElement('button', {
        onClick: this.square
      }, 'Square'),
      React.createElement('span', {}, this.state.counter)
    );
  }
});

var element = React.createElement('div', {},
  React.createElement(Counter, {}),
  React.createElement(Counter, {}),
  React.createElement(Counter, {}),
);

ReactDOM.render(element, document.getElementById('app'));