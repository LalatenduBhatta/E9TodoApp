import AddTask from "./AddTask"
import DisplayTask from "./DisplayTask"
import Navbar from "./Navbar"

const TodoMain = () => {
    return (
        <div style={{ background: "white" }}>
            <Navbar />
            <AddTask />
            <DisplayTask />
        </div>
    )
}
export default TodoMain