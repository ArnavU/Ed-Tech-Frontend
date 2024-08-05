import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice';
import profileReducer from './slices/profileSlice';
import cartReducer from './slices/cartSlice';
import addCourseReducer from './slices/addCourseSlice';
import viewCourseReducer from './slices/viewCourseSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    cart: cartReducer,
    addCourse: addCourseReducer,
    viewCourse: viewCourseReducer,
  }
})

export default store;
