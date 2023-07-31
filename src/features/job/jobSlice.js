import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

import { getUserFromLocalStorage } from '../../utils/localStorage'

import { createJobThunk, deleteJobThunk, editJobThunk } from './jobThunk'

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  isEditing: false,
  editJobId: '',
}

export const createJob = createAsyncThunk('job/createJob', createJobThunk)

export const deleteJob = createAsyncThunk('job/deleteJob', deleteJobThunk)

export const editJob = createAsyncThunk('job/editJob', editJobThunk)

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    handleChanges: (state, { payload: { name, value } }) => {
      state[name] = value
    },
    clearValues: () => {
      return {
        ...initialState,
        jobLocation: getUserFromLocalStorage()?.location || '',
      }
      // return initialState
    },

    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false
        toast.success('job created')
      })
      .addCase(createJob.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(editJob.pending, (state) => {
        state.isLoading = true
      })
      .addCase(editJob.fulfilled, (state) => {
        state.isLoading = false
        toast.success('job Modified')
      })
      .addCase(editJob.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
      .addCase(deleteJob.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.isLoading = false
        toast.success('job deleted')
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        state.isLoading = false
        toast.error(payload)
      })
  },
})

export const { handleChanges, clearValues, setEditJob } = jobSlice.actions
export default jobSlice.reducer
