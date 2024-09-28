// import React, { useState } from 'react';
// import { Eye, EyeOff } from 'lucide-react';
// import wonsultingLogo from '../assets/Wonsulting AI.png';

// const Signup = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [firstNameError, setFirstNameError] = useState('');
//   const [lastNameError, setLastNameError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [confirmPasswordError, setConfirmPasswordError] = useState('');

//   const handleFirstNameChange = (e) => {
//     const value = e.target.value;
//     const regex = /^[A-Za-z]*$/; // Allows only alphabetic characters

//     if (!regex.test(value)) {
//       setFirstNameError('First name should not contain numbers or special characters');
//     } else {
//       setFirstNameError('');
//     }

//     setFirstName(value);
//   };

//   const handleLastNameChange = (e) => {
//     const value = e.target.value;
//     const regex = /^[A-Za-z]*$/; // Allows only alphabetic characters

//     if (!regex.test(value)) {
//       setLastNameError('Last name should not contain numbers or special characters');
//     } else {
//       setLastNameError('');
//     }

//     setLastName(value);
//   };

//   const handlePasswordChange = (e) => {
//     const value = e.target.value;
//     setPassword(value);
//     // Check if password exceeds 10 characters
//     if (value.length > 10) {
//       setPasswordError('Password cannot exceed 10 characters');
//     } else {
//       setPasswordError('');
//     }
//   };

//   const handleConfirmPasswordChange = (e) => {
//     const value = e.target.value;
//     setConfirmPassword(value);
//     // Check if confirm password matches password
//     if (value !== password) {
//       setConfirmPasswordError('Confirm password must match the password');
//     } else {
//       setConfirmPasswordError('');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle signup logic here
//     if (!firstNameError && !lastNameError && !passwordError && !confirmPasswordError) {
//       console.log('Signup attempt with:', { firstName, lastName, email, password, confirmPassword });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <div className="text-center">
//             <img
//               className="mx-auto h-12 w-auto"
//               src={wonsultingLogo}
//               alt="Wonsulting"
//             />
//             <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create your account</h2>
//           </div>
//           <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
//             <div className="grid grid-cols-2 gap-6">
//               <div>
//                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
//                   First Name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="firstName"
//                     name="firstName"
//                     type="text"
//                     autoComplete="given-name"
//                     required
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 bg-white text-black rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                     value={firstName}
//                     onChange={handleFirstNameChange}
//                   />
//                   {firstNameError && <p className="text-red-500 text-sm mt-1">{firstNameError}</p>}
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
//                   Last Name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="lastName"
//                     name="lastName"
//                     type="text"
//                     autoComplete="family-name"
//                     required
//                     className="appearance-none block w-full px-3 py-2 border border-gray-300 bg-white text-black rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                     value={lastName}
//                     onChange={handleLastNameChange}
//                   />
//                   {lastNameError && <p className="text-red-500 text-sm mt-1">{lastNameError}</p>}
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email address
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 bg-white text-black rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="mt-1 relative">
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? 'text' : 'password'}
//                   autoComplete="new-password"
//                   required
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 bg-white text-black rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   value={password}
//                   onChange={handlePasswordChange}
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? (
//                     <EyeOff className="h-5 w-5 text-gray-400" />
//                   ) : (
//                     <Eye className="h-5 w-5 text-gray-400" />
//                   )}
//                 </button>
//               </div>
//               {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
//             </div>

//             <div>
//               <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
//                 Confirm Password
//               </label>
//               <div className="mt-1 relative">
//                 <input
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   autoComplete="new-password"
//                   required
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 bg-white text-black rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//                   value={confirmPassword}
//                   onChange={handleConfirmPasswordChange}
//                 />
//                 <button
//                   type="button"
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 >
//                   {showConfirmPassword ? (
//                     <EyeOff className="h-5 w-5 text-gray-400" />
//                   ) : (
//                     <Eye className="h-5 w-5 text-gray-400" />
//                   )}
//                 </button>
//               </div>
//               {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//               >
//                 Register
//               </button>
//             </div>

//             <div className="text-sm text-center mt-4">
//               <span className="text-black">Already have an account? </span>
//               <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
//                 Login
//               </a>
//             </div>
            
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import wonsultingLogo from '../assets/Wonsulting AI.png';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z]*$/; // Allows only alphabetic characters

    if (!regex.test(value)) {
      setFirstNameError('First name should not contain numbers or special characters');
    } else {
      setFirstNameError('');
    }

    setFirstName(value);
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z]*$/; // Allows only alphabetic characters

    if (!regex.test(value)) {
      setLastNameError('Last name should not contain numbers or special characters');
    } else {
      setLastNameError('');
    }

    setLastName(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    // Check if password exceeds 10 characters
    if (value.length > 10) {
      setPasswordError('Password cannot exceed 10 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    // Check if confirm password matches password
    if (value !== password) {
      setConfirmPasswordError('Confirm password must match the password');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    if (!firstNameError && !lastNameError && !passwordError && !confirmPasswordError) {
      console.log('Signup attempt with:', { firstName, lastName, email, password, confirmPassword });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <img
              className="mx-auto h-12 w-auto"
              src={wonsultingLogo}
              alt="Wonsulting"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create your account</h2>
          </div>
          <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 bg-white text-black rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={firstName}
                    onChange={handleFirstNameChange}
                  />
                  {firstNameError && <p className="text-red-500 text-sm mt-1">{firstNameError}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 bg-white text-black rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={lastName}
                    onChange={handleLastNameChange}
                  />
                  {lastNameError && <p className="text-red-500 text-sm mt-1">{lastNameError}</p>}
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 bg-white text-black rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 bg-white text-black rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1 relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 bg-white text-black rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register
              </button>
            </div>

            <div className="text-sm text-center mt-4">
              <span className="text-black">Already have an account? </span>
              <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Login
              </a>
            </div>

            {/* Social Media Signup */}
            <div className="mt-6">
              <div className="text-center text-gray-500">Or sign up with</div>
              <div className="mt-3 flex justify-center space-x-4">
                {/* Facebook Icon */}
                <a href="#" className="text-blue-600 hover:text-blue-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="4.98em" height="2em" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
                </a>
                {/* Google Icon */}
                <a href="#" className="text-red-600 hover:text-red-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="4.98em" height="2em" viewBox="0 0 256 262"><path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/><path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/></svg>
                </a>
                {/* LinkedIn Icon */}
                <a href="#" className="text-blue-700 hover:text-blue-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="4.98em" height="2em" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
                </a>
              </div>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
