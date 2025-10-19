function MyButton() {
  return <button>I'm a button</button>;
}

export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      <p>This is written in JSX 🚀</p>
    </div>
  );
}

export default function App() {
  return (
    <h1 style={{ color: 'blue', textAlign: 'center' }}>Styled Heading</h1>
  );
}

const user = { name: 'Lei', imageUrl: 'https://placekitten.com/200/200' };

export default function App() {
  return (
    <>
      <h1>{user.name}</h1>
      <img src={user.imageUrl} alt="User avatar" />
    </>
  );
}

let isLoggedIn = true;

export default function App() {
  return (
    <div>
      {isLoggedIn ? <h2>Welcome back!</h2> : <h2>Please sign in.</h2>}
    </div>
  );
}
