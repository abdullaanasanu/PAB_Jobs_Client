import React, { useEffect } from 'react'
import {BrowserRouter, Routes, Route,   } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
// import Categories from './HOME/categories';
// import Foot from './HOME/footer/foot';
// import Clients from './Clients';
// import Testimonials from './testimonials';
// import MembershipPlans from './Membership Plans';
import COMPANY_PROFILE from './For_Employers/COMPANY_PROFILE';
import POST_A_JOB from './For_Employers/POST_A_JOB';
import Manage_Jobs from './For_Employers/Manage_Jobs';
import Companies from './Pages/Companies';
import BrowseFilterGrid from './Pages/Browse_Jobs/BrowseFilterGrid';
import BrowseFilterList from './Pages/Browse_Jobs/BrowseFilterList';
import Navbar from './NavBar/NavBar';
import Home from './HOME/Home';
import MyProfile from './Students/MyProfile';
import MyResume from './Students/Resume/MyResume';
import AppliedJobs from './Students/AppliedJobs';
import JobAlerts from './Students/JobAlerts';
import SavedJobs from './Students/SavedJobs';
import ChangePassword from './Students/ChangePassword';
import AllJobs from './Pages/jobs/AllJobs';
import CompanyJobs from './Pages/jobs/CompanyJobs';
import DesignationJobs from './Pages/jobs/DesignationJobs';
import CategoryJobs from './Pages/jobs/CategoryJobs';
import SkillJobs from './Pages/jobs/SkillJobs';
import LocationalJobs from './Pages/jobs/LocationalJobs';
import Footer from './HOME/Footer';
import Applications from './For_Employers/Applications';
import ScrollToTop from './ScrollToTop';
import Jobdetailes from './Pages/Jobdetailes'
import Password from '../src/For_Employers/Password';
import Updatepost from './For_Employers/updatepost';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Terms from './Terms&Conditions/Terms';
import Privacypolicy from './Terms&Conditions/Privacypolicy';
import Auth from './auth/Auth';
// import HireAndTrain from './NavBar/Services/HireAndTrain';
import { useDispatch, useSelector } from 'react-redux';
import Maze from './Services/components/Maze'
import FraudAlert from './FraudAlert/FraudAlert';
import Error from './404Error/Error';
import Textresume from './Services/components/TextResume/Textresume';
import Fakejobalert from './Services/components/FakeJobAlert/Fakejobalert';
import MainTest from './Services/components/OnlineExam/MainTest';



export const App = () => {
  const result = useSelector(state => state.data)

  return (
    <div>
   <BrowserRouter>
   <ScrollToTop />
  
   <Navbar />
   <Routes>
   <Route path="/" exact element={<Home />} />
   <Route path="/auth" exact element={<Auth />} />
   {/* <Route exact path="/signin" element={<SignIn />} />
   <Route exact path="/signup" element={<SignUp />} /> */}
   <Route exact path="/signin" element={<Login />} />
   <Route exact path="/signup" element={<Signup />} />
   
  {
    result?.type === "recruiter"? <>
    <Route exact path="/company_profile" element={<COMPANY_PROFILE />} />
    <Route exact path="/post_jobs" element={<POST_A_JOB />} />
    <Route exact path="/Manage_jobs" element={<Manage_Jobs />} />
    <Route exact path="/password" element={<Password />} />
    <Route exact path="/Applications/:id" element={<Applications />}/>
    <Route exact path="/updatepost/:id" element={<Updatepost />} />
    </>
   :
      result?.type === "applicant"? 
    <>
    <Route exact path="/myprofile" element={<MyProfile/>} />
    <Route exact path="/myresume" element={<MyResume />} />
    <Route exact path="/appliedjobs" element={<AppliedJobs />} />
    <Route exact path="/jobalerts" element={<JobAlerts />} />
    {/* <Route exact path="/savedjobs" element={<SavedJobs />} /> */}
    <Route exact path ="/changepassword" element={<ChangePassword />} />
    <Route exact path ="/onlinetest" element={<MainTest />} />
    </>:
    <Route path='*' element={<Auth />} />
  }
   <Route exact path="/jobdetailes/:id" element={<Jobdetailes />} />
  {/* <Route exact path="/companies" element={<Companies />} /> */}
  <Route exact path="/browsefilterlist" element={<BrowseFilterList/>} />
  <Route exact path="/browsefiltergrid" element={<BrowseFilterGrid />} />
  <Route exact path="/alljobs" element={<AllJobs />} />
  <Route exact path="/companyjobs" element={<CompanyJobs />} />
  <Route exact path="/designationjobs" element={<DesignationJobs />} />
  <Route exact path="/categoryjobs" element={<CategoryJobs />} />
  <Route exact path="/skilljobs" element={<SkillJobs />} />
  <Route exact path="/hireandtrain" element={<Maze />} />
  <Route exact path="/locationaljobs" element={<LocationalJobs />} />
  <Route exact path="/termsandconditions" element={<Terms/>}/>
  <Route exact path="/Privacypolicy" element={<Privacypolicy/>}/>
  <Route exact path="/fraudalert" element={<FraudAlert/>}/>
  <Route exact path="/textresume" element={<Textresume/>}/>
  <Route exact path="/fakejobalert" element={<Fakejobalert/>}/>
 
  
  <Route path='*' exact={true} element={<Error/>} />
  
   </Routes>
   <Footer />

   
   <ToastContainer />
  
   </BrowserRouter>
  
</div>
  )
}
export default App;