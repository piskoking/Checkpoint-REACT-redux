
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import AddTask from './Addtask';
import TaskList from './Tasklist';
import Filter from './Filter';


const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <AddTask />
      <Filter />
      <TaskList />
    </Provider>
  );
}
