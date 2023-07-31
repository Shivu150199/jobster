import { useEffect, useState } from 'react'
import { Logo, FormRow } from '../components'
import { toast } from 'react-toastify'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, registerUser } from '../features/user/userSlice'
import { useNavigate } from 'react-router-dom'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  const dispatch=useDispatch()
  const {isLoading,user}=useSelector((store)=>store.user)
  const navigate=useNavigate()
  // console.log(values)

//submit function
  const onSubmit = (e) => {
    e.preventDefault()
 const {name,email,password,isMember}=values;
 if(!email || !password || (!isMember && !name)){
    // console.log('Please fill out all fields')
    //  toast.error('Please Fill Out All Fields')
    toast.warn('Please Fill Out All Fields💻', {
      position: 'top-center',
      autoClose: 1987,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })
     return;
  }
  if(isMember){
    dispatch(loginUser({email:email,password:password}))
    return;
  }
  dispatch(registerUser({name,email,password,}))
  }

const toggleMember=()=>{
  setValues({...values,isMember:!values.isMember})
}
  const handleChange = (e) => {
    // const name=e.target.name;
    // const value=e.target.value;
    const { name, value } = e.target
    // console.log(`${name}:${value}`)
    setValues({ ...values, [name]: value })
  }
useEffect(()=>{
if(user){
  setTimeout(()=>{
navigate('/')
  },500)
}
},[user,navigate])


  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember?'login':'Register'}</h3>
{!values.isMember&&

        <FormRow
          type="text"
          name="name"
          value={values.name}
          handleChange={handleChange}
        />
}

        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          submit
        </button>
        <button type="button"
        className='btn btn-block btn-hipster' 
        disabled={isLoading}
        onClick={()=>{
          dispatch(loginUser({email:'testUser@test.com',password:'secret'}))
        }}
        >
          {isLoading?'loading...':'demo'}
        </button>
        <p>{values.isMember?"Not a member yet !":'Already a member ?'}
          <button className='member-btn' type="button" onClick={toggleMember}>{values.isMember?'register':"login"}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register
