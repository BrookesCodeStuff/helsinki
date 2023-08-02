import Part from './Part';

const Content = ({ content }) => {
  const total = content.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);
  return (
    <>
      {content.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <p>
        <strong>total of {total}</strong>
      </p>
    </>
  );
};

export default Content;
