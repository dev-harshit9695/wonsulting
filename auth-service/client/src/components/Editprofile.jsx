// import React, { useState, useEffect } from 'react';

// const EditProfile = () => {
//   const [profileData, setProfileData] = useState({
//     _id: '',
//     userId: '',
//     userEmail: '',
//     institutionId: '',
//     firstName: '',
//     lastName: '',
//     headline: '',
//     country: '',
//     city: '',
//     industry: '',
//     profilePictureUrl: '',
//     summary: '',
//     email: '',
//     phone: '',
//     websites: [''],
//     experience: [{ title: '', company: '', location: '', startDate: '', endDate: '', description: '', isCurrentPosition: false }],
//     education: [{ school: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '', grade: '', activities: '' }],
//     skills: ['']
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [headingAnimation, setHeadingAnimation] = useState(false);

//   useEffect(() => {
//     // Adding animation delay for the heading after component mounts
//     setTimeout(() => {
//       setHeadingAnimation(true);
//     }, 300);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfileData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//     setErrors((prev) => ({ ...prev, [name]: '' }));
//   };

//   const handleArrayChange = (index, e, field) => {
//     const updatedArray = [...profileData[field]];
//     updatedArray[index] = e.target.value;
//     setProfileData((prev) => ({
//       ...prev,
//       [field]: updatedArray,
//     }));
//   };

//   const addNewField = (field) => {
//     setProfileData((prev) => ({
//       ...prev,
//       [field]: [...prev[field], ''],
//     }));
//   };

//   const removeField = (index, field) => {
//     const updatedArray = [...profileData[field]];
//     updatedArray.splice(index, 1);
//     setProfileData((prev) => ({
//       ...prev,
//       [field]: updatedArray,
//     }));
//   };

//   const validate = () => {
//     let newErrors = {};
//     if (!profileData.firstName.trim()) newErrors.firstName = 'First Name is required';
//     if (!profileData.lastName.trim()) newErrors.lastName = 'Last Name is required';
//     if (!profileData.email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(profileData.email)) {
//       newErrors.email = 'Email is invalid';
//     }
//     if (profileData.phone && !/^\+?\d{10,15}$/.test(profileData.phone)) {
//       newErrors.phone = 'Phone number is invalid';
//     }
//     if (!profileData.country.trim()) newErrors.country = 'Country is required';
//     if (!profileData.city.trim()) newErrors.city = 'City is required';
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setSubmitted(true);
//       console.log(profileData);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
//       <h1
//         className={`text-4xl font-bold mb-8 text-center text-black transition-all duration-1000 ease-in-out ${
//           headingAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}
//       >
//         Edit Your Profile
//       </h1>
//       <form onSubmit={handleSubmit} className="space-y-8">
//         {/* Basic Information */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <label className="block text-lg font-medium mb-2 text-black">First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={profileData.firstName}
//               onChange={handleChange}
//               className={`w-full p-3 bg-white text-black border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300 ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
//             />
//             {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
//           </div>
//           <div>
//             <label className="block text-lg font-medium mb-2 text-black">Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={profileData.lastName}
//               onChange={handleChange}
//               className={`w-full p-3 bg-white text-black border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300 ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
//             />
//             {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
//           </div>
//         </div>
//         {/* Title */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={profileData.title}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., full stack developer"
//           />
//         </div>
//         {/* Company */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Company</label>
//           <input
//             type="text"
//             name="company"
//             value={profileData.company}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., ABCD pvt ltd."
//           />
//         </div>
//         {/* Company Location */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Company Location</label>
//           <input
//             type="text"
//             name="company"
//             value={profileData.companyLoacation}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., noida"
//           />
//         </div>
//         {/* Start Date */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Start Date</label>
//           <input
//             type="number"
//             name="startDate"
//             value={profileData.startDate}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., dd/mm/yyyy"
//           />
//         </div>
//         {/* End Date */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">End Date</label>
//           <input
//             type="number"
//             name="endDate"
//             value={profileData.endDate}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., dd/mm/yyyy"
//           />
//         </div>
//         {/* Description */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Description</label>
//           <input
//             type="text"
//             name="description"
//             value={profileData.description}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., more details about company "
//           />
//         </div>
//         {/* IsCurrentPosition */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">IsCurrentPosition</label>
//           <input
//             type="text"
//             name="isCurrentPosition"
//             value={profileData.isCurrentPosition}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., engineer,manager etc."
//           />
//         </div>
//        {/* School */}
//        <div>
//           <label className="block text-lg font-medium mb-2 text-black">School</label>
//           <input
//             type="text"
//             name="school"
//             value={profileData.school}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., xyz college"
//           />
//         </div>
//       {/* Degree */}
//        <div>
//           <label className="block text-lg font-medium mb-2 text-black">Degree</label>
//           <input
//             type="text"
//             name="degree"
//             value={profileData.degree}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., Bacholar of Technology"
//           />
//         </div>
//         {/* Field Of Study */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Field Of Study</label>
//           <input
//             type="text"
//             name="fieldOfStudy"
//             value={profileData.fieldOfStudy}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., computer science engg."
//           />
//         </div>

//          {/* Start Date */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Start Date</label>
//           <input
//             type="number"
//             name="startDate"
//             value={profileData.startDate}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., dd/mm/yyyy"
//           />
//         </div>
//         {/* End Date */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">End Date</label>
//           <input
//             type="number"
//             name="endDate"
//             value={profileData.endDate}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., dd/mm/yyyy"
//           />
//         </div>

//          {/* Grade*/}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Grade</label>
//           <input
//             type="text"
//             name="grade"
//             value={profileData.grade}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., 8.88 cgpa"
//           />
//         </div>
//          {/* Activities */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Activities</label>
//           <input
//             type="text"
//             name="activities"
//             value={profileData.activities}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., cricket player, singer etc."
//           />
//         </div>
//          {/* Recommender Name */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Recommender Name</label>
//           <input
//             type="text"
//             name="recommenderName"
//             value={profileData.recommenderName}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., Mr.SRK."
//           />
//         </div>
//          {/* Relationship */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Relationship</label>
//           <input
//             type="text"
//             name="relationship"
//             value={profileData.relationship}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., Friend"
//           />
//         </div>
//          {/* Position */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Position</label>
//           <input
//             type="text"
//             name="position"
//             value={profileData.position}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., Manager"
//           />
//         </div>
//          {/* Recommendation Text */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Recommendation Text</label>
//           <input
//             type="text"
//             name="recommendationText"
//             value={profileData.recommendationText}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder=""
//           />
//         </div>



//         {/* Title User's publications*/}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Title of User's publications</label>
//           <input
//             type="text"
//             name="title"
//             value={profileData.title}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., Title of the publication"
//           />
//         </div>
//         {/*publisher */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Headline</label>
//           <input
//             type="text"
//             name="headline"
//             value={profileData.headline}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., Senior Software Engineer"
//           />
//         </div>
//         {/* Date*/}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Date</label>
//           <input
//             type="number"
//             name="date"
//             value={profileData.date}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., dd/mm/yyyy"
//           />
//         </div>
//         {/*  url  */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">url</label>
//           <input
//             type="string"
//             name="url"
//             value={profileData.url}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="http.."
//           />
//         </div>
//         {/* Title */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Title </label>
//           <input
//             type="text"
//             name="title"
//             value={profileData.title}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., Title of the honor or award."
//           />
//         </div>
//          {/* Issuer */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Issuer</label>
//           <input
//             type="text"
//             name="issuer"
//             value={profileData.issuer}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., Issuer of the honor or award. "
//           />
//         </div> {/* IssueDate */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Issue Date</label>
//           <input
//             type="number"
//             name="issueDate"
//             value={profileData.issueDate}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., Date the honor or award was issued."
//           />
//         </div> {/* Description */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Description</label>
//           <input
//             type="text"
//             name="description"
//             value={profileData.description}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., Description of the honor or award."
//           />
//         </div>
//         {/* TestName */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Test Name</label>
//           <input
//             type="text"
//             name="testName"
//             value={profileData.testName}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., Name of the test."
//           />
//         </div>
//          {/* Score */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Score</label>
//           <input
//             type="text"
//             name="score"
//             value={profileData.score}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., Score achieved."
//           />
//         </div>
//          {/* Date Completed */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Date Completed"</label>
//           <input
//             type="text"
//             name="dateCompleted"
//             value={profileData.dateCompleted}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., Date the test was completed."
//           />
//         </div>
//         {/* Language */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Language</label>
//           <input
//             type="text"
//             name="language"
//             value={profileData.language}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., Name of the language."
//           />
//         </div>
//         {/* Proficiency Level */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Proficiency Level</label>
//           <input
//             type="text"
//             name="proficiencyLevel"
//             value={profileData.proficiencyLevel}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., Proficiency level in the language"
//           />
//         </div>
//          {/* Organization */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Organization</label>
//           <input
//             type="text"
//             name="organization"
//             value={profileData.organization}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="Name of the organization."
//           />
//         </div>
//          {/* Role */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Role</label>
//           <input
//             type="text"
//             name="role"
//             value={profileData.role}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="Role in the organization."
//           />
//         </div>
//          {/* Cause */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Cause</label>
//           <input
//             type="text"
//             name="cause"
//             value={profileData.cause}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="Cause supported."
//           />
//         </div>
//          {/* Start Date */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">StartDate</label>
//           <input
//             type="number"
//             name="startDate"
//             value={profileData.startDate}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="Start date of volunteering."
//           />
//         </div>
//          {/* EndDate */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">End Date</label>
//           <input
//             type="number"
//             name="endDate"
//             value={profileData.endDate}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="End date of volunteering."
//           />
//         </div>
//          {/* Description */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Description</label>
//           <input
//             type="text"
//             name="description"
//             value={profileData.description}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="Description of volunteer work."
//           />
//         </div>
//          {/* Title-TargetRoles */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Title</label>
//           <input
//             type="text"
//             name="title"
//             value={profileData.title}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="Title of the target role."
//           />
//         </div>
//          {/* Industry */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Industry</label>
//           <input
//             type="text"
//             name="industry"
//             value={profileData.industry}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="Industry of the target role."
//           />
//         </div>
//          {/* Seniority */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Seniority</label>
//           <input
//             type="text"
//             name="seniority"
//             value={profileData.seniority}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="Seniority level of the target role."
//           />
//         </div>
//          {/* desiredSalary */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Desired Salary</label>
//           <input
//             type="number"
//             name="desiredSalary"
//             value={profileData.desiredSalary}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="Desired salary for the target role. "
//           />
//         </div>
//          {/* Name-targetCompanies */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={profileData.name}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="Name of the target company."
//           />
//         </div>
//          {/* Industry */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Industry</label>
//           <input
//             type="text"
//             name="industry"
//             value={profileData.industry}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="Industry of the target company."
//           />
//         </div>
//          {/* size */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Size</label>
//           <input
//             type="number"
//             name="size"
//             value={profileData.size}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="Size of the target company."
//           />
//         </div>
//          {/* Reason */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Reason</label>
//           <input
//             type="text"
//             name="reason"
//             value={profileData.reason}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="Reason for interest in the company."
//           />
//         </div>

//         {/* UserId-connections */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">UserId</label>
//           <input
//             type="text"
//             name="userId"
//             value={profileData.userId}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="User ID of the connection."
//           />
//         </div>
//         {/* Connection Date */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Connection Date</label>
//           <input
//             type="text"
//             name="connectionDate"
//             value={profileData.connectionDate}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="Date of connection establishment."
//           />
//         </div>
//         {/* Relationship Strength */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Relationship Strength</label>
//           <input
//             type="text"
//             name="relationshipStrength"
//             value={profileData.relationshipStrength}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="Strength of the relationship (e.g., on a scale of 1-10)."
//           />
//         </div>
//          {/* Name-groups*/}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">Name</label>
//           <input
//             type="text"
//             name="name"
//             value={profileData.name}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder= "Name of the group."
//           />
//         </div>
//          {/* MemberSince */}
//          <div>
//           <label className="block text-lg font-medium mb-2 text-black">MemberSince</label>
//           <input
//             type="text"
//             name="memberSince"
//             value={profileData.memberSince}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder= "Date of joining the group. Null if not available."
//           />
//         </div>
//         {/* IsAdmin */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">IsAdmin</label>
//           <input
//             type="text"
//             name="isAdmin"
//             value={profileData.isAdmin}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="Whether the user is an admin of the group."
//           />
//         </div>



 
//         {/* Headline */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Headline</label>
//           <input
//             type="text"
//             name="headline"
//             value={profileData.headline}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., Senior Software Engineer"
//           />
//         </div>

//         {/* Location */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <label className="block text-lg font-medium mb-2 text-black">Country</label>
//             <input
//               type="text"
//               name="country"
//               value={profileData.country}
//               onChange={handleChange}
//               className={`w-full p-3 bg-white text-black border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300 ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
//               placeholder="Enter your country"
//             />
//             {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
//           </div>
//           <div>
//             <label className="block text-lg font-medium mb-2 text-black">City</label>
//             <input
//               type="text"
//               name="city"
//               value={profileData.city}
//               onChange={handleChange}
//               className={`w-full p-3 bg-white text-black border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300 ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
//               placeholder="Enter your city"
//             />
//             {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
//           </div>
//         </div>

//         {/* Industry */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Industry</label>
//           <input
//             type="text"
//             name="industry"
//             value={profileData.industry}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., Technology"
//           />
//         </div>

//         {/* desired salary */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Desired salary</label>
//           <input
//             type="number"
//             name="desiredSalary"
//             value={profileData.desiredSalary}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="e.g., 120000"
//           />
//         </div>

//         {/* Profile Picture URL */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Profile Picture URL</label>
//           <input
//             type="url"
//             name="profilePictureUrl"
//             value={profileData.profilePictureUrl}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="Paste your profile image URL"
//           />
//         </div>

//         {/* Summary */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Summary</label>
//           <textarea
//             name="summary"
//             value={profileData.summary}
//             onChange={handleChange}
//             className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//             placeholder="Write a brief summary about yourself"
//             rows="4"
//           />
//         </div>

//         {/* Contact Information */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <label className="block text-lg font-medium mb-2 text-black">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={profileData.email}
//               onChange={handleChange}
//               className={`w-full p-3 bg-white text-black border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//               placeholder="you@example.com"
//             />
//             {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
//           </div>
//           <div>
//             <label className="block text-lg font-medium mb-2 text-black">Phone</label>
//             <input
//               type="tel"
//               name="phone"
//               value={profileData.phone}
//               onChange={handleChange}
//               className={`w-full p-3 bg-white text-black border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//               placeholder="+1234567890"
//             />
//             {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
//           </div>
//         </div>

//         {/* Websites */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Websites</label>
//           {profileData.websites.map((website, index) => (
//             <div key={index} className="flex space-x-2 mb-2">
//               <input
//                 type="url"
//                 value={website}
//                 onChange={(e) => handleArrayChange(index, e, 'websites')}
//                 className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//                 placeholder="Website URL"
//               />
//               {index > 0 && (
//                 <button
//                   type="button"
//                   onClick={() => removeField(index, 'websites')}
//                   className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-transform transform hover:scale-110 duration-200"
//                 >
//                   Remove
//                 </button>
//               )}
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => addNewField('websites')}
//             className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-transform transform hover:scale-110 duration-200"
//           >
//             Add Website
//           </button>
//         </div>

//         {/* Skills */}
//         <div>
//           <label className="block text-lg font-medium mb-2 text-black">Skills</label>
//           {profileData.skills.map((skill, index) => (
//             <div key={index} className="flex space-x-2 mb-2">
//               <input
//                 type="text"
//                 value={skill}
//                 onChange={(e) => handleArrayChange(index, e, 'skills')}
//                 className="w-full p-3 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-transform transform focus:scale-105 duration-300"
//                 placeholder="Skill"
//               />
//               {index > 0 && (
//                 <button
//                   type="button"
//                   onClick={() => removeField(index, 'skills')}
//                   className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-transform transform hover:scale-110 duration-200"
//                 >
//                   Remove
//                 </button>
//               )}
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={() => addNewField('skills')}
//             className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-transform transform hover:scale-110 duration-200"
//           >
//             Add Skill
//           </button>
//         </div>

//         <button
//           type="submit"
//           className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-transform transform hover:scale-110 hover:shadow-xl duration-300"
//         >
//           Save Profile
//         </button>

//         {submitted && <p className="text-green-600 text-center mt-6">Profile saved successfully!</p>}
//       </form>
//     </div>
//   );
// };

// export default EditProfile;

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    // ... (previous state remains the same)
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [headingAnimation, setHeadingAnimation] = useState(false);
  const [openSections, setOpenSections] = useState({
    basicInfo: true,
    contactInfo: false,
    education: false,
    experience: false,
    skills: false,
    additionalInfo: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setHeadingAnimation(true);
    }, 300);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleArrayChange = (index, e, field) => {
    const updatedArray = [...profileData[field]];
    updatedArray[index] = e.target.value;
    setProfileData((prev) => ({
      ...prev,
      [field]: updatedArray,
    }));
  };

  const addNewField = (field) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: [...prev[field], ''],
    }));
  };

  const removeField = (index, field) => {
    const updatedArray = [...profileData[field]];
    updatedArray.splice(index, 1);
    setProfileData((prev) => ({
      ...prev,
      [field]: updatedArray,
    }));
  };

  const validate = () => {
    let newErrors = {};
    // ... (validation logic remains the same)
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      console.log(profileData);
    }
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const SectionHeader = ({ title, isOpen, onToggle }) => (
    <div
      className="flex justify-between items-center cursor-pointer bg-gray-100 p-4 rounded-lg mb-4"
      onClick={onToggle}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
      <h1
        className={`text-4xl font-bold mb-8 text-center text-black transition-all duration-1000 ease-in-out ${
          headingAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        Edit Your Profile
      </h1>
      <form onSubmit={handleSubmit} className="space-y-8">
         {/* Basic Information */}
         <SectionHeader
          title="Basic Information"
          isOpen={openSections.basicInfo}
          onToggle={() => toggleSection('basicInfo')}
        />
        {openSections.basicInfo && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={profileData.firstName}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={profileData.lastName}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>
            {/* Add more basic information fields here */}
          </div>
        )}

        {/* Contact Information */}
        <SectionHeader
          title="Contact Information"
          isOpen={openSections.contactInformation}
          onToggle={() => toggleSection('contactInformation')}
        />
        {openSections.contactInformation && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="email@gmail.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Contact Number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="website">
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  value={profileData.website}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.website ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="http//..."
                />
                {errors.website && (
                  <p className="mt-1 text-sm text-red-500">{errors.website}</p>
                )}
              </div>
            </div>
            {/* Add more contact information fields here */}
          </div>
        )}

        {/* Education */}
        <SectionHeader
          title="Education"
          isOpen={openSections.education}
          onToggle={() => toggleSection('education')}
        />
        {openSections.education && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="school">
                  School
                </label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  value={profileData.school}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.school ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="abc school"
                />
                {errors.school && (
                  <p className="mt-1 text-sm text-red-500">{errors.school}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="degree">
                  Degree
                </label>
                <input
                  type="text"
                  id="degree"
                  name="degree"
                  value={profileData.degree}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.degree ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="B.Tech, M.Tech etc."
                />
                {errors.degree && (
                  <p className="mt-1 text-sm text-red-500">{errors.degree}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fieldOfStudy">
                Field Of Study
                </label>
                <input
                  type="text"
                  id="fieldOfStudy"
                  name="fieldOfStudy"
                  value={profileData.fieldOfStudy}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.fieldOfStudy ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="CSE, IT etc."
                />
                {errors.fieldOfStudy && (
                  <p className="mt-1 text-sm text-red-500">{errors.fieldOfStudy}</p>
                )}
              </div>
            </div>
            {/* Add more Education fields here */}
          </div>
        )}

        {/* Experience */}
        <SectionHeader
          title="Experience"
          isOpen={openSections.experience}
          onToggle={() => toggleSection('experience')}
        />
        {openSections.experience && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={profileData.title}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Manager, Hr. etc."
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-500">{errors.title}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="company">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={profileData.company}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.company ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Xyz Pvt. Ltd."
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-red-500">{errors.company}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="location">
                Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={profileData.location}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.location ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Job Loction "
                />
                {errors.location && (
                  <p className="mt-1 text-sm text-red-500">{errors.location}</p>
                )}
              </div>
            </div>
            {/* Add more Experience fields here */}
          </div>
        )}

        {/* Skills */}
        <SectionHeader
          title="Skills"
          isOpen={openSections.experience}
          onToggle={() => toggleSection('skills')}
        />
        {openSections.skills && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-1" htmlFor="skills">
                  Skills
                </label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  value={profileData.skills}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.skills ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Generative AI etc."
                />
                {errors.skills && (
                  <p className="mt-1 text-sm text-red-500">{errors.skills}</p>
                )}
              </div>
            </div>
            {/* Add more Skills fields here */}
          </div>
        )}

        {/* Additional Information */}
        <SectionHeader
          title="Publications"
          isOpen={openSections.publications}
          onToggle={() => toggleSection('publications')}
        />
        {openSections.publications && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="publications">
                  Publications
                </label>
                <input
                  type="text"
                  id="publications"
                  name="publications"
                  value={profileData.publications}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.publications? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Details of Publications"
                />
                {errors.publications && (
                  <p className="mt-1 text-sm text-red-500">{errors.publications}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="honors">
                  Honors
                </label>
                <input
                  type="text"
                  id="honors"
                  name="honors"
                  value={profileData.honors}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.honors ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Mention Honors and Awards"
                />
                {errors.honors && (
                  <p className="mt-1 text-sm text-red-500">{errors.honors}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="languages">
                Languages
                </label>
                <input
                  type="text"
                  id="languages"
                  name="languages"
                  value={profileData.languages}
                  onChange={handleChange}
                  className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.languages ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Languages known by the user"
                />
                {errors.languages && (
                  <p className="mt-1 text-sm text-red-500">{errors.languages}</p>
                )}
              </div>
            </div>
            {/* Add more additional information fields here */}
          </div>
        )}

        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-transform transform hover:scale-110 hover:shadow-xl duration-300"
        >
          Save Profile
        </button>

        {submitted && <p className="text-green-600 text-center mt-6">Profile saved successfully!</p>}
      </form>
    </div>
  );
};

export default EditProfile;