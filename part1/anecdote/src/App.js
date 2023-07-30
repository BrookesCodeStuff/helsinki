import { useState } from 'react';
import Anecdote from './components/Anecdote';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const initialPoints = [0, 0, 0, 0, 0, 0, 0, 0];
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(initialPoints);
  const [mostVotes, setMostVotes] = useState(0);

  const handleAncedoteClick = () => {
    return setSelected(Math.floor(Math.random() * 8));
  };

  const handleVoteClick = (anecdoteIndex) => {
    const newPoints = points.map((point, index) => {
      return index === anecdoteIndex ? point + 1 : point;
    });
    setPoints(newPoints);
    setMostVotes(newPoints.indexOf(Math.max(...newPoints)));
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdotes={anecdotes} selected={selected} points={points} />
      <button onClick={() => handleVoteClick(selected)}>vote</button>
      <button onClick={handleAncedoteClick}>next anecdote</button>
      <h1>Anecdote with the most votes</h1>
      <Anecdote anecdotes={anecdotes} selected={mostVotes} points={points} />
    </>
  );
};

export default App;
