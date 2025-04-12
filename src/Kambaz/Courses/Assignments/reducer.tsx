import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, {payload: assignment}) => {
      const newItem: any = {
          _id: assignment._id,
          title: assignment.title,
          course: assignment.course,
          description: assignment.description,
          points: assignment.points,
          due: assignment.due,
          available: assignment.available,
          until: assignment.until,
      };
      state.assignments = [...state.assignments, newItem] as any;
    },
    deleteAssignment: (state, {payload: assignmentId}) => {
      state.assignments = state.assignments.filter((m: any) => m._id !== assignmentId);
    },

  updateAssignment: (state, {payload: assignment}) => {
      state.assignments = state.assignments.map((m: any) =>
          m._id === assignment._id ? assignment : m
      ) as any;
   },

  editAssignment: (state, {payload: assignmentId}) => {
      state.assignments = state.assignments.map((m: any) =>
          m._id === assignmentId ? {...m, editing: true} : m
      ) as any;
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;