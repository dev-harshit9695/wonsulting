import React, { useState } from 'react';
import { 
  Home, 
  FileText, 
  Users, 
  Briefcase, 
  BarChart2, 
  MessageSquare, 
  BookOpen, 
  HelpCircle, 
  Settings,
  ChevronRight
} from 'lucide-react';
import logoImage from '../assets/college2career-logo.png';

const SidebarItem = ({ icon: Icon, text, active, notifications, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li 
      onClick={onClick}
      className={`
        relative flex items-center p-3 my-2 rounded-xl transition-all duration-300 cursor-pointer
        ${active 
          ? 'bg-gradient-to-r from-indigo-600/90 to-violet-400/90 text-white shadow-lg shadow-violet-500/30' 
          : 'text-gray-600 hover:bg-white/80'
        }
        ${isHovered ? 'translate-x-2' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center w-full">
        <div className={`
          relative flex items-center justify-center w-10 h-10 rounded-lg
          ${active ? 'bg-white/20' : 'bg-violet-50'}
        `}>
          <Icon className={`w-5 h-5 ${active ? 'text-white' : 'text-violet-600'}`} />
          {notifications > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink-500 text-white rounded-full text-xs flex items-center justify-center animate-pulse">
              {notifications}
            </span>
          )}
        </div>
        <span className="ml-3 font-medium">{text}</span>
      </div>
      <ChevronRight className={`
        absolute right-3 w-4 h-4 transition-all duration-300
        ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}
        ${active ? 'text-white' : 'text-violet-600'}
      `}/>
    </li>
  );
};

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const menuItems = [
    { icon: Home, text: 'Home', notifications: 0 },
    { icon: FileText, text: 'ResumAI', notifications: 3 },
    { icon: FileText, text: 'CoverLetterAI', notifications: 0 },
    { icon: Users, text: 'NetworkAI', notifications: 5 },
    { icon: Briefcase, text: 'JobBoardAI', notifications: 0 },
    { icon: BarChart2, text: 'JobTrackerAI', notifications: 2 },
    { icon: MessageSquare, text: 'InterviewAI', notifications: 0 },
    { icon: BookOpen, text: 'Career Coaching', notifications: 0 },
    { icon: BookOpen, text: 'Learning Hub', notifications: 1 },
    { icon: HelpCircle, text: 'Help', notifications: 0 },
    { icon: Settings, text: 'Settings', notifications: 0 }
  ];

  return (
    <div className="relative w-72 h-screen overflow-hidden bg-gradient-to-b from-violet-50 via-white to-violet-50">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-indigo-500/5 to-purple-500/5 backdrop-blur-sm" />
      
      <div className="relative flex flex-col h-full z-10">
        {/* Logo section with subtle glow effect */}
        <div className="p-6 flex-shrink-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300" />
            <div className="relative p-4 rounded-lg">
              <img 
                src={logoImage} 
                alt="College2Career Logo" 
                className="w-full h-auto max-h-12 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Navigation section */}
        <nav className="flex-grow overflow-y-auto scrollbar-thin scrollbar-track-violet-100 scrollbar-thumb-violet-400 px-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.text}
                icon={item.icon}
                text={item.text}
                active={activeTab === item.text}
                notifications={item.notifications}
                onClick={() => setActiveTab(item.text)}
              />
            ))}
          </ul>
        </nav>

        {/* Progress section */}
        <div className="p-6 flex-shrink-0">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-400 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300" />
            <div className="relative bg-white/80 p-4 rounded-xl backdrop-blur-sm border border-violet-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Career Progress</span>
                <span className="text-xs font-bold text-violet-600">Level 1</span>
              </div>
              <div className="relative h-2 bg-violet-100 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-violet-500 to-indigo-400 rounded-full" />
                <div className="absolute top-0 left-[25%] h-full w-1 bg-white/50 rounded-full animate-pulse" />
              </div>
              <p className="mt-2 text-xs text-gray-500">Current focus: ResumAI</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;