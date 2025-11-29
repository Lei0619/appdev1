import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todoslice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
