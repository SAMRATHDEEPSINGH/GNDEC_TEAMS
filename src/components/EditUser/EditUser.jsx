import React, { useState } from 'react';

const EditUser = () => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Submitted:', { name, rollNo, selectedOption });
    // Reset form fields
    setName('');
    setRollNo('');
    setSelectedOption('');
  };

  return (
    <div className='flex items-center min-h-screen bg-blue-50'>
      <div className='bg-slate-800 border border-slate-400 rounded-md ml-10 p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
        <h1 className='text-5xl text-black text-center mb-6'>Edit Student Info</h1>
    <div className="container mx-auto max-w-lg p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter name"
          />
        </div>
        <div>
          <label htmlFor="rollNo" className="block mb-1">Roll No:</label>
          <input
            type="text"
            id="rollNo"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter roll number"
          />
        </div>
        <div>
          <label htmlFor="actions" className="block mb-1">Actions:</label>
          <select
            id="actions"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="">Select an action</option>
            <option value="delete">Delete</option>
            <option value="edit">Edit</option>
            <option value="detail">Detail</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default EditUser;