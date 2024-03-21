import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './actions';

export default function AddTask() {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTask(description));
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Ajouter une tâche</button>
    </form>
  );
}