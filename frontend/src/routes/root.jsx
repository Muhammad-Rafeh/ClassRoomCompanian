import React from "react";
import { useNavigate } from "react-router-dom";

const Root = () => {
  const navigate = useNavigate();

  const handleStudentClick = () => {
    navigate("/studentLogin");
  };

  const handleTeacherClick = () => {
    navigate("/teacherLogin");
  };

  return (
    <div className="bg-[#1D1E18] h-[100vh]">
      <div className="container mx-auto flex-col h-full">
        <h1 className="text-center text-5xl font-bold text-[#B9F5D8] pb-5 pt-5">
          Are you a Student or Teacher?
        </h1>
        <div className="flex items-center justify-center h-[80vh] flex-grow-1 flex-shrink-0">
          <button onClick={handleStudentClick} className="bg-[#6B8F71] w-full text-5xl font-bold rounded text-[#1D1E18] h-full m-2">
            Student
          </button>
          <button onClick={handleTeacherClick} className="bg-[#AAD2BA]  w-full  rounded text-[#1D1E18] text-5xl font-bold h-full m-2">
            Teacher
          </button>
        </div>
      </div>
    </div>
  );
};

export default Root;
