import React, { Component } from "react";

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      todo: {
        title: ["item1", "item2"]
      },
      done: {
        title: ["item3", "item4"]
      }
    };
    this.removeItem = this.removeItem.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(description) {
    this.setState({
      value: description.target.value
    });
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
      this.setState(state => ({
        todo: {
          title: [...state.todo.title, this.state.value]
        },
        value: ""
      }));
    }
  };

  removeItem(item) {
    this.setState({
      todo: {
        title: this.state.todo.title.filter(thing => thing !== item)
      },
      done: {
        title: [...this.state.done.title, item]
      }
    });
  }

  render() {
    return (
      <Dashboard
        value={this.state.value}
        handleKeyPress={this.handleKeyPress}
        handleInputChange={this.handleInputChange}
        items={this.state}
        removeItem={this.removeItem}
      />
    );
  }
}

const Dashboard = props => {
  return (
    <div>
      <Todo
        handleKeyPress={props.handleKeyPress}
        handleInputChange={props.handleInputChange}
        items={props.items.todo.title}
        removeItem={props.removeItem}
        value={props.value}
      />
      <Done items={props.items.done.title} />
    </div>
  );
};

const Todo = props => (
  <div>
    <div>Todo</div>
    <input
      value={props.value}
      type="text"
      onKeyPress={props.handleKeyPress}
      onChange={props.handleInputChange}
    />
    <ul>
      {props.items.map(item => (
        <li onClick={() => props.removeItem(item)}>{item}</li>
      ))}
    </ul>
  </div>
);

const Done = props => (
  <div>
    Done
    <ul>
      {props.items.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  </div>
);

export default DashboardContainer;
