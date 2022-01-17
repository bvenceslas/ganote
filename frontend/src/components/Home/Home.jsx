import './index.css';
import NoteList from "../NoteList/NoteList";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {

    const [notes, setNotes] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const noteUrl = 'http://localhost:5000/api/notes';
    
    useEffect(() => {
        console.log(`useEffect notes >>> `, notes);
        setLoading(true);
        axios({
            method: 'GET',
            url: noteUrl
        }).then(res => {
            if(res.status === 200) {
                setNotes(res.data);
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

    return (
        <div className="homepage">
            { loading && <div>Loading...</div> }
            { error && <div>{error.message}</div> }
            { notes && <NoteList notes={notes}/> }
        </div>
    );
}
 
export default Home;