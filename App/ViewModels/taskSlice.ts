import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskModel } from '../models/Task';

interface TaskState {
  items: TaskModel[];
  isOnline: boolean;
  bannerVisible: boolean;
}

const initialState: TaskState = {
  items: [],
  isOnline: true,
  bannerVisible: false,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskModel>) => {
      state.items.push(action.payload);
    },
    setTasks: (state, action: PayloadAction<TaskModel[]>) => {
      state.items = action.payload;
    },
    syncTasks: state => {
      state.items = state.items.map(task => ({ ...task, status: 'synced' }));
    },
    setBannerVisible: (state, action: PayloadAction<boolean>) => {
      state.bannerVisible = action.payload;
    },
    setOnline: (state, action: PayloadAction<boolean>) => {
      state.isOnline = action.payload;
    },
  },
});

export const { addTask, setTasks, syncTasks, setBannerVisible, setOnline } =
  taskSlice.actions;

export default taskSlice.reducer;
