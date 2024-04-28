import './App.css';
import {useState, useEffect} from 'react';

function App() {

  let[isRunning, setIsRunning] = useState(false);
  let[time, setTime] = useState(0);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  useEffect(()=>{
    let intervalID;
    if(isRunning){
      intervalID = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalID);
  },[isRunning]);

  const formatTime = (time) => {
    let min = Math.floor(time/60);
    let sec = time % 60;
    return `${min}:${sec > 10 ? '' : '0'}${sec}`;
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className="App">
      <div>
        <h1>Stopwatch</h1>
      </div>
      <div>
        <p>Time: {formatTime(time)}</p>
        <button className='startButton' onClick = {handleStartStop} >{isRunning ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
