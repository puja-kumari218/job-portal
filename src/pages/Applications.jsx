import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { assets, jobsApplied } from "../assets/assets";
import moment from "moment";
import Footer from "../components/Footer";


const Application = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);
  return (
    <>
      <Navbar />
      <div className="conatiner px-4 min-h-[65vh] 2xl:px-20 mx-auto my-10">
        <h2 className="text-xl font-semibold">Your Resume</h2>
        <div className="flex gap-2 mb-6 mt-3">
          {isEdit ? (
            <>
              <label className="flex items-center" htmlFor="resumeUpload">
                <p className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2">
                  Select Resume
                </p>
                <input
                  id="resumeUpload"
                  onChange={(e) => setResume(e.target.files[0])}
                  accept="application/pdf"
                  type="file"
                  hidden
                />
                <img
                  src={assets.profile_upload_icon}
                  alt="PDF Icon"
                  className="w-6 h-6 ml-2"
                />
              </label>
              <buttn
                onClick={() => setIsEdit(false)}
                className="bg-green-100 border-green-600 text-green-800 rounded-lg px-4 py-2 cursor-pointer"
              >
                Save
              </buttn>
            </>
          ) : (
            <div className="flex  gap-2">
              <a
                className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg "
                href=""
              >
                Resume
              </a>
              <button
                className="text-gray-500 border border-gray-300 px-4 py-2 rounded-lg"
                onClick={() => setIsEdit(true)}
              >
                Edit
              </button>
            </div>
          )}
        </div>
        <h2 className="text-xl font-semibold mb-4">Job Applied</h2>
        <div className=" border border-gray-300 overflow-hidden">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-3 px-4 uppercase font-semibold text-left">
                  Company
                </th>
                <th className="py-3 px-4 uppercase font-semibold text-left">
                  Job Title
                </th>
                <th className="py-3 px-4 uppercase font-semibold text-left max-sm:hidden">
                  Location
                </th>
                <th className="py-3 px-4 uppercase font-semibold text-left max-sm:hidden">
                  Dated
                </th>
                <th className="py-3 px-4 uppercase font-semibold text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 divide-y divide-gray-200">
              {jobsApplied.map((job, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <img
                      src={job.logo}
                      alt="Company Logo"
                      className="w-8 h-8 "
                    />
                    {job.company}
                  </td>
                  <td className="py-3 px-4">{job.title}</td>
                  <td className="py-3 px-4 max-sm:hidden">{job.location}</td>
                  <td className="py-3 px-4 max-sm:hidden">
                    {moment(job.date).format("ll")}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`${
                        job.status === "Accepted"
                          ? "bg-green-100 text-green-800"
                          : job.status === "Rejected"
                          ? "bg-red-100 text-red-800"
                          : "bg-blue-100 text-blue-800"
                      } px-4 py-1.5 rounded-full text-xs font-medium`}
                    >
                      {job.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Application;
