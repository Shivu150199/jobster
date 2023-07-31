import React, { useEffect } from 'react'
import { FormRow } from '../../components'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import FormrowSelect from '../../components/FormrowSelect'
import {
  handleChanges,
  clearValues,
  createJob,
} from '../../features/job/jobSlice'
import { handleChange } from '../../features/allJobs/allJobsSlice'

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
  } = useSelector((store) => store.job)
  
const{user}=useSelector((store)=>store.user)
  const dispatch = useDispatch()
  // if (isEditing) {
  //   dispatch(
  //     editJob({
  //       jobId: editJobId,
  //       job: {
  //         position,
  //         company,
  //         jobLocation,
  //         jobType,
  //         status,
  //       },
  //     })
  //   )
  //   return
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!position || !company || !jobLocation) {
      toast.warn('please fill out all the field')
      return
    }

    dispatch(createJob({ position, company, jobLocation, jobType, status }))
  }
  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChanges({ name, value }))
    
  }
useEffect(() => {
  if (!isEditing) {
    dispatch(handleChange({ name: 'jobLocation', value: user.location }))
  }
}, [])

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'Edit job' : 'add job'}</h3>
        <div className="form-center">
          {/* position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleInput}
          />
          {/* job location */}
          <FormRow
            type="text"
            name="jobLocation"
            labelText="job Location"
            value={jobLocation}
            handleChange={handleInput}
          />

          <FormrowSelect
            name="status"
            value={status}
            handleChange={handleInput}
            list={statusOptions}
            labelText="status"
          />
          <FormrowSelect
            name="jobType"
            value={jobType}
            handleChange={handleInput}
            list={jobTypeOptions}
            labelText="job type"
          />

          <div className="btn-container">
            <button
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
              type="button"
            >
              clear
            </button>
            <button
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              type="submit"
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}

export default AddJob
