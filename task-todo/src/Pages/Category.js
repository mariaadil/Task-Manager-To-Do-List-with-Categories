import React, { useState } from 'react';

const Category = ({ categories, setCategories }) => {
  const [newCategoryName, setNewCategoryName] = useState('');

  const addCategory = () => {
    if (newCategoryName.trim() !== '' && !categories.includes(newCategoryName.trim())) {
      setCategories([...categories, newCategoryName.trim()]);
      setNewCategoryName('');
    }
  };

  const deleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  return (
    <div className="bg-white shadow p-4 rounded mb-4">
      <h2 className="text-xl font-bold mb-4">Manage Categories</h2>
      <input
        type="text"
        value={newCategoryName}
        onChange={(e) => setNewCategoryName(e.target.value)}
        placeholder="New Category Name"
        className="w-full px-3 py-2 border rounded mb-4"
      />
      <button onClick={addCategory} className="bg-blue-600 text-white px-4 py-2 rounded mb-4">
        Add Category
      </button>
      <ul>
        {categories.map((category, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            {category}
            <button onClick={() => deleteCategory(index)} className="text-red-600">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;