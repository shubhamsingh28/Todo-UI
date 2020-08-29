import React from 'react';
import './App.css';
import { render } from '@testing-library/react';

class TaskList extends React.Component {
  state = {
    todoItems: [
      { id: 1, name: "Dubug service", isDone: false },
      { id: 2, name: "Buy chocolates", isDone: false },
      { id: 3, name: "Watch anime ", isDone: false },
      { id: 4, name: "Pubg ", isDone: false }
    ],
    doneItems: [
      { id: 5, name: "git repo initialized", isDone: true },
      { id: 6, name: "kill Zoro", isDone: true },
      { id: 7, name: "Fighting Space monster", isDone: true },
      { id: 8, name: "Sleeping ", isDone: true }
    ]
  };
  render() {
    //TODO:Get list from server
    console.log("HEllo");
    console.log(this.state);
    var { items } = this.state;

    return (
      <div>
        <TodoTaskList item = {items}></TodoTaskList>
        <DoneTaskList item = {items}></DoneTaskList>
      </div>
    );
  }
}


class TodoItem extends React.Component{
  render() {
    return (
      <div>
        <input type="checkbox" id="this.props.id" name="this.props.name">
        </input>
        <label>{this.props.name}</label>
      </div>
    );
  }
}

class DoneTaskList extends React.Component {
  render() {
    return (
      <div>
        <p>Done list </p>

      </div>
    );
  }
}

class TodoTaskList extends React.Component {
  //don't use this state variable
  state = {
    items: [
      { id: 1, name: "Dubug service", isDone: false },
      { id: 2, name: "Buy chocolates", isDone: false },
      { id: 3, name: "Watch anime ", isDone: false },
      { id: 4, name: "Pubg ", isDone: false }
    ]
  };
  render() {
    //use props params passed by prameters
    //let { items } = this.props.item;
    let { items } = this.state;


    return (
      <div>
        <button class="favorite styled" type="button"
          onClick={() => {
            const name = prompt("Enter Task");
            if (name) {
              this.setState(state => ({
                // use better logic for generating ids
                items: [...state.items, { id: Math.random()* 100000, name: name, isDone: false}]
              }));
            }
          }}
        >
          Add Item
        </button>
          {items.map(({ id, name, isDone}) => (
            <TodoItem key={id} name={name} isDone={isDone}/>
          ))}
      </div>
    );
  }
}

// export default App;
export default TaskList;
