import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AppContext } from "./context/AppContext";
import Home from "./pages/Home";
import ApplyJob from "./pages/ApplyJob";
import Application from "./pages/Applications";
import RecruiterLogin from "./components/RecruiterLogin";
import Dashboard from "./pages/Dashboard";
import ManageJob from "./pages/ManageJob";
import AddJob from "./pages/AddJob";
import ViewApplication from "./pages/ViewApplication";
import 'quill/dist/quill.snow.css';

const App = () => {
  const { showRecruiterLogin } = useContext(AppContext);
  return (
    <div>
      {showRecruiterLogin && <RecruiterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/applications" element={<Application />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-job" element={<AddJob />} />
          <Route path="manage-job" element={<ManageJob />} />
          <Route path="view-application" element={<ViewApplication />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
