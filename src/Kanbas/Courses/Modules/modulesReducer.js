import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";
// const initialState = {
//     modules: db.modules.map((item) => ({...item, visible: true}) ),
//     module: { name: "New Module 123", description: "New Description", visible: true },
// };

const initialState = {
    modules: [],
    module: { name: "New Module 123", description: "New Description", visible: false },
};

const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        addModule: (state, action) => {
            state.modules = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.modules,
            ];
        },
        deleteModule: (state, action) => {
            state.modules = state.modules.filter(
                (module) => module._id !== action.payload
            );
        },
        updateModule: (state, action) => {
            state.modules = state.modules.map((module) => {
                if (module._id === action.payload._id) {
                    return action.payload;
                } else {
                    return module;
                }

            });
        },
        setModule: (state, action) => {
            state.module = action.payload;
        },
        setModules: (state, action) => {
            state.modules = action.payload;
        },
        collapseModule: (state, action) => {
            state.modules = state.modules.map((module) => {
                if (module._id === action.payload._id) {
                    return { ...module, visible: !module.visible };
                } else {
                    return module;
                }

            });
        },
        collapseAll: (state, action) => {
            console.log("test");
            state.modules = state.modules.map((module) => {
                return { ...module, visible: false };
            });
        }
    },
});
export const { addModule, deleteModule,
    updateModule, setModule, collapseModule, collapseAll, setModules } = modulesSlice.actions;
export default modulesSlice.reducer;
