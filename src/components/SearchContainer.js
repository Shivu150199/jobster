import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from '../assets/wrappers/SearchContainer'
import FormrowSelect from './FormrowSelect'
import FormRow from './FormRow'
import { clearFilters, handleChange } from '../features/allJobs/allJobsSlice'
import { useState, useMemo } from 'react'

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('')
  const { isLoading, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs)
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job)
  const dispatch = useDispatch()
  const handleSearch = (e) => {
    if(isLoading) return;
    dispatch(handleChange({ name: e.target.name, value: e.target.value }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLocalSearch('');
    dispatch(clearFilters())
  }
  const debounce=()=>{
    let timeoutID;
    return (e)=>{
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID)
      timeoutID=setTimeout(()=>{
        dispatch(handleChange({name:e.target.name,value:e.target.value}))
      },1000)
    }
  }
  const optimizedDebounce=useMemo(()=>debounce(),[]);
  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            value={localSearch}
            name="search"
            handleChange={optimizedDebounce}
          />
          <FormrowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          />
          {/* search by type */}
          <FormrowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
          />
          {/* sort */}
          <FormrowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />

          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  )
}

export default SearchContainer
