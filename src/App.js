import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Cards from './components/Cards';
import CardDetails from './components/CardDetails';
import NewCards from './components/NewCards';





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
      <Link to ='/new'><p className="video">Find Trivia Videos</p></Link>
    </header>
    <main>
      <Route path='/' exact render={() => <Cards cards={cards} />} />

      <Route path='/answer/:correct_answer' component={CardDetails} />

    </main>

  </>
  );
}

export default App;
