import StatisticLine from './StatisticLine';

const Statistic = ({ good, neutral, bad, score, total }) => {
  if (total) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" count={good} />
          <StatisticLine text="neutral" count={neutral} />
          <StatisticLine text="bad" count={bad} />
          <StatisticLine text="average" count={(score / total).toFixed(1)} />
          <StatisticLine
            text="positive"
            count={`${((good / total) * 100).toFixed(1)}%`}
          />
        </tbody>
      </table>
    );
  } else {
    return <p>No feedback given</p>;
  }
};

export default Statistic;
