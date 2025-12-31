import { use, useState } from 'react'


import './App.css'
import {ScoreBoard} from './score';
import {Card} from './card';

let initialCards = ['ditto','pikachu','charmander','squirtle','bulbasaur','mudkip','gyarados','dragonite','gengar','mewtwo','wobbuffet','pidgey','jigglypuff','Togepi','meowth','butterfree'];

function App() {

  const [score,setScore] = useState(0);
  const[maxScore,setMaxScore] = useState(0);
  const [cardList,setCardList] = useState(initialCards);
  const [selectedList,setSelectedList] = useState([]);
  
  if(hasDuplicates(selectedList)){
    setSelectedList([]);
    setMaxScore(Math.max(score,maxScore));
    setScore(0);
    
    return (
      <h1>YOU HAVE LOST!</h1>
    )
  }

  if(score>=initialCards.length){
    
    
    return (
      <h1>YOU HAVE WON!</h1>
    )
  }

  return (
    <div className='pokemon'>
      
      <h1>Memory Card</h1>
      <h3>Get points by clicking on an image but don't click on any more than once!</h3>
      <div>
        <ScoreBoard score={score} max={maxScore}/>
      </div>

      <div className='game'>
        
        {cardList.map((card,i)=> { 
          return <button onClick={() => {
            setScore(score+1);
            setCardList(shuffle(cardList));
            setSelectedList([...selectedList,card])
          }}><Card key={i} index={i} pokemon={card} selected={selectedList}/> </button>
          })}
        
      </div>
     
    </div>
  )
}

function shuffle(cards) {
  
  let cardDummy = [...cards]
  let currentIndex = cards.length;
  let randomIndex = 0;

  while(currentIndex !== 0){
    
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [cardDummy[currentIndex], cardDummy[randomIndex]] = [cardDummy[randomIndex], cardDummy[currentIndex]];
  }

  return cardDummy;
}

function hasDuplicates(selected) {
  
  let duplicates = selected.filter((item,index) => selected.indexOf(item)!== index);

  if(duplicates.length>0){
    return true;
  }
  else {
    return false;
  }
}

export default App
