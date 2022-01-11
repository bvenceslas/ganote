import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar'
import CreateNote from './components/CreateNote/CreateNote.jsx';
import NoteDetails from './components/NoteDetails/NoteDetails.jsx';

function App() {
  return (
    <div className="App">
        <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-note" element={<CreateNote />} />
          <Route path="/notes/:id" element={<NoteDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
