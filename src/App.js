import React from 'react';
import './App.css';

// class HelloMessage extends React.Component {
//   render() {
//     return (
//       <div>
//         Hello {this.props.name}
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class TaskList extends React.Component {
  state = {
    items: [
      { id: 1, name: "Dubug service", isDone: false },
      { id: 2, name: "Buy chocolates", isDone: false },
      { id: 3, name: "Watch anime ", isDone: false },
      { id: 4, name: "Pubg ", isDone: false }
    ]
  };
  render() {
    const { items } = this.state;

    return (
      <div>
        <button
          onClick={() => {
            const name = prompt("Enter Task");
            if (name) {
              this.setState(state => ({
                items: [...state.items, { id: state.items.length, name: name, isDone: false}]
              }));
            }
          }}
        >
          Add Item
        </button>
        <ul>
          {items.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// export default App;
export default TaskList;
