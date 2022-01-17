import './index.css';

const NoteDetails = () => {
    return ( 
        <div className="note-details">
            <h1>Details of {'NoteX'}</h1>

            <div className="notedet-container">
                <div className="notedet-wrapper">
                    <h2 className="notedet-subject">How to get involved in Love</h2>
                    <p className="notedet-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className="notedet-decision">-- Urgent --</p>
                    <div className="delete">Delete Note</div>
                </div>
            </div>
        </div>
     );
}
 
export default NoteDetails;