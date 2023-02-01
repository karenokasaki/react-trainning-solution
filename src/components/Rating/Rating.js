import './Rating.css';

function Rating(props) {
  const numberOfStars = Math.round(props.children);

  let result = '★'.repeat(numberOfStars).padEnd(5, '☆');

  let style = { fontSize: '2rem' };

  return <p style={style}>{result}</p>;
}

export default Rating;
