import "./App.css";
import ToDoList from "./Components/ToDoList";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>ToDo List</h1>
            </header>
            <div className="App-Content">
                <ToDoList />
            </div>
        </div>
    );
}

export default App;
