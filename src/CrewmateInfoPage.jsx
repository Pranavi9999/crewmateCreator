// // CrewmateInfoPage.jsx
// import { useParams } from 'react-router-dom';

// const CrewmateInfoPage = () => {
//   const { id } = useParams(); // Get crewmate ID from URL parameter

//   // Fetch crewmate data based on the ID and display detailed information
//   // You can fetch crewmate data from Supabase or any other source
//   // For demonstration purposes, let's assume crewmateData contains crewmate details

//   return (
//     <div>
//       <h1>Crewmate Information</h1>
//       <p>Crewmate ID: {id}</p>
//     </div>
//   );
// };

// export default CrewmateInfoPage;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from './createCrewmate'; // Import Supabase client

const CrewmateInfoPage = () => {
  const { id } = useParams(); // Get crewmate ID from URL parameter
  const [crewmateData, setCrewmateData] = useState(null); // State to store crewmate data

  useEffect(() => {
    // Fetch crewmate data based on the ID
    const fetchCrewmateData = async () => {
      try {
        const { data, error } = await supabase.from('crewmates').select('*').eq('id', id).single();
        if (error) {
          throw error;
        }
        setCrewmateData(data); // Set crewmate data to state
      } catch (error) {
        console.error('Error fetching crewmate data:', error.message);
      }
    };

    fetchCrewmateData(); // Call the fetchCrewmateData function
  }, [id]); // Trigger useEffect when ID changes

  if (!crewmateData) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  return (
    <div>
      <h1>Crewmate Information</h1>
      <p>Crewmate ID: {id}</p>
      <p>Name: {crewmateData.name}</p> {/* Display crewmate name */}
      <p>Speed: {crewmateData.speed}</p> {/* Display crewmate speed */}
      <p>Color: {crewmateData.color}</p> {/* Display crewmate color */}
    </div>
  );
};

export default CrewmateInfoPage;
