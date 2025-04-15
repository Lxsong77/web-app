import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import accountReducer from "./Account/reducer";
import courseReducer from "./Courses/reducer";
import enrollmentReducer from "./Enrollment/reducer";

const store = configureStore({
  reducer: {
    courses: courseReducer,
    modulesReducer,
    assignmentsReducer,
    accountReducer,
    enrollmentReducer,
  },
});
export default store;