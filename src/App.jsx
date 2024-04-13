import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateCrewmateForm from './CreateCrewmateForm';
import CrewmatesSummaryPage from './CrewmatesSummaryPage';
import CrewmateInfoPage from './CrewmateInfoPage'; // Import the CrewmateInfoPage component

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Create Crewmate</Link>
            </li>
            <li>
              <Link to="/summary">Crewmates Summary</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CreateCrewmateForm />} />
          <Route path="/summary" element={<CrewmatesSummaryPage />} />
          <Route path="/crewmate/:id" element={<CrewmateInfoPage />} /> {/* Route for Crewmate Info Page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
