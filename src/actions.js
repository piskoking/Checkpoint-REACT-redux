export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const SET_FILTER = 'SET_FILTER';

export const addTask = description => ({
  type: ADD_TASK,
  payload: { description },
});

export const toggleTask = id => ({
  type: TOGGLE_TASK,
  payload: { id },
});

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: { filter },
});