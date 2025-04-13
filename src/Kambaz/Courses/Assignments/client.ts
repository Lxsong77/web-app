import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;


// export const findAssignmentsForCourse = async (courseId: string) => {
//     const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
//     return response.data;
// };

export const createAssignment = async (courseId: string, assignment: any) => {
    const response = await axios.post(`${COURSES_API}/${courseId}/assignments`, assignment);
    return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios.delete(`${ASSIGNMENT_API}/${assignmentId}`);
    return response.data;
};
export const updateAssignment = async (assignment: any) => {
    const { data } = await axios.put(`${ASSIGNMENT_API}/${assignment._id}`, assignment);
    return data;
};

// export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
//     const response = await axios.post(`${COURSES_API}/${courseId}/${ASSIGNMENT_API}/${assignment._id}`, assignment);
//     return response.data;
// };
