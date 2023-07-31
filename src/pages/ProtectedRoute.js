const { useSelector } = require("react-redux");
const { Navigate } = require("react-router-dom");



const ProtectedRoute = ({children}) => {
    // const navigate=useNavigate();
    const {user}=useSelector((state)=>state.user)
    if(!user){
return <Navigate to='/landing'/>
    }

  return children;
  
}

export default ProtectedRoute
