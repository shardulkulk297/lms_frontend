import AuthorDashboard from "./components/author/AuthorDashboard"
import Courses from "./components/author/Courses"
import Enrollments from "./components/author/Enrollments"
import Profile from "./components/author/Profile"
import Stats from "./components/author/Stats"
import LearnerDashboard from "./components/learner/LearnerDashboard"
import Login from "./components/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/author" element={<AuthorDashboard />}>
          <Route index element={<Stats />} />
          <Route path="courses" element={<Courses />} />
          <Route path="enrollments" element={<Enrollments />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/learner">
          <Route index element={<LearnerDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
