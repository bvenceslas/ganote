import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
        <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
