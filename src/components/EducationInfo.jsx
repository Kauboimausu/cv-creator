export default function EducationInfo({ educationEntries, onChange, onDelete, onAdd }) {

    return (
        <form className="education-info-form" onChange={onChange}>

        {educationEntries.map(entry =>
            <form 
            key={"form-educationItem" + entry.id}
            >

                <label htmlFor={entry.id +  "school-name"}>School Name: </label>
                <input 
                type="text"
                name={entry.id +  "school-name"}
                id={entry.id +  "school-name"}
                placeholder="University of Sprinfield"
                required
                />

                <label htmlFor={entry.id +  "study-title"}>Title of Study: </label>
                <input 
                type="text"
                name={entry.id +  "study-title"}
                id={entry.id +  "study-title"}
                placeholder="B.S. Computer Science"
                required
                />

                <label htmlFor={entry.id +  "start-date"}>Start Date: </label>
                <input 
                type="date"
                name={entry.id +  "study-title"}
                id={entry.id +  "study-title"}
                placeholder="B.S. Computer Science"
                required
                />

                <button type="button" onClick={onDelete} className="delete-education-entry">
                    Delete Entry
                </button>
            </form>
        )}

        <button onClick={onAdd} className="add-education-entry" type="button" >
        Add Education Entry
        </button>


        </form>
    )
}