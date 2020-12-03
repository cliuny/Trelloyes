import React from 'react';
import Card from './Card';
import './List.css'

// Each instance of the List component should be passed 2 props (and a key). 
// The 2 props are header and cards.
function List(props){
  //const cards = props.cards.map(x => <Card 
  //  title={Store.allCards[x].title} 
  //  content={Store.allCards[x].content} />)
  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {props.cards.map(
          card => (
            <Card
              key={card.id} 
              title={card.title}
              content={card.content}
              />
          )
        )}
        <button type="button" class="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  )
}

export default List;