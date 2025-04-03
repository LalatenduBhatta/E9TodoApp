import "../css/AddTask.css"
function AddTask() {
    return (
        <>
            <div className="addtask">
                <input type="text" required placeholder="Write your task here......." />
                <button>ADD TASK</button>
            </div>
        </>
    )
}
export default AddTask