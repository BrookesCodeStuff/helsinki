import { useState } from 'react';
import Button from './components/Button';
import Statistic from './components/Statistic';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      <Button
        handleClick={() => {
          setGood(good + 1);
          setScore(score + 1);
          setTotal(total + 1);
        }}
        text="good"
      />
      <Button
        handleClick={() => {
          setNeutral(neutral + 1);
          setTotal(total + 1);
        }}
        text="neutral"
      />
      <Button
        handleClick={() => {
          setBad(bad + 1);
          setScore(score - 1);
          setTotal(total + 1);
        }}
        text="bad"
      />
      <h1>statistics</h1>
      <Statistic text="good" count={good} />
      <Statistic text="neutral" count={neutral} />
      <Statistic text="bad" count={bad} />
      <Statistic text="average" count={score / total > 0 ? score / total : 0} />
      <Statistic
        text="positive"
        count={good / total > 0 ? `${(good / total) * 100}%` : 0}
      />
    </>
  );
};

export default App;
