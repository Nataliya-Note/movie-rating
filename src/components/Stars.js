import Star from './Star';

export default function Stars({ count }) {
  if (count < 1 || count > 5) {
    return null;
  }

  const arr = new Array(count).fill(undefined);

  return (
    <ul class="card-body-stars">
      {arr.map((_, index) => <Star key={index} />)}
    </ul>
  );
}