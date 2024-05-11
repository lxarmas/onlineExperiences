import React from 'react';


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Card from './components/Card';
import data from './components/data';
function App() {

  const cardElements = data.map( card => {
    return <Card
      key={card.id}
      {...card}
    />
    
    
})
  return (
  
     <div>
      <Navbar />
      <Hero/>
            <section className="cards-list">
                {cardElements}
            </section>
        </div>
   
  )
}

export default App


