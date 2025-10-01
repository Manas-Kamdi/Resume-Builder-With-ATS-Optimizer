import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./authentication/Signup";
import Login  from "./authentication/Login";
import AddResumeDetails from "./Pages/AddResumeDetails";
import Templates from "./Pages/Templates";
import ResumeScanner from "./Pages/ResumeScanner";
import Preview from "./Pages/Preview";
import MyAccount from "./Pages/MyAccount";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/templates" element={<Templates/>} />
          <Route path="/addResumeDetails/template" element={<AddResumeDetails />} />
          <Route path="/resumeScanner" element={<ResumeScanner />} />
          <Route path="/preview/template" element={<Preview />} />
          <Route path="/my-account" element={<MyAccount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
