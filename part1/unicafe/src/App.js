import { useState } from 'react';
import Button from './components/Button';
import Statistic from './components/Statistic';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistic text="good" count={good} />
      <Statistic text="neutral" count={neutral} />
      <Statistic text="bad" count={bad} />
    </>
  );
};

export default App;
