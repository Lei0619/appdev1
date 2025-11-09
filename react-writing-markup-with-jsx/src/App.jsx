export default function App() {
  const title = "My JSX Page";
  const items = ["React", "Vite", "Components"];

  return (
    <div>
      <h1>{title}</h1>
      <p>built using JSX</p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
