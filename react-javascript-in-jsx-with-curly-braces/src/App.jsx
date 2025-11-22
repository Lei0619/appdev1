export default function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Dico Lei Ann Judea"
      />
      <ul>
        <li>Implement Testing</li>
        <li>Finish Deliverables</li>
        <li>Work</li>
      </ul>
    </div>
  );
}

