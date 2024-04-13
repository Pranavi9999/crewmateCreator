import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Add Crewmate</Link>
        </li>
        <li>
          <Link to="/summary">Crewmates Summary</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
