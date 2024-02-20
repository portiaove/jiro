import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import JiroForm from "./components/JiroForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JiroForm />} />
        {/* <Route path="/result" element={<ResultPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
