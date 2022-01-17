import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import axios from 'axios';

const CreateNote = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const url = 'http://localhost:5000/api/notes';

    const [formData, setFormData] = useState({
        subject: '',
        note: '',
        decision: 'Normal'
    });

    const navigate = useNavigate();

    const  handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        await axios.post(url, formData)
            .then((res) => {
                setLoading(false);
                setError(null);
                console.log('Note created successfully ', res.data);
                navigate('/');                
        }).catch(error => {
            setError(error);
            setLoading(false);
        });
    }

    return (
        <div className="create-note">
            <h1>Create Note</h1>
            
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <div className="input-wrapper">
                            <label>Subject</label>                        
                            <input 
                                type="text"
                                required                            
                                value={formData.subject}
                                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            />
                    </div>
                    <div className="input-wrapper">
                        <label>Note</label>                        
                        <textarea                            
                            value={formData.note}
                            onChange={(e) => setFormData({...formData, note: e.target.value})}
                        >
                        </textarea>
                    </div>
                    <div className="input-wrapper">
                        <label>Importance</label>
                        <select                            
                            value={formData.decision}
                            onChange={(e) => setFormData({...formData, decision: e.target.value})}
                        >
                            <option value="Normal">Normal</option>
                            <option value="Urgent">Urgent</option>
                            <option value="Necessaire">Necessaire</option>
                            <option value="A savoir">A savoir</option>
                            <option value="Non Specifié">Non Specifiée</option>
                        </select>
                    </div>
                    <div className="input-wrapper">
                        <label></label>
                        { loading && <button type="submit" disabled>Creating ...</button> }
                        {!loading && <button type="submit">Create Note</button> }
                    </div>
                    {error && <div
                                style={{
                                    color: '#d02580',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    marginTop: '50px'
                                }}
                            >
                                { error }
                            </div>}
                </div>
                
            </form>
        </div>
    );
}
 
export default CreateNote;