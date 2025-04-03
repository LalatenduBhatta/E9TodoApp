import "../css/DisplayTask.css"
import { MdDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useState } from "react";
import EditTask from "./EditTask";
const DisplayTask = () => {
    const [isEditMode, setIsEditMode] = useState(false)
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="task">
                        <p>HELLO WORLD</p>
                    </div>
                    <div className="buttons">
                        <button onClick={() => setIsEditMode(true)}>
                            <FaEdit />
                        </button>
                        <button>
                            <MdDeleteForever />
                        </button>
                    </div>
                </div>
            </div>
            {
                isEditMode && <EditTask setIsEditMode={setIsEditMode} />
            }
        </>
    )
}
export default DisplayTask