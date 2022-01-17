import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './index.css';
import axios from 'axios';

const NoteDetails = () => {

    const { id } = useParams();
    const [note, setNote] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const noteUrl = 'http://localhost:5000/api/notes/' + id;
    const navigate = useNavigate();
    
    useEffect(() => {
        setLoading(true);
        axios({
            method: 'GET',
            url: noteUrl
        }).then(res => {
            if(res.status === 200) {
                setNote(res.data);
                setLoading(false);
                setError(null);                
            }else {
                setLoading(false);
                setError(res.data.message);
            }
        }).catch(error => {
            setError(error);
            setLoading(false);
        })
        
    }, []);

    const handleDelete = () => {
        axios({
            method: 'DELETE',
            url: noteUrl
        }).then(res => {
            if(res.status === 200) {
                setLoading(false);
                setError(null);                
                navigate('/');
            }else {
                setLoading(false);
                setError(res.data.message);
            }
        }).catch(error => {
            setError(error);
            setLoading(false);
        })
    }

    return ( 
        <div className="note-details">
            {note && <h1>{`Note >>> ${note.subject}`}</h1>}
            {!note && <h1>{`Note Details`}</h1>}

            <div className="notedet-container">
                { loading && <div>Loading...</div>}
                { error && <div>{error.message}</div>}
                {
                    note && (
                        <div className="notedet-wrapper">
                            <h2 className="notedet-subject">{ note.subject }</h2>
                            <p className="notedet-description">{ note.note }</p>
                            <p className="notedet-decision">-- {note.decision} --</p>
                            <div className="delete" onClick={handleDelete}>Delete Note</div>
                        </div>
                    )
                }
            </div>
        </div>
     );
}
 
export default NoteDetails;