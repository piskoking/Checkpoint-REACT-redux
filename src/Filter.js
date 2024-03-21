import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from './actions';

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFilter('all'))}>Toutes</button>
      <button onClick={() => dispatch(setFilter('done'))}>Fait</button>
      <button onClick={() => dispatch(setFilter('notDone'))}>Pas fait</button>
    </div>
  );
}