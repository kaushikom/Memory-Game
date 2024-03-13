import { useState } from "react";
import Card from "./card";


export default function Cards({data, shuffle, updateScore}){
    const [scoreArray, setScoreArray] = useState([])
    function handleClick(e){
        const newItem = e.target.alt;
        shuffle();
        
        if (scoreArray.includes(newItem)) {
            setScoreArray([]);
           alert('game over');
        } else {
             setScoreArray(prevScoreArray =>[...prevScoreArray, newItem]);
        }
        
    }
    if(scoreArray.length === 11){
        updateScore(scoreArray.length);
        setScoreArray([]);
        alert('You won the game')
    }
    console.log(scoreArray)
  updateScore(scoreArray.length)

    return(
        <main className="flex flex-col sm:flex-row justify-between flex-wrap border-2 border-white p-4 m-8">
            {data.map(item=><Card handleClick={handleClick} poster={item.poster} name={item.title} key={item.title} />)}
        </main>
    )
}