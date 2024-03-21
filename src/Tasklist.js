import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask } from './actions';

export default function TaskList() {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.tasks);
    const filter = useSelector(state => state.filter);

    const filteredTasks = tasks.filter(task => {
        if (filter === 'done') return task.isDone;
        if (filter === 'notDone') return !task.isDone;
        return true;
    });

    return (
        <ul>
            {filteredTasks.map(task => (
                <li key={task.id}>
                    <input type="checkbox" checked={task.isDone} onChange={() => dispatch(toggleTask(task.id))} />
                    {task.description}
                </li>
            ))}
        </ul>
    );
}
