import Header from './components/Header';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';
import GreetingConditional from './components/Conditional';
import UserList from './components/UserList';

function App() {
  return (
    <>
      <Header />
      <GreetingConditional isLoggedIn={true} />
      <GreetingConditional isLoggedIn={false} />
      <Greeting />
      <Welcome user="Lei" />
      <Welcome user="Alex" />
      <Welcome user="Kai" />
      <UserList />
      <p>Main content goes here.</p>
      <div>
        <h1>React with JSX</h1>
        <p>JSX lets you write HTML inside JavaScript.</p>
      </div>
      <Footer />
    </>
  );
}

export default App;
