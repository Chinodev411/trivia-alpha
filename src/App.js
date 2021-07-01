import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Cards from './components/Cards';
import CardDetails from './components/CardDetails';
import About from './components/About';





function App() {
  const [cards, setCards] = useState([]);

  const getCards = async () => {
    const url = "https://opentdb.com/api.php?amount=50&category=18";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCards(data.results);
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(()=> {
    getCards();
  }, []);

  
  return (
    <>

    <header>
      <h1>
        <a href='/'><p className="trivia">Trivia Alpha Search</p></a>
      </h1>
      <Link to ='/about'><p className="about">About Trivia History</p></Link>

    </header>
    <main>
      <Route path='/' exact render={() => <Cards cards={cards} />} />

      <Route path='/answer/:correct_answer' component={CardDetails} />

      <Route path='/about' exact render = {()=> <About />} />

    </main>

  </>
  );
}

export default App;
