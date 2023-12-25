function Main({ name, city, position }) {
  return (
    <div className="block_item">
      <h2>{name}</h2>
      <ul>
        <li>{city}</li>
        <li>c++</li>
        <li>python</li>
      </ul>
      <p>{position}</p>
    </div>
  );
}

export default Main;
