import { useRecoilState } from 'recoil';
import AddTodoButton from '../components/AddTodoButton';

import GreetingBox from '../components/GreetingBox';

import InfoPrompt from '../components/InfoPrompt';
import TodoItemCreator from '../components/TodoItemCreator';
import TodoList from '../components/TodoList';
import UpcomingTodos from '../components/UpcomingTodos';
import WelcomePage from '../components/WelcomePage';
import { visibleStateAtom } from '../recoil/atoms/visibleAtom';
import { todoListAtom } from '../recoil/atoms/todoListAtom';
import { useEffect } from 'react';

const HomePage = () => {
  const [visible, setVisible] = useRecoilState(visibleStateAtom);
  const [todoList] = useRecoilState(todoListAtom);

  let show;
  if (!visible) {
    show = 'flex';
  } else {
    show = 'none';
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(todoList));

    if (todoList.length > 0) {
      setVisible(false);
    }
  }, [todoList, setVisible]);
  return (
    <>
      <WelcomePage />

      <TodoItemCreator />
      <div
        className="py-8"
        style={{ display: `${show === 'flex' ? 'block' : 'none'}` }}
      >
        <GreetingBox />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <AddTodoButton />
            {todoList.length < 1 ? (
              <InfoPrompt  />
            ) : (
              <TodoList />
            )}
          </div>
          <div>
            <UpcomingTodos />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
