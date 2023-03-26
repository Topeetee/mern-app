import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
import ExercisesList from "./components/Exercises-list";
import EditExercise from "./components/Edit-exercise";
import CreateExercise from "./components/Create-exercise";
import CreateUser from "./components/Create-user";

function App() {
  return (
    <BrowserRouter>
      <div className="container max-w-[1024px] mr-auto ml-auto">
        <Navbar />
        <br />
        <Routes>

        <Route path="/" exact element={<ExercisesList/>} />
        <Route path="/edit/:id" element={<EditExercise/>} />
        <Route path="/create" element={<CreateExercise/>} />
        <Route path="/user" element={<CreateUser/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;


