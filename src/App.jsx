import './App.css';

// Components Imports
import HomeLayout from './components/layouts/HomeLayout';
import Banner from "./components/Banner/Banner";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Banner />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
