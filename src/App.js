import { LandingPage, Register, Error, ProtectedRoute } from './pages'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  Profile,
  Stats,
  AddJob,
  AllJobs,
  SharedLayout,
} from './pages/dashboard'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="register" element={<Register />} />
        <Route path="landing" element={<LandingPage />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={1987}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  )
}

export default App
