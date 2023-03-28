import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: "app",
    initialState: {
        showDialog: false,
        dialogText: '',
    },
    reducers: {
        showMessage: (state, action) => {
            state.showDialog = true;
            state.dialogText = action.payload
        },
        hideMessage: (state) => {
            state.showDialog = false
        }
    }
})


export const selectShowDialog = (state: any) => state.app.showDialog
export const selectDialogText = (state: any) => state.app.dialogText

export default AppSlice