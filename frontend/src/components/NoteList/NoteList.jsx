import { Link } from 'react-router-dom';
import './index.css';

const NoteList = ({ notes }) => {
    
    return ( 
        <div className="note-list">
            <h1>Vos notes</h1>

            <div className="note-container">
                {
                    notes.map(note => (
                    <div className="note-wrapper" key={note._id}>
                        <h2 className="note-subject">{note.subject}</h2>
                        <p className="note-description">{note.note}</p>
                        <p className="note-decision">-- {note.decision} --</p>
                        <Link to={`notes/${note._id}`} className="read-more">Read more</Link>
                    </div>
                    ))
                }                
            </div>
        </div>
    );
}
 
export default NoteList;