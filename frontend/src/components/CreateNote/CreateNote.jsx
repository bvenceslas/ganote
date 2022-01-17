import './index.css';

const CreateNote = () => {
    return (
        <div className="create-note">
            <h1>Create Note</h1>

            <form>
                <div className="form-container">
                    <div className="input-wrapper">
                            <label>Titre</label>                        
                            <input 
                                type="text"
                                required
                            />
                    </div>
                    <div className="input-wrapper">
                        <label>Description</label>                        
                        <textarea 
                        >
                        </textarea>
                    </div>
                    <div className="input-wrapper">
                        <label>Importance</label>
                        <select 
                            >
                            <option value="Homme">Normal</option>
                            <option value="Femme">Urgent</option>
                            <option value="Femme">Necessaire</option>
                            <option value="Femme">A savoir</option>
                            <option value="Non Specifié">Non Specifiée</option>
                        </select>
                    </div>
                    <div className="input-wrapper">
                        <label></label>
                        <button type="submit">Adding Contact</button>
                    </div>
                </div>
                
            </form>
        </div>
    );
}
 
export default CreateNote;