/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useRecoilState } from 'recoil';
import { todoListAtom } from '../recoil/atoms/todoListAtom';

export function UpcomingTodos() {
  const [todoList] = useRecoilState(todoListAtom);

  const pendingTodoArr = todoList.filter((el) => !el.isComplete);

  const calculateTimeLeft = (dueDate: string): string => {
    const today = new Date();
    const due = new Date(dueDate);
    const timeDiff = due.getTime() - today.getTime();

    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    const monthsLeft = Math.floor(daysLeft / 30);
    const remainingDays = daysLeft % 30;

    if (daysLeft < 0) {
      return 'Due date has passed';
    } else if (monthsLeft > 0) {
      return `${monthsLeft} month${
        monthsLeft > 1 ? 's' : ''
      } ${remainingDays} day${remainingDays > 1 ? 's' : ''}`;
    } else {
      return `${remainingDays} day${remainingDays > 1 ? 's' : ''}`;
    }
  };

  const filteredTodos = pendingTodoArr.filter(
    (todo) => todo.dueDate !== undefined
  );

  // Sort by due date and limit to the first 5
  const sortedTodos = filteredTodos
    .sort(
      (a, b) => new Date(a.dueDate!).getTime() - new Date(b.dueDate!).getTime()
    )
    .slice(0, 5);
  return (
    <div className="border-solid border-[1.5px] border-slate-300 rounded-xl p-6">
      <div>
        <h2 className="text-xl font-[500] mb-5">Upcoming To-dos</h2>
        <ul>
          {sortedTodos.length === 0 && todoList.length !== 0 ? (
            <li className="mb-3">
              <p>You’re all caught up! No tasks are due soon.</p>
            </li>
          ) : todoList.length === 0 ? (
            <li className="mb-3">
              <p>No tasks added yet.</p>
            </li>
          ) : (
            sortedTodos.map((todo) => (
              <li key={todo.id} className="mb-3">
                <p className="bg-[#efefef] px-[15px] py-[10px]">
                  <strong>{todo.title}</strong> is due in -{' '}
                  {calculateTimeLeft(todo.dueDate!)}.
                </p>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default UpcomingTodos;
