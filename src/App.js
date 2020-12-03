import React from 'react';
import './App.css';
import List from './List'

// The App should render a List component for each of the items in the store.lists array.
class App extends React.Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  }
  render() {
    const {store} = this.props;
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {store.lists.map(x => (
            <List 
              key={x.id} 
              header={x.header} 
              cards={x.cardIds.map(id => store.allCards[id])} />
          ))}
        </div>
      </main>
    );
  }
  
}

export default App;
