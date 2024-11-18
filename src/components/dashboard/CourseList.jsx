import React from 'react';
import { ArrowRight, Clock, Book } from 'lucide-react';

const CourseList = ({ courses = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {courses.map((course, index) => (
        <div key={index} className="bg-zinc-100 rounded-lg shadow-md overflow-hidden flex flex-col h-full">
          <div className="h-48 bg-gray-200">
            <img
              src={`/api/placeholder/400/200`}
              alt={course.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-2">
              <span className={`px-3 py-1 rounded-full text-sm ${
                course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {course.level}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock size={16} className="mr-1" />
                <span>{course.duration}</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-red-900">{course.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
            
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center text-gray-500">
                <Book size={16} className="mr-1" />
                <span className="text-sm">{course.lessons} lessons</span>
              </div>
              <button className="flex items-center bg-red-900 text-white px-4 py-2 rounded hover:bg-red-950">
                Start Learning
                <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;