import React from 'react';

const CategoryFilter = ({ categories, filterTasks }) => {
  // Add a guard clause to handle the case where categories is undefined
  if (!categories) {
    return null;
  }

  return (
    <div className="mb-4">
      <select
        onChange={(e) => filterTasks(e.target.value)}
        className="w-full px-3 py-2 border rounded bg-white text-gray-800 shadow-sm focus:outline-none focus:border-blue-500"
      >
        {categories.map((category, index) => (
          <option key={index} value={category} className="py-1">
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
