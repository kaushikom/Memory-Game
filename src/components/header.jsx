export default function Header({score, bestScore}){
    return(
        <header>
               <h1 className='sm:text-8xl text-6xl bold text-center py-1'>Memory Game</h1>
               <p className="text-center text-2xl italic opacity-80">Don't click the same card twice</p>
               <div className="flex justify-center gap-x-20 mt-2">
                <div className="text-2xl">Score: {score}</div>
                <div className="text-2xl">Best Score: {bestScore}</div>
               </div>
        </header>
    )
}