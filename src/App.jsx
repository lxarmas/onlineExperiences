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
      img={card.coverImg}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      location={card.location}
      title={card.title}
      price={card.price}
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


