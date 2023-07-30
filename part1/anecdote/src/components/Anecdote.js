const Anecdote = ({ anecdotes, selected, points }) => {
  return (
    <>
      <p>
        {anecdotes[selected]} <br />
        has {points[selected]} votes.
      </p>
    </>
  );
};

export default Anecdote;
