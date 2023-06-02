// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
// import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Home/>
    </div>
  );

}

export default App;






// const [likes, setLikes] = useState(0);
  // const handleLike = () => {
  //   setLikes(prevLike => prevLike + 1);
  // }
  // const handleDislike = () => {
  //   setLikes(prevLike => prevLike - 1);
  // }
  // return (
  //   <div className="App">
  //     <h1 style={{color:"red",fontStyle:"italic"}}>You got {likes} Likes!!!</h1>
  //     <button onClick={handleLike}>Like</button>
  //     <button onClick={handleDislike}>Dislike</button>
  //   </div>
  // );