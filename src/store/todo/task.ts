import { createSlice,createReducer } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'taskState',
  initialState: {
    focusTask: "INIT",
    taskList: [] as any
  },
  reducers: {
    setFocusTask: (state, payload) => {
      state.focusTask = payload.payload as string
    },
    appendTask: (state, payload) => {
      console.log("append")
    },
    deleteTask: (state, payload) => {
      console.log("del")
    },
    cleanAll: (state, payload) => {
      state.focusTask = ""
      state.taskList = null
      state.taskList = []
    },
  }
})
export const { setFocusTask, appendTask, deleteTask, cleanAll } = taskSlice.actions

export default taskSlice.reducer