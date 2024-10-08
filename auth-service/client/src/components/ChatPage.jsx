// import React, { useState, useEffect } from 'react';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     {
//       type: 'bot',
//       text: "Sure, I can provide a descriptive prompt for generating new images in the same style as the ones you provided. Here's a detailed description:",
//     },
//     {
//       type: 'bot',
//       text: `"Create a series of images that capture the minimalist and modern aesthetic of urban architecture. The images should feature clean lines, geometric shapes, and a soft pastel color palette..."`,
//     },
//   ]);
//   const [inputMessage, setInputMessage] = useState('');
//   const [isTyping, setIsTyping] = useState(false);

//   // Simulates bot typing
//   useEffect(() => {
//     if (isTyping) {
//       const typingTimeout = setTimeout(() => {
//         setIsTyping(false);
//       }, 2000);
//       return () => clearTimeout(typingTimeout);
//     }
//   }, [isTyping]);

//   // Handle message submission
//   const handleSendMessage = () => {
//     if (inputMessage.trim()) {
//       setMessages((prev) => [...prev, { type: 'user', text: inputMessage }]);
//       setInputMessage('');
//       setIsTyping(true);
//     }
//   };

//   // Handle message submission with Enter key
//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleSendMessage();
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
//         {/* Header */}
//         <div className="flex items-center p-4 bg-gray-100">
//           <img src="logo.png" alt="Logo" className="w-10 h-10 mr-2" />
//           <h1 className="text-xl font-semibold">SayHalo</h1>
//         </div>

//         {/* Chat Window */}
//         <div className="p-4 space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-300 scrollbar-track-gray-100">
//           {messages.map((message, index) => (
//             <div
//               key={index}
//               className={`flex ${
//                 message.type === 'user' ? 'justify-end' : 'justify-start'
//               } space-x-3`}
//             >
//               {message.type === 'bot' && (
//                 <img src="bot-icon.png" alt="Bot" className="w-10 h-10" />
//               )}
//               <div
//                 className={`${
//                   message.type === 'bot'
//                     ? 'bg-gray-100 text-left'
//                     : 'bg-purple-500 text-right text-white'
//                 } p-3 rounded-lg max-w-xs`}
//               >
//                 {message.text}
//               </div>
//             </div>
//           ))}

//           {/* Image Preview and Button */}
//           <div className="flex space-x-3 items-center">
//             <img
//               src="example-image.png"
//               alt="Example"
//               className="w-20 h-20 rounded-lg shadow"
//             />
//             <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg">
//               Try to make some of these images
//             </button>
//           </div>

//           {/* Typing Indicator */}
//           {isTyping && (
//             <div className="flex space-x-3 items-center">
//               <img src="bot-icon.png" alt="Bot" className="w-10 h-10" />
//               <p className="text-gray-500 italic">Typing...</p>
//             </div>
//           )}
//         </div>

//         {/* Input Field */}
//         <div className="flex items-center p-4 bg-gray-100">
//           <input
//             type="text"
//             className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200"
//             placeholder="Ask SayHalo anything..."
//             value={inputMessage}
//             onChange={(e) => setInputMessage(e.target.value)}
//             onKeyPress={handleKeyPress}
//           />
//           <button
//             className="ml-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
//             onClick={handleSendMessage}
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;


// import React, { useState } from 'react';

// const Chatbot = () => {
//   const [messages, setMessages] = useState([
//     { text: 'Hello! How can I assist you today?', sender: 'bot' }
//   ]);
//   const [userInput, setUserInput] = useState('');

//   const handleSend = () => {
//     if (userInput.trim() === '') return;

//     // Add user's message to chat
//     const newMessages = [...messages, { text: userInput, sender: 'user' }];
//     setMessages(newMessages);

//     // Get chatbot response
//     const botResponse = getBotResponse(userInput);
//     setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
//     setUserInput(''); // Clear input field
//   };

//   const getBotResponse = (input) => {
//     // Simple rule-based responses
//     const responses = {
//       hello: 'Hi! How can I help you?',
//       name: "I'm your friendly chatbot!",
//       help: 'Sure! I am here to help you with your queries.',
//       default: "Sorry, I didn't understand that."
//     };

//     // Lowercase the input and find matching response
//     const lowerInput = input.toLowerCase();
//     if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
//       return responses.hello;
//     } else if (lowerInput.includes('name')) {
//       return responses.name;
//     } else if (lowerInput.includes('help')) {
//       return responses.help;
//     }
//     return responses.default;
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-4">
//         <div className="h-80 overflow-y-auto mb-4">
//           {messages.map((message, index) => (
//             <div key={index} className={`mb-2 text-sm ${message.sender === 'bot' ? 'text-left' : 'text-right'}`}>
//               <span
//                 className={`inline-block px-3 py-2 rounded-lg ${
//                   message.sender === 'bot'
//                     ? 'bg-gray-200 text-black'
//                     : 'bg-blue-500 text-white'
//                 }`}
//               >
//                 {message.text}
//               </span>
//             </div>
//           ))}
//         </div>
//         <div className="flex">
//           <input
//             type="text"
//             className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none"
//             placeholder="Type your message..."
//             value={userInput}
//             onChange={(e) => setUserInput(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//           />
//           <button
//             className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
//             onClick={handleSend}
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;




import React, { useState, useEffect } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Sure, I can provide a descriptive prompt for generating new images in the same style as the ones you provided. Here's a detailed description:",
    },
    {
      type: 'bot',
      text: `"Create a series of images that capture the minimalist and modern aesthetic of urban architecture. The images should feature clean lines, geometric shapes, and a soft pastel color palette..."`,
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Simulates typing indicator
  useEffect(() => {
    if (isTyping) {
      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
      }, 2000);
      return () => clearTimeout(typingTimeout);
    }
  }, [isTyping]);

  // Handle input submission
  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages((prev) => [
        ...prev,
        { type: 'user', text: inputMessage },
      ]);
      setInputMessage('');
      setIsTyping(true);
    }
  };

  // Handle "Enter" keypress to send message
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-blue-100 p-4">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-white shadow-sm">
          <div className="flex items-center space-x-3">
            <img src="logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
            <h1 className="text-xl font-semibold text-gray-800">SayHalo</h1>
          </div>
          <div>
            <img src="user-icon.png" alt="User Icon" className="w-8 h-8 rounded-full" />
          </div>
        </div>

        {/* Chat Window */}
        <div className="p-6 space-y-4 max-h-96 overflow-y-auto text-black bg-gradient-to-b from-white to-transparent">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.type === 'user' ? 'justify-end' : 'justify-start'
              } space-x-3`}
            >
              {message.type === 'bot' && (
                <img
                  src="bot-icon.png"
                  alt="Bot"
                  className="w-10 h-10 rounded-full shadow-md"
                />
              )}
              <div
                className={`${
                  message.type === 'bot'
                    ? 'bg-gray-100 text-left'
                    : 'bg-purple-500 text-right text-white'
                } p-4 rounded-lg max-w-lg shadow-md`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {/* Image Preview */}
          
        </div>

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex space-x-3 items-center px-6 py-4">
            <img src="bot-icon.png" alt="Bot" className="w-10 h-10 rounded-full shadow-md" />
            <p className="text-gray-500 italic">Typing...</p>
          </div>
        )}

        {/* Input Field */}
        <div className="flex items-center p-4 bg-black-100 rounded-b-lg">
          <input
            type="text"
            className="w-full p-3 border border-black-300 bg-gray-50 text-black rounded-full focus:outline-none focus:ring-2 focus:ring-black-200"
            placeholder="Ask SayHalo anything..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-purple-600"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
