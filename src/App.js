import AppTask from "./components/AppTask";
import { TaskContextProvider } from "./context/TaskContext";
import './App.css'
function App() {
  return (
    <TaskContextProvider>
      <AppTask />
    </TaskContextProvider>
  );
} 

export default App;
