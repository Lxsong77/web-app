import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  courses: courses,
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, { payload: course }) => {
      const newCourse = {
        _id: uuidv4(),
        name: course.name,
        number: course.number,
        startDate: course.startDate,
        endDate: course.endDate,
        description: course.description,
        department: course.department,
        credits: course.credits,
      };
      state.courses = [...state.courses, newCourse] as any;
    },
    deleteCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter(
        (c: any) => c._id !== courseId);
    },
    updateCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c: any) =>
        c._id === course._id ? course : c
      ) as any;
    },
    setCourse: (state, { payload: course }) => {
      state.courses = state.courses.map((c) =>
        c._id === course._id ? { ...c, ...course } : c
      ) as any;
    },
  },
});

export const { addCourse, deleteCourse, updateCourse, setCourse } = courseSlice.actions;
export default courseSlice.reducer;