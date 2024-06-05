import React from 'react';
import CategoryFilter from './CategoryFilter';

const ViewTasks = ({ tasks, deleteTask, shareTask, categories, filterTasks }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <CategoryFilter categories={categories} filterTasks={filterTasks} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {tasks && tasks.length > 0 ? (
          tasks.map(task => (
            <div key={task.id} className="bg-white shadow-md rounded-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
                <p className="text-gray-600 mb-4">{task.description}</p>
                <span className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mb-2">{task.category}</span>
              </div>
              <div className="flex justify-between items-center px-6 py-4 bg-gray-100">
                {deleteTask && (
                  <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700 focus:outline-none">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                )}
                {shareTask && (
                  <button onClick={() => shareTask(task)} className="text-blue-500 hover:text-blue-700 focus:outline-none">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-lg">No tasks available</p>
        )}
      </div>
    </div>
  );
};

export default ViewTasks;
