// import React, { useState, useEffect } from 'react';
// import { ChevronDown, ChevronUp } from 'lucide-react';

// const EditProfile = () => {
//   const [profileData, setProfileData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     website: '',
//     school: '',
//     degree: '',
//     fieldOfStudy: '',
//     title: '',
//     company: '',
//     location: '',
//     skills: '',
//     publications: '',
//     honors: '',
//     languages: '',
//   });

//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [headingAnimation, setHeadingAnimation] = useState(false);
//   const [openSections, setOpenSections] = useState({
//     basicInfo: true,
//     contactInfo: false,
//     education: false,
//     experience: false,
//     skills: false,
//     additionalInfo: false,
//   });

//   useEffect(() => {
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

//   const validate = () => {
//     let newErrors = {};
//     // Add validation logic here
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

//   const toggleSection = (section) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   const SectionHeader = ({ title, isOpen, onToggle }) => (
//     <div
//       className="flex justify-between items-center cursor-pointer bg-gray-100 p-4 rounded-lg mb-4 transition-all duration-300 hover:bg-gray-200"
//       onClick={onToggle}
//     >
//       <h2 className="text-xl font-semibold">{title}</h2>
//       <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
//         {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
//       </div>
//     </div>
//   );

//   const InputField = ({ label, name, value, onChange, error, placeholder, type = "text" }) => (
//     <div className="transition-all duration-300 opacity-100 transform translate-y-0">
//       <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={name}>
//         {label}
//       </label>
//       <input
//         type={type}
//         id={name}
//         name={name}
//         value={value}
//         onChange={onChange}
//         className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300  bg-white text-gray-700 ${
//           error ? 'border-red-500' : 'border-gray-300'
//         }`}
//         placeholder={placeholder}
//       />
//       {error && (
//         <p className="mt-1 text-sm text-red-500 transition-opacity duration-300">
//           {error}
//         </p>
//       )}
//     </div>
//   );

//   return (
//     <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 transition-all duration-300 hover:shadow-2xl">
//       <h1
//         className={`text-4xl font-bold mb-8 text-center text-black transition-all duration-1000 ${
//           headingAnimation ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'
//         }`}
//       >
//         Edit Your Profile
//       </h1>
//       <form onSubmit={handleSubmit} className="space-y-8">
//         {/* Basic Information */}
//         <SectionHeader
//           title="Basic Information"
//           isOpen={openSections.basicInfo}
//           onToggle={() => toggleSection('basicInfo')}
//         />
//         <div className={`space-y-4 transition-all duration-500 ${openSections.basicInfo ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <InputField
//               label="First Name"
//               name="firstName"
//               value={profileData.firstName}
//               onChange={handleChange}
//               error={errors.firstName}
//               placeholder="Enter your first name"
//             />
//             <InputField
//               label="Last Name"
//               name="lastName"
//               value={profileData.lastName}
//               onChange={handleChange}
//               error={errors.lastName}
//               placeholder="Enter your last name"
//             />
//           </div>
//         </div>

//         {/* Contact Information */}
//         <SectionHeader
//           title="Contact Information"
//           isOpen={openSections.contactInfo}
//           onToggle={() => toggleSection('contactInfo')}
//         />
//         <div className={`space-y-4 transition-all duration-500 ${openSections.contactInfo ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <InputField
//               label="Email"
//               name="email"
//               value={profileData.email}
//               onChange={handleChange}
//               error={errors.email}
//               placeholder="email@example.com"
//               type="email"
//             />
//             <InputField
//               label="Phone"
//               name="phone"
//               value={profileData.phone}
//               onChange={handleChange}
//               error={errors.phone}
//               placeholder="Contact Number"
//               type="tel"
//             />
//             <InputField
//               label="Website"
//               name="website"
//               value={profileData.website}
//               onChange={handleChange}
//               error={errors.website}
//               placeholder="https://..."
//               type="url"
//             />
//           </div>
//         </div>

//         {/* Education */}
//         <SectionHeader
//           title="Education"
//           isOpen={openSections.education}
//           onToggle={() => toggleSection('education')}
//         />
//         <div className={`space-y-4 transition-all duration-500 ${openSections.education ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <InputField
//               label="School"
//               name="school"
//               value={profileData.school}
//               onChange={handleChange}
//               error={errors.school}
//               placeholder="Your school name"
//             />
//             <InputField
//               label="Degree"
//               name="degree"
//               value={profileData.degree}
//               onChange={handleChange}
//               error={errors.degree}
//               placeholder="B.Tech, M.Tech, etc."
//             />
//             <InputField
//               label="Field of Study"
//               name="fieldOfStudy"
//               value={profileData.fieldOfStudy}
//               onChange={handleChange}
//               error={errors.fieldOfStudy}
//               placeholder="CSE, IT, etc."
//             />
//           </div>
//         </div>

//         {/* Experience */}
//         <SectionHeader
//           title="Experience"
//           isOpen={openSections.experience}
//           onToggle={() => toggleSection('experience')}
//         />
//         <div className={`space-y-4 transition-all duration-500 ${openSections.experience ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <InputField
//               label="Title"
//               name="title"
//               value={profileData.title}
//               onChange={handleChange}
//               error={errors.title}
//               placeholder="Job Title"
//             />
//             <InputField
//               label="Company"
//               name="company"
//               value={profileData.company}
//               onChange={handleChange}
//               error={errors.company}
//               placeholder="Company Name"
//             />
//             <InputField
//               label="Location"
//               name="location"
//               value={profileData.location}
//               onChange={handleChange}
//               error={errors.location}
//               placeholder="Job Location"
//             />
//           </div>
//         </div>

//         {/* Skills */}
//         <SectionHeader
//           title="Skills"
//           isOpen={openSections.skills}
//           onToggle={() => toggleSection('skills')}
//         />
//         <div className={`space-y-4 transition-all duration-500 ${openSections.skills ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
//           <InputField
//             label="Skills"
//             name="skills"
//             value={profileData.skills}
//             onChange={handleChange}
//             error={errors.skills}
//             placeholder="Generative AI, Machine Learning, etc."
//           />
//         </div>

//         {/* Additional Information */}
//         <SectionHeader
//           title="Additional Information"
//           isOpen={openSections.additionalInfo}
//           onToggle={() => toggleSection('additionalInfo')}
//         />
//         <div className={`space-y-4 transition-all duration-500 ${openSections.additionalInfo ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <InputField
//               label="Publications"
//               name="publications"
//               value={profileData.publications}
//               onChange={handleChange}
//               error={errors.publications}
//               placeholder="Details of Publications"
//             />
//             <InputField
//               label="Honors"
//               name="honors"
//               value={profileData.honors}
//               onChange={handleChange}
//               error={errors.honors}
//               placeholder="Honors and Awards"
//             />
//             <InputField
//               label="Languages"
//               name="languages"
//               value={profileData.languages}
//               onChange={handleChange}
//               error={errors.languages}
//               placeholder="Languages known"
//             />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
//         >
//           Save Profile
//         </button>

//         {submitted && (
//           <p className="text-green-600 text-center mt-6 transition-opacity duration-500">
//             Profile saved successfully!
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default EditProfile;

//-------------------------------------------------------------------------------------------------
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, AlertCircle } from 'lucide-react';

const CustomAlert = ({ message }) => (
  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
    <span className="flex items-center">
      <AlertCircle className="mr-2" size={20} />
      <span>{message}</span>
    </span>
  </div>
);

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    school: '',
    degree: '',
    fieldOfStudy: '',
    title: '',
    company: '',
    location: '',
    skills: '',
    publications: '',
    honors: '',
    languages: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [headingAnimation, setHeadingAnimation] = useState(false);
  const [currentSection, setCurrentSection] = useState('basicInfo');
  const [showValidationAlert, setShowValidationAlert] = useState(false);

  const sections = [
    'basicInfo',
    'contactInfo',
    'education',
    'experience',
    'skills',
    'additionalInfo'
  ];

  const [completedSections, setCompletedSections] = useState({
    basicInfo: false,
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

  useEffect(() => {
    checkSectionCompletion();
  }, [profileData]);

  const validateEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const validatePhone = (phone) => {
    return phone.match(/^\+?[\d\s-]{10,}$/);
  };

  const validateWebsite = (website) => {
    return website.match(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/);
  };

  const validateSection = (section) => {
    let sectionErrors = {};
    
    switch(section) {
      case 'basicInfo':
        if (!profileData.firstName.trim()) sectionErrors.firstName = 'First name is required';
        if (!profileData.lastName.trim()) sectionErrors.lastName = 'Last name is required';
        break;
      
      case 'contactInfo':
        if (!profileData.email.trim()) sectionErrors.email = 'Email is required';
        else if (!validateEmail(profileData.email)) sectionErrors.email = 'Invalid email format';
        
        if (!profileData.phone.trim()) sectionErrors.phone = 'Phone number is required';
        else if (!validatePhone(profileData.phone)) sectionErrors.phone = 'Invalid phone format';
        
        if (!profileData.website.trim()) sectionErrors.website = 'Website is required';
        else if (!validateWebsite(profileData.website)) sectionErrors.website = 'Invalid website format';
        break;
      
      case 'education':
        if (!profileData.school.trim()) sectionErrors.school = 'School is required';
        if (!profileData.degree.trim()) sectionErrors.degree = 'Degree is required';
        if (!profileData.fieldOfStudy.trim()) sectionErrors.fieldOfStudy = 'Field of study is required';
        break;
      
      case 'experience':
        if (!profileData.title.trim()) sectionErrors.title = 'Job title is required';
        if (!profileData.company.trim()) sectionErrors.company = 'Company is required';
        if (!profileData.location.trim()) sectionErrors.location = 'Location is required';
        break;
      
      case 'skills':
        if (!profileData.skills.trim()) sectionErrors.skills = 'At least one skill is required';
        break;
      
      case 'additionalInfo':
        if (!profileData.publications.trim()) sectionErrors.publications = 'Publications are required';
        if (!profileData.honors.trim()) sectionErrors.honors = 'Honors are required';
        if (!profileData.languages.trim()) sectionErrors.languages = 'Languages are required';
        break;
    }

    return sectionErrors;
  };

  const checkSectionCompletion = () => {
    const newCompletedSections = {
      basicInfo: Object.keys(validateSection('basicInfo')).length === 0,
      contactInfo: Object.keys(validateSection('contactInfo')).length === 0,
      education: Object.keys(validateSection('education')).length === 0,
      experience: Object.keys(validateSection('experience')).length === 0,
      skills: Object.keys(validateSection('skills')).length === 0,
      additionalInfo: Object.keys(validateSection('additionalInfo')).length === 0,
    };
    setCompletedSections(newCompletedSections);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setShowValidationAlert(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allSectionsValid = sections.every(section => 
      Object.keys(validateSection(section)).length === 0
    );

    if (!allSectionsValid) {
      setShowValidationAlert(true);
      return;
    }

    setSubmitted(true);
    console.log(profileData);
  };

  const nextSection = () => {
    const currentSectionErrors = validateSection(currentSection);
    
    if (Object.keys(currentSectionErrors).length > 0) {
      setErrors(currentSectionErrors);
      setShowValidationAlert(true);
      return;
    }

    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1]);
      setShowValidationAlert(false);
    }
  };

  const previousSection = () => {
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1]);
      setShowValidationAlert(false);
    }
  };

  const SectionHeader = ({ title, sectionKey }) => (
    <div className={`flex justify-between items-center p-4 rounded-lg mb-4 transition-all duration-300 ${
      completedSections[sectionKey]
        ? 'bg-green-100'
        : 'bg-gray-100'
    }`}>
      <div className="flex items-center space-x-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        {completedSections[sectionKey] ? (
          <CheckCircle className="text-green-500" size={20} />
        ) : (
          <AlertCircle className="text-red-500" size={20} />
        )}
      </div>
    </div>
  );

  const InputField = ({ label, name, value, onChange, error, placeholder, type = "text" }) => (
    <div className="transition-all duration-300 opacity-100 transform translate-y-0">
      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={name}>
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white ${
          value && !error ? 'border-green-500 bg-green-50' : 'border-gray-300'
        } ${error ? 'border-red-500 bg-red-50' : ''}`}
        placeholder={placeholder}
        required
      />
      {error && (
        <p className="mt-1 text-sm text-red-500 transition-opacity duration-300">
          {error}
        </p>
      )}
    </div>
  );

  const renderSection = () => {
    switch (currentSection) {
      case 'basicInfo':
        return (
          <>
            <SectionHeader title="Basic Information" sectionKey="basicInfo" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="First Name"
                name="firstName"
                value={profileData.firstName}
                onChange={handleChange}
                error={errors.firstName}
                placeholder="Enter your first name"
              />
              <InputField
                label="Last Name"
                name="lastName"
                value={profileData.lastName}
                onChange={handleChange}
                error={errors.lastName}
                placeholder="Enter your last name"
              />
            </div>
          </>
        );
      case 'contactInfo':
        return (
          <>
            <SectionHeader title="Contact Information" sectionKey="contactInfo" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Email"
                name="email"
                value={profileData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="email@example.com"
                type="email"
              />
              <InputField
                label="Phone"
                name="phone"
                value={profileData.phone}
                onChange={handleChange}
                error={errors.phone}
                placeholder="Contact Number"
                type="tel"
              />
              <InputField
                label="Website"
                name="website"
                value={profileData.website}
                onChange={handleChange}
                error={errors.website}
                placeholder="https://..."
                type="url"
              />
            </div>
          </>
        );
      case 'education':
        return (
          <>
            <SectionHeader title="Education" sectionKey="education" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="School"
                name="school"
                value={profileData.school}
                onChange={handleChange}
                error={errors.school}
                placeholder="Your school name"
              />
              <InputField
                label="Degree"
                name="degree"
                value={profileData.degree}
                onChange={handleChange}
                error={errors.degree}
                placeholder="B.Tech, M.Tech, etc."
              />
              <InputField
                label="Field of Study"
                name="fieldOfStudy"
                value={profileData.fieldOfStudy}
                onChange={handleChange}
                error={errors.fieldOfStudy}
                placeholder="CSE, IT, etc."
              />
            </div>
          </>
        );
      case 'experience':
        return (
          <>
            <SectionHeader title="Experience" sectionKey="experience" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Title"
                name="title"
                value={profileData.title}
                onChange={handleChange}
                error={errors.title}
                placeholder="Job Title"
              />
              <InputField
                label="Company"
                name="company"
                value={profileData.company}
                onChange={handleChange}
                error={errors.company}
                placeholder="Company Name"
              />
              <InputField
                label="Location"
                name="location"
                value={profileData.location}
                onChange={handleChange}
                error={errors.location}
                placeholder="Job Location"
              />
            </div>
          </>
        );
      case 'skills':
        return (
          <>
            <SectionHeader title="Skills" sectionKey="skills" />
            <div className="space-y-4">
              <InputField
                label="Skills"
                name="skills"
                value={profileData.skills}
                onChange={handleChange}
                error={errors.skills}
                placeholder="Generative AI, Machine Learning, etc."
              />
            </div>
          </>
        );
      case 'additionalInfo':
        return (
          <>
            <SectionHeader title="Additional Information" sectionKey="additionalInfo" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Publications"
                name="publications"
                value={profileData.publications}
                onChange={handleChange}
                error={errors.publications}
                placeholder="Details of Publications"
              />
              <InputField
                label="Honors"
                name="honors"
                value={profileData.honors}
                onChange={handleChange}
                error={errors.honors}
                placeholder="Honors and Awards"
              />
              <InputField
                label="Languages"
                name="languages"
                value={profileData.languages}
                onChange={handleChange}
                error={errors.languages}
                placeholder="Languages known"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-10 transition-all duration-300 hover:shadow-2xl">
      <h1
        className={`text-4xl font-bold mb-8 text-center text-black transition-all duration-1000 ${
          headingAnimation ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10'
        }`}
      >
        Edit Your Profile
      </h1>

      {showValidationAlert && (
        <CustomAlert message="Please fill in all required fields in this section before proceeding." />
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {renderSection()}
        
        <div className="flex justify-between mt-8">
          <button
            type="button"
            onClick={previousSection}
            className={`py-2 px-4 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-all duration-300 ${
              sections.indexOf(currentSection) === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={sections.indexOf(currentSection) === 0}
          >
            Previous
          </button>
          {sections.indexOf(currentSection) === sections.length - 1 ? (
            <button
              type="submit"
              className="py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300"
            >
              Save Profile
            </button>
          ) : (
            <button
              type="button"
              onClick={nextSection}
              className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Next
            </button>
          )}
        </div>

        {submitted && (
          <p className="text-green-600 text-center mt-6 transition-opacity duration-500">
            Profile saved successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default EditProfile;