import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
    assignments: db.assignments,
    assignment: {
        _id : "SampleID",
        title: "New Assignment",
        course: "Course Name",
        description: "New Description",
        due_date: "2000-01-01",
        available_from: "2000-01-01",
        available_until: "2000-01-01"
    },
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
                ...state.assignments, {...action.payload, _id: new Date().getTime().toString()}
            ];
        }, 
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        }, 
        
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map(
                (assignment) => {
                    if(assignment._id === action.payload._id) {
                        return action.payload;
                    }
                    else {
                        return assignment;
                    }
                }
            );
        }, 
        selectAssignment: (state, action) => {
            state.assignment = action.payload;
        },
    },
});
export const { addAssignment, deleteAssignment,
    updateAssignment, selectAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;