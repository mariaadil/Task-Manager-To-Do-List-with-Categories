// ToDoList.js
import React, { useState, useEffect } from 'react';
import ToDoItem from './ToDoItem';
import { db } from '../Firebase/Firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const ToDoList = () => {
  const [realtimeTasks, setRealtimeTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'tasks'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const updatedTasks = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRealtimeTasks(updatedTasks);
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching tasks:', error);
        setError('Failed to load tasks. Please try again.');
        setLoading(false);
      }
    );
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {loading ? (
        <p className="text-center mt-4 text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center mt-4 text-red-500">{error}</p>
      ) : (
        realtimeTasks.map((task) => <ToDoItem key={task.id} task={task} />)
      )}
    </div>
  );
};

export default ToDoList;
