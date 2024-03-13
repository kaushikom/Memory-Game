import { useState, useEffect } from 'react'
import Header from './components/header';
import Cards from './components/cards';

function App() {
 const [data, setData] = useState(null);
 const [score, setScore] = useState(0);
 const [bestScore, setBestScore] = useState(0);
 if(score>bestScore) setBestScore(score);
 function updateScore(newScore){
  setScore(newScore);
 }
 useEffect(()=>{
  const fetchData = async () => {
      try {
        const response = await fetch('https://api.potterdb.com/v1/movies');
        const jsonData = await response.json();
         const filteredData = jsonData.data.map(item => ({
          poster: item.attributes.poster,
          title: item.attributes.title
        }));
        setData(filteredData)
        console.log(filteredData); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  function shuffleArray(array) {
  // Create a copy of the original array to avoid mutation
  const shuffledArray = array.slice();
  
  // Fisher-Yates shuffle algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}
 const shuffleAndSetArray = () => {
    const newShuffledArray = shuffleArray(data);
    setData(newShuffledArray);
  };

  return (
    <>
  <Header score={score} bestScore={bestScore} />
  {data && <Cards updateScore={updateScore} shuffle={shuffleAndSetArray} data={data}/>}
    </>
  )
}

export default App
