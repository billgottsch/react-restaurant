var MenuItems = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.items.map(function(item){
          return (<li>{item}</li>)
        })}
      </ul>
    )
  }
});

var Menu = React.createClass({
  render: function() {
    console.log(this.props.choices);
    return (
      <div>
        Generic Bill's options for {this.props.title}
        <MenuItems items={this.props.choices} />
      </div>
    )
  }
});


var App = React.createClass({
  getInitialState: function() {
    return {
      query: '',
      isOpen: true
    }
  },
  isIndexMatch: function(item) { // Search function
  return item.indexOf(this.state.query) > -1;
  },
  onNewSearchValue: function(e) { // Search input handler
  console.log('food entered', e.target.value);
  this.setState({
    query: e.target.value
  })
},
onSearchButtonClick: function() { // Button click handler
  console.log('You searched for ', this.state.query);
},
  render: function() {
    console.log(this.props.choices);
    return (
      <div>
        <h1> Hi! Welcome to {this.props.name}</h1>
        <input role="search" type="text" placeholder="Find a food..."  onChange={this.onNewSearchValue.bind(this)} />
        <button onClick={this.onSearchButtonClick}>Search</button>
        <Menu title="Tacos" choices={this.props.choices.slice(0,4,8).filter(this.isIndexMatch)} />
        <Menu title="Burritos" choices={this.props.choices.slice(4,6).filter(this.isIndexMatch)} />
        <Menu title="Nachos" choices={this.props.choices.slice(6,8).filter(this.isIndexMatch)} />
        <Menu title="Salads" choices={this.props.choices.slice(9,12).filter(this.isIndexMatch)} />
        <Menu title="Beverages" choices={this.props.choices.slice(12,19).filter(this.isIndexMatch)} />

      </div>
    )
  }
});

ReactDOM.render(
  <App name="Generic Bill's Sketchy Tacos"
  choices={[
    'Fish Tacos',
    'Beef Tacos',
    'Chicken Tacos',
    'Vege Tacos',
    'Chicken Burritos',
    'Beef and Cheese Burritos',
    'Deluxe Nachos',
    'Meat Lovers Nachos',
    'Vege Tacos',
    'Garden Salad',
    'Chef Salad',
    'Grilled Chicken Salads',
    'Pepsi',
    'Diet Pepsi',
    'Mountain Dew',
    'Sierra Mist',
    'Lemonade',
    'Raspberry Ice Tea',
    'Water'
  ]} />, document.getElementById('restaurant'));
