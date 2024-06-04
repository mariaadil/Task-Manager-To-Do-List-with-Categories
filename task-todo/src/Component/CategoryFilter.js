import React from 'react';

const CategoryFilter = ({ categories, filterTasks }) => {
  return (
    <div className="mb-4">
      <select
        onChange={(e) => filterTasks(e.target.value)}
        className="w-full px-3 py-2 border rounded"
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
