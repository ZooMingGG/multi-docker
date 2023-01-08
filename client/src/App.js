import Fib from './Fib';
import OtherPage from './OtherPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="link-container">
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other page</Link>
        </div>
        <div>
          <Routes>
            <Route exact path="/" element={<Fib />} />
            <Route exact path="/otherpage" element={<OtherPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
