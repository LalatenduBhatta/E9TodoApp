import "../css/EditTask.css"
const EditTask = ({ setIsEditMode }) => {
    return (
        <div className="edit-task">
            <div className="main">
                <h1>EDIT YOUR TASK</h1>
                <textarea name="" id="" cols={50} rows={5}></textarea>
                <div className="buttons">
                    <button>UPDATE TASK</button>
                    <button onClick={() => setIsEditMode(false)}>CLOSE</button>
                </div>
            </div>
        </div>
    )
}
export default EditTask