import "./App.css";
import { Input } from "./Input";

function App() {
  return (
    <div data-test="app-component" className="App">
      <Input secretWord="party" />
    </div>
  );
}

export default App;
