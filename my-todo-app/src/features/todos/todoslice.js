import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
    todos: [],
    status: "idle",
    error: null,
};

//fetch todos thunk
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (title) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false,
        userId: 1,
    });
    return response.data;
});

export const createTodo = createAsyncThunk('todos/createTodo', async (todoData) => {
    const { title, completed } = todoData;
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed,
        userId: 1,
    });
    return response.data;
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async ({ id, title, completed }) => {
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        title,
        completed,
    });
    return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return id;
});

// slice

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.todos = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload);
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                const { id } = action.payload;
                const existingTodo = state.todos.find((todo) => todo.id === id);
                if (existingTodo) {
                    existingTodo.title = action.payload.title;
                    existingTodo.completed = action.payload.completed;
                }
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            });
    },
});

export const selectAllTodos = (state) => state.todos.todos;
export default todoSlice.reducer;
