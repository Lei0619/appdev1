import Header from './components/Header';
import Footer from './components/Footer';
import Greeting from './components/Greeting';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <Header />
      <Greeting />
      <Welcome user="Lei" />
      <Welcome user="Alex" />
      <Welcome user="Kai" />
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
