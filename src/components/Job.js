import React from 'react'
import Wrapper from '../assets/wrappers/Job'
import { Link } from 'react-router-dom'
import JobInfo from './JobInfo'
import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from 'react-icons/fa'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deleteJob, setEditJob } from '../features/job/jobSlice'

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const date = moment(createdAt).format('MMM Do, YYYY')
  const dispatch = useDispatch()
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${status}`}>{status}</div>
        </div>

        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() => {
                dispatch(
                  setEditJob({
                    editJobId:_id,
                    position,
                    company,
                    jobLocation, 
                    jobType,
                    // createdAt,
                    status,
                  })
                )
              }}
            >
              edit
            </Link>
            <button
              className="btn delete-btn"
              type="button"
              onClick={() => {
                dispatch(deleteJob(_id))
              }}
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  )
}

export default Job
