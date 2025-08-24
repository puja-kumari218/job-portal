import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { JobCategories, JobLocations } from "../assets/assets";

const AddJob = () => {
  const [title, setTitle] = useState("");
  const [location, setlocation] = useState("");
  const [category, setcategory] = useState("");
  const [level, setlevel] = useState("");
  const [salary, setsalary] = useState("");
  const [description, setDescription] = useState("");

  const editorRef = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    if (editorRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link"],
          ],
        },
      });
      quillInstance.current.on("text-change", () => {
        setDescription(quillInstance.current.root.innerHTML);
      });
    }
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-6">Add Job</h2>
      <form className="space-y-4">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">Job Title</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Software Engineer"
            className="text-sm border border-gray-200 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">Job Description</p>
          <div ref={editorRef} className="bg-white h-40 border border-gray-200 rounded"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Job Category</p>
            <select
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              className="text-sm border border-gray-200 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
            >
              <option value="" disabled>Select a category</option>
              {JobCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Job Location</p>
            <select
              value={location}
              onChange={(e) => setlocation(e.target.value)}
              className="text-sm border border-gray-200 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
            >
              <option value="" disabled>Select a location</option>
              {JobLocations.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Job Level</p>
            <select
              value={level}
              onChange={(e) => setlevel(e.target.value)}
              className="text-sm border border-gray-200 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
            >
              <option value="" disabled>Select a level</option>
              <option value="Beginner level">Beginner level</option>
              <option value="Intermediate level">Intermediate level</option>
              <option value="Senior level">Senior level</option>
            </select>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Job Salary (LPA)</p>
            <input
              type="number"
              value={salary}
              onChange={(e) => setsalary(e.target.value)}
              placeholder="0"
              className="text-sm border border-gray-200 rounded px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
          </div>
        </div>
        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-300">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddJob;
