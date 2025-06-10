import Counter from './components/Counter';
import Timer from './components/Timer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <span role="img" aria-label="lightning" style={{marginRight: 8}}>⚡</span>
          PlanWise
        </h1>
        <p className="subtitle">
          <span role="img" aria-label="clock" style={{marginRight: 4}}>⏰</span>
          Counter & Live Clock Demo
        </p>
        <div className="card-group">
          <Counter />
          <Timer />
        </div>
        <footer className="footer">
          <a
            className="App-link"
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </footer>
      </header>
    </div>
  );
}

export default App;