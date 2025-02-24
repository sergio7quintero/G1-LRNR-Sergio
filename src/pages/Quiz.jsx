import React, { useState } from 'react';


export default function Quiz() {
  const [title, setTitle] = useState('');
  const [expertise, setExpertise] = useState('');
  const [numQuestions, setNumQuestions] = useState('');
  const [style, setStyle] = useState('');

  return (
    <main className="container p-4 min-h-[71.1vh] h-full w-full flex justify-center items-center">
      <div className="w-full w-auto">
        <h1 className="text-3xl font-bold mb-4 text-left">Quiz Generation Options</h1>
        <p className="mb-4 text-left">Please choose your preferences below to generate your personalized quiz</p>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-400 text-left">Title</label>
            <select
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border-b-2 border-teal-600 rounded-none"
            >
              <option value="Title1">Title1</option>
              <option value="Title2">Title2</option>
              <option value="Title3">Title3</option>
              <option value="Title4">Title4</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-gray-400 text-left">Expertise</label>
            <select
              value={expertise}
              onChange={(e) => setExpertise(e.target.value)}
              className="w-full p-2 border-b-2 border-teal-600 rounded-none"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-gray-400 text-left">Number of Questions</label>
            <select
              value={numQuestions}
              onChange={(e) => setNumQuestions(e.target.value)}
              className="w-full p-2 border-b-2 border-teal-600 rounded-none"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-gray-400 text-left">Style of Questions</label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full p-2 border-b-2 border-teal-600 rounded-none"
            >
              <option value="Multiple Choice">Multiple Choice</option>
              <option value="True/False">True/False</option>
              <option value="Short Answer">Short Answer</option>
              <option value="Essay">Essay</option>
            </select>
          </div>
          <button type="submit" className="bg-teal-600 text-white font-medium py-3 px-4 rounded w-full sm:w-auto hover:cursor-pointer">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}