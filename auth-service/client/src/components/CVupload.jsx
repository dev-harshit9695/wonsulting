
import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const CVUpload = () => {
  const [cvFile, setCvFile] = useState(null);
  const [linkedInCv, setLinkedInCv] = useState(null);
  const [error, setError] = useState('');

  const handleCvUpload = (event) => {
    setCvFile(event.target.files[0]);
    setError('');
  };

  const handleLinkedInCvUpload = (event) => {
    setLinkedInCv(event.target.files[0]);
    setError('');
  };

  const handleSubmit = () => {
    if (!cvFile || !linkedInCv) {
      setError('Please upload both CV and LinkedIn CV before submitting.');
    } else {
      // Proceed with form submission or further processing here
      console.log('CV File:', cvFile);
      console.log('LinkedIn CV File:', linkedInCv);
      setError('');
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 hover:text-blue-600 transition-colors duration-300 ease-in-out">
        Upload
      </h1>

      <div className="space-y-8">
        {/* CV Upload Section */}
        <div
          className={`border-2 ${
            cvFile ? 'border-green-500' : 'border-dashed'
          } border-gray-300 rounded-lg p-6 transition duration-500 ease-in-out transform hover:scale-105`}
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-700 hover:text-green-600 transition-colors duration-300 ease-in-out">
            CV <span className="text-red-500">*</span>
          </h2>
          <label className="flex flex-col items-center justify-center cursor-pointer group">
            <Upload className="w-12 h-12 text-gray-400 mb-2 group-hover:text-blue-500 transition-colors duration-300 ease-in-out" />
            <span className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors duration-300 ease-in-out">
              Click to upload or drag and drop
            </span>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleCvUpload}
            />
          </label>
          {cvFile && (
            <p className="mt-2 text-sm text-gray-600">
              Selected file: {cvFile.name}
            </p>
          )}
        </div>

        {/* LinkedIn CV Upload Section */}
        <div
          className={`border-2 ${
            linkedInCv ? 'border-green-500' : 'border-dashed'
          } border-gray-300 rounded-lg p-6 transition duration-500 ease-in-out transform hover:scale-105`}
        >
          <h2 className="text-xl font-semibold mb-4 text-gray-700 hover:text-green-600 transition-colors duration-300 ease-in-out">
            LinkedIn Profile (PDF) <span className="text-red-500">*</span>
          </h2>
          <label className="flex flex-col items-center justify-center cursor-pointer group">
            <Upload className="w-12 h-12 text-gray-400 mb-2 group-hover:text-blue-500 transition-colors duration-300 ease-in-out" />
            <span className="text-sm text-gray-500 group-hover:text-blue-500 transition-colors duration-300 ease-in-out">
              Click to upload or drag and drop
            </span>
            <input
              type="file"
              className="hidden"
              accept=".pdf"
              onChange={handleLinkedInCvUpload}
            />
          </label>
          {linkedInCv && (
            <p className="mt-2 text-sm text-gray-600">
              Selected file: {linkedInCv.name}
            </p>
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <p className="mt-4 text-red-600 font-semibold animate-pulse">
          {error}
        </p>
      )}

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="mt-6 w-full bg-gray-800 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Submit
      </button>
    </div>
  );
};

export default CVUpload;
//-------------------------------------------------------------------------------------------------
