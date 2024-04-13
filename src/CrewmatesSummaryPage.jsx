// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'; // Import Link component from React Router
// import { supabase } from './createCrewmate'; // Assuming you've set up Supabase client

// const CrewmatesSummaryPage = () => {
//   const [crewmates, setCrewmates] = useState([]);
//   const [editCrewmateId, setEditCrewmateId] = useState(null);
//   const [updatedName, setUpdatedName] = useState('');
//   const [updatedSpeed, setUpdatedSpeed] = useState('');
//   const [updatedColor, setUpdatedColor] = useState('');

//   useEffect(() => {
//     fetchCrewmates();
//   }, []);

//   const fetchCrewmates = async () => {
//     try {
//       const { data, error } = await supabase.from('crewmates').select('*');
//       if (error) {
//         throw error;
//       }
//       setCrewmates(data);
//     } catch (error) {
//       console.error('Error fetching crewmates:', error.message);
//     }
//   };

//   const handleUpdateClick = (id, name, speed, color) => {
//     setEditCrewmateId(id);
//     setUpdatedName(name);
//     setUpdatedSpeed(speed);
//     setUpdatedColor(color);
//   };

//   const handleUpdate = async (id) => {
//     try {
//       const { data, error } = await supabase.from('crewmates').update({ name: updatedName, speed: updatedSpeed, color: updatedColor }).eq('id', id);
//       if (error) {
//         throw error;
//       }
//       const updatedCrewmates = crewmates.map((crewmate) =>
//         crewmate.id === id ? { ...crewmate, ...data[0] } : crewmate
//       );
//       setCrewmates(updatedCrewmates);
//       setEditCrewmateId(null); // Reset edit mode
//     } catch (error) {
//       console.error('Error updating crewmate:', error.message);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const { error } = await supabase.from('crewmates').delete().eq('id', id);
//       if (error) {
//         throw error;
//       }
//       const updatedCrewmates = crewmates.filter((crewmate) => crewmate.id !== id);
//       setCrewmates(updatedCrewmates);
//     } catch (error) {
//       console.error('Error deleting crewmate:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Crewmates Summary</h1>
//       <ul>
//         {crewmates.map((crewmate) => (
//           <li key={crewmate.id}>
//             <strong>Name:</strong> {crewmate.name}, <strong>Speed:</strong> {crewmate.speed}, <strong>Color:</strong> {crewmate.color}
//             {/* Link to Crewmate Info Page */}
//             <Link to={`/crewmate/${crewmate.id}`}>Info</Link>
//             {editCrewmateId === crewmate.id ? (
//               <>
//                 <input
//                   type="text"
//                   value={updatedName}
//                   onChange={(e) => setUpdatedName(e.target.value)}
//                 />
//                 <input
//                   type="text"
//                   value={updatedSpeed}
//                   onChange={(e) => setUpdatedSpeed(e.target.value)}
//                 />
//                 <select value={updatedColor} onChange={(e) => setUpdatedColor(e.target.value)}>
//                   <option value="red">Red</option>
//                   <option value="blue">Blue</option>
//                   <option value="green">Green</option>
//                   {/* Add more color options as needed */}
//                 </select>
//                 <button onClick={() => handleUpdate(crewmate.id)}>Save</button>
//               </>
//             ) : (
//               <>
//                 <button onClick={() => handleUpdateClick(crewmate.id, crewmate.name, crewmate.speed, crewmate.color)}>Update</button>
//                 <button onClick={() => handleDelete(crewmate.id)}>Delete</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CrewmatesSummaryPage;


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link component from React Router
import { supabase } from './createCrewmate'; // Assuming you've set up Supabase client

const CrewmatesSummaryPage = () => {
  const [crewmates, setCrewmates] = useState([]);
  const [editCrewmateId, setEditCrewmateId] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedSpeed, setUpdatedSpeed] = useState('');
  const [updatedColor, setUpdatedColor] = useState('');

  useEffect(() => {
    fetchCrewmates();
  }, []);

  const fetchCrewmates = async () => {
    try {
      const { data, error } = await supabase.from('crewmates').select('*');
      if (error) {
        throw error;
      }
      setCrewmates(data);
    } catch (error) {
      console.error('Error fetching crewmates:', error.message);
    }
  };

  const handleUpdateClick = (id, name, speed, color) => {
    setEditCrewmateId(id);
    setUpdatedName(name);
    setUpdatedSpeed(speed);
    setUpdatedColor(color);
  };

  const handleUpdate = async (id) => {
    try {
      const { data, error } = await supabase.from('crewmates').update({ name: updatedName, speed: updatedSpeed, color: updatedColor }).eq('id', id);
      if (error) {
        throw error;
      }
      const updatedCrewmates = crewmates.map((crewmate) =>
        crewmate.id === id ? { ...crewmate, ...data[0] } : crewmate
      );
      setCrewmates(updatedCrewmates);
      setEditCrewmateId(null); // Reset edit mode
    } catch (error) {
      console.error('Error updating crewmate:', error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from('crewmates').delete().eq('id', id);
      if (error) {
        throw error;
      }
      const updatedCrewmates = crewmates.filter((crewmate) => crewmate.id !== id);
      setCrewmates(updatedCrewmates);
    } catch (error) {
      console.error('Error deleting crewmate:', error.message);
    }
  };

  return (
    <div>
      
      <h1>Crewmates Summary</h1>
      <ul>
        {crewmates.map((crewmate) => (
          <li key={crewmate.id}>
            <div style={{ marginBottom: '10px' }}> {/* Add margin bottom to create space */}
              <strong>Name:</strong> {crewmate.name}, <strong>Speed:</strong> {crewmate.speed}, <strong>Color:</strong> {crewmate.color}
            </div>
            <div> {/* Separate container for actions */}
              <Link to={`/crewmate/${crewmate.id}`}>Info</Link>
              {editCrewmateId === crewmate.id ? (
                <>
                  <input
                    type="text"
                    value={updatedName}
                    onChange={(e) => setUpdatedName(e.target.value)}
                  />
                  <input
                    type="text"
                    value={updatedSpeed}
                    onChange={(e) => setUpdatedSpeed(e.target.value)}
                  />
                  <select value={updatedColor} onChange={(e) => setUpdatedColor(e.target.value)}>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="orange">Orange</option>
                    <option value="pink">Pink</option>
                    <option value="yellow">Yellow</option>
                    <option value="purple">Purple</option>
                    <option value="indigo">Indigo</option>
                    <option value="white">White</option>
               
                  </select>
                  <button onClick={() => handleUpdate(crewmate.id)}>Save</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleUpdateClick(crewmate.id, crewmate.name, crewmate.speed, crewmate.color)}>Update</button>
                  <button onClick={() => handleDelete(crewmate.id)}>Delete</button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrewmatesSummaryPage;
