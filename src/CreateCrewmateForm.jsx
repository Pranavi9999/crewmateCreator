import { useState } from 'react';
import { supabase } from './createCrewmate'; // Assuming you've set up Supabase client

const CreateCrewmateForm = () => {
  const [name, setName] = useState('');
  const [speed, setSpeed] = useState('');
  const [color, setColor] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSpeedChange = (e) => {
    setSpeed(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.from('crewmates').insert([
        { name, speed, color }
      ]);
      if (error) {
        throw error;
      }
      console.log('Crewmate added successfully:', data);
      // Reset form fields after successful submission
      setName('');
      setSpeed('');
      setColor('');
    } catch (error) {
      console.error('Error adding crewmate:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Speed:
        <input type="text" value={speed} onChange={handleSpeedChange} />
      </label>
      <label>
        Color:
        <select value={color} onChange={handleColorChange}>
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
      </label>
      <button type="submit">Add Crewmate</button>
    </form>
  );
};

export default CreateCrewmateForm;
