import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import "./styles/bootstrap.css";
import "./styles/styles.css";
import Main from "./Main";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main taskNumber={1} />} />
        <Route path="task5-choice" element={<Main taskNumber={2} />} />
        <Route path="task6" element={<Main taskNumber={3} />} />
      </Routes>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
      <Router>
          <App/>
      </Router>
  );
}

export default AppWrapper;
