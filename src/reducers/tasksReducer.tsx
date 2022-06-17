import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import root from "./apiRoot";

export const fetchTasks: any = createAsyncThunk(
  "tasks/fetchTasks",
  async () => {
    const response = await fetch(`${root}`)
      .then((res: any) => {
        return res.json();
      })
      .then((result: any) => {
        return result;
      });
    return response;
  }
);

const tasksSlice = createSlice({
  name: "tasks",
  initialState: { tasks: [] },
  reducers: {
    addTask(state: any, action: any) {
      state.tasks.push(action.payload);
      fetch(`${root}add`, {
        method: "POST",
        body: JSON.stringify({ data: action.payload }),
      });
    },
    removeTask(state: any, action: any) {
      const newState = state.tasks.filter(
        (task: any) => task.id !== action.payload
      );
      fetch(`${root}delete?id=${action.payload}`, { method: "DELETE" });
      state.tasks = newState;
    },
    updateTask(state: any, action: any) {
      let index: any = null;
      let taskIndex = state.tasks.map((task: any, idx: number) => {
        if (task.id === action.payload.id) {
          index = idx;
        }
      });
      console.log(index);
      console.log(state.tasks[index]);
      state.tasks[index] = action.payload;
      fetch(`${root}update?id=${action.payload.id}`, {
        method: "PUT",
        body: JSON.stringify({
          data: { name: action.payload.name, status: action.payload.status },
        }),
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});
export const { addTask, removeTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
