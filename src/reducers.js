import { ADD_TASK, TOGGLE_TASK, SET_FILTER } from './actions';

const initialState = {
  tasks: [],
  filter: 'all',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id: Date.now(), description: action.payload.description, isDone: false }],
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };
    default:
      return state;
  }
}