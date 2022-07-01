import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Blog from "./pages/Blog";
import AdminPage from "./pages/AdminPage";
import NewPost from "./pages/NewPost";
import Notification from "./pages/Notification";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/AdminPage' element={<AdminPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/NewPost' element={<NewPost />} />
        <Route path='/Notification' element={<Notification />} />
        <Route path='/Blog' element={<Blog />} />
      </Routes>

    </div>
  );
}

export default App;
