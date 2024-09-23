import './App.css';

// Components Imports
import HomeLayout from './components/layouts/HomeLayout';
import Banner from "./components/Banner/Banner";
import { Route, BrowserRouter as Router, Routes, Switch } from 'react-router-dom';
import Introduction from './components/Introduction/Introduction';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={
              <>
                <Introduction />
                <Banner />
              </>
              } 
          />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
