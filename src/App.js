import React, { useState } from 'react';
import './App.scss';
import Article from './components/Article';

const data = [
  {
    id: 1,
    title: "Was it the greatest day of the Euros, ever?",
    content: "Two games went to extra time after late goals overturned 3-1 deficits in extraordinary fashion and there were 14 goals in total - the second most in the competition's history. Last Wednesday there were 18 goals across four games but today's 240 minutes of drama gave that record a good run for its money. In Copenhagen, there was a bizarre own goal, late heroics from substitutes and broken hearts at full- time.",
    color: "red"
  },
  {
    id: 2,
    title: "Was it the greatest day of the Euros, ever?",
    content: "Two games went to extra time after late goals overturned 3-1 deficits in extraordinary fashion and there were 14 goals in total - the second most in the competition's history. Last Wednesday there were 18 goals across four games but today's 240 minutes of drama gave that record a good run for its money. In Copenhagen, there was a bizarre own goal, late heroics from substitutes and broken hearts at full- time.",
    color: "blue"
  },
  {
    id: 3,
    title: "Was it the greatest day of the Euros, ever?",
    content: "Two games went to extra time after late goals overturned 3-1 deficits in extraordinary fashion and there were 14 goals in total - the second most in the competition's history. Last Wednesday there were 18 goals across four games but today's 240 minutes of drama gave that record a good run for its money. In Copenhagen, there was a bizarre own goal, late heroics from substitutes and broken hearts at full- time.",
    color: "green"
  },
  {
    id: 4,
    title: "Was it the greatest day of the Euros, ever?",
    content: "Two games went to extra time after late goals overturned 3-1 deficits in extraordinary fashion and there were 14 goals in total - the second most in the competition's history. Last Wednesday there were 18 goals across four games but today's 240 minutes of drama gave that record a good run for its money. In Copenhagen, there was a bizarre own goal, late heroics from substitutes and broken hearts at full- time.",
    color: "yellow"
  },

];
function App() {
  const [headerColor, setHeaderColor] = useState("black");
  const [activeArticle, setActiveArticle] = useState(null);
  const headerClassnames = "App-header text-center " + headerColor;
  const onBtnClick = (id, color) => {
    setActiveArticle(id);
    setHeaderColor(color);
  };
  const mainContent =
    data.map((article) => {
      return (
        <div key={article.id} className="col-12 col-md-6 my-2">
          <Article {...article} active={activeArticle === article.id} onBtnClick={onBtnClick} />
        </div>);
    });

  return (
    <div className="App container">
      <header className={headerClassnames}>
        <h1>
          Two games, 14 goals, one giant-killing: The best day in Euros history?
        </h1>
      </header>
      <main className="main-content container">
        <div className="row d-flex">
          {mainContent}
        </div>
      </main>
    </div>
  );
}

export default App;
