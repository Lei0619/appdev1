import Header from './components/Header';
import Footer from './components/Footer';
import Greeting from './components/Greeting';

function App() {
  return (
    <>
      <Header />
      <Greeting />
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
