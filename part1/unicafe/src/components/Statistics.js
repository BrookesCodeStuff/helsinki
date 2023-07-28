import StatisticLine from './StatisticLine';

const Statistic = ({ good, neutral, bad, score, total }) => {
  if (total) {
    return (
      <>
        <StatisticLine text="good" count={good} />
        <StatisticLine text="neutral" count={neutral} />
        <StatisticLine text="bad" count={bad} />
        <StatisticLine
          text="average"
          count={score / total > 0 ? score / total : 0}
        />
        <StatisticLine
          text="positive"
          count={good / total > 0 ? `${(good / total) * 100}%` : 0}
        />
      </>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

export default Statistic;
