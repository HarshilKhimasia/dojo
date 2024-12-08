import { atom } from 'recoil';

interface Todo {
    title: string;
    dueDate: string | undefined;
    description: string | undefined;
    isComplete: boolean;
    id: string;
    completedDate?: string; // Optional completed date
  }
  const loadTodosFromLocalStorage = (): Todo[] => {
    const savedTodos = localStorage.getItem('items');
    return savedTodos ? JSON.parse(savedTodos) : [];
  };
  
  export const todoListAtom = atom<Todo[]>({
    key: 'todoListState', // Unique ID
    default: loadTodosFromLocalStorage(), // Load initial state from local storage
  });


