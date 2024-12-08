import { useRecoilState } from 'recoil';
import { todoListAtom } from '../recoil/atoms/todoListAtom';
import { Tooltip } from 'react-tooltip';
import { useState } from 'react';
import deleteIcon from './../../assets/images/delete.svg';
import arrowUp from './../../assets/images/arrowUp.svg';
import arrowDown from './../../assets/images/arrow-down.svg';
import arrowUpGreen from './../../assets/images/arrowUp-green.svg';
import arrowDownGreen from './../../assets/images/arrow-down-green.svg';
import InfoPrompt from './InfoPrompt';

export function TodoList() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => setShowAll((prev) => !prev);
  const [completedShowAll, setCompletedShowAll] = useState(false);

  const toggleCompletedShowAll = () => setCompletedShowAll((prev) => !prev);
  const [todoList, setTodoList] = useRecoilState(todoListAtom);

  const completedTodoArr = todoList.filter((el) => el.isComplete);
  const pendingTodoArr = todoList.filter((el) => !el.isComplete);
  const handleCheckboxChange = (id: string) => {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }; // Correctly typed options
    const textDate = currentDate.toLocaleString('en-US', options);
    setTodoList((prevList) =>
      prevList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isComplete: !item.isComplete,
            completedDate: item.isComplete ? undefined : textDate, // Set date if completing the task
          };
        }
        return item; // Return the item unchanged if the id does not match
      })
    );
  };

  const handleDelete = (id: string) => {
    setTodoList((prevList) => prevList.filter((el) => el.id !== id));
  };

  return (
    <>
      <ul>
        {(showAll ? pendingTodoArr : pendingTodoArr.slice(0, 4)).map((el) => (
          <li
            className="relative border-solid border-[1.5px] border-slate-300 rounded-xl p-6 lg:ps-0 mb-2 gridLi bg-[#f2f2f2]"
            key={el.id}
          >
            <div className="checkbox-container order-2 md:order-1">
              <input
                type="checkbox"
                id={`checkbox-${el.id}`} // Unique ID for each checkbox
                className="checkbox"
                checked={el.isComplete}
                onChange={() => handleCheckboxChange(el.id)} // Pass the id
              />
              {pendingTodoArr.length >= 0 && completedTodoArr.length < 1 ? (
                <Tooltip id="my-tooltip" />
              ) : undefined}
              <label
                htmlFor={`checkbox-${el.id}`}
                className="checkbox-label w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Click here for Marking as Done"
              >
                <svg className="checkmark" viewBox="0 0 24 24">
                  <path d="M6 12l4 4L18 6" />
                </svg>
              </label>
              <p className="ms-2.5 block md:hidden">
                {el.isComplete
                  ? `Completed on ${el.completedDate}`
                  : el.dueDate
                  ? `Due by: ${el.dueDate}`
                  : ``}
              </p>
            </div>

            <div className="flex justify-center flex-col order-1 md:order-2">
              <div>
                <h4
                  className={`text-xl font-[500] ${
                    el.description ? 'mb-2' : 'mb-0'
                  }`}
                >
                  {el.title}
                </h4>
              </div>
              {el.description ? (
                <div key={el.id}>
                  <p>
                    {expandedId === el.id || el.description.length <= 160
                      ? el.description
                      : `${el.description.substring(0, 160)}...`}
                    {el.description.length > 160 && (
                      <span
                        onClick={() => toggleExpand(el.id)}
                        className="read-more"
                        style={{ color: 'blue', cursor: 'pointer' }}
                      >
                        {expandedId === el.id ? ' Show less' : ' Read more'}
                      </span>
                    )}
                  </p>
                </div>
              ) : (
                <span className="hidden"></span>
              )}

              <p className="mt-2.5 hidden md:block">
                {el.isComplete
                  ? `Completed on ${el.completedDate}`
                  : el.dueDate
                  ? `Due by: ${el.dueDate}`
                  : ``}
              </p>
            </div>
            <div className="order-3 md:order-3 deletCol">
              <button
                type="button"
                onClick={() => handleDelete(el.id)}
                className="text-red-600 hover:underline float-end"
              >
                <img src={deleteIcon} alt="deleteIcon" />
              </button>
            </div>
          </li>
        ))}

        {pendingTodoArr.length > 4 && (
          <button
            type="button"
            className="outline-btn flex"
            onClick={toggleShowAll}
          >
            <span>
              {showAll
                ? 'Show Less'
                : `Show More (${pendingTodoArr.length - 4})`}
            </span>{' '}
            {showAll ? (
              <img src={arrowUp} alt="arrowUp" />
            ) : (
              <img src={arrowDown} alt="arrowDown" />
            )}
          </button>
        )}
      </ul>
      {completedTodoArr.length > 0 && pendingTodoArr.length < 1 ? (
        <InfoPrompt />
      ) : undefined}
      <ul>
        {completedTodoArr.length > 0 && (
          <button
            type="button"
            className="outline-btn completedOutlineBtn"
            onClick={toggleCompletedShowAll}
          >
            <span>
              {!completedShowAll
                ? `Show Completed (${completedTodoArr.length})`
                : 'Hide Completed'}
            </span>{' '}
            {completedShowAll ? (
              <img src={arrowUpGreen} alt="arrowUp" />
            ) : (
              <img src={arrowDownGreen} alt="arrowDown" />
            )}
          </button>
        )}

        {(completedShowAll
          ? completedTodoArr
          : completedTodoArr.slice(0, 0)
        ).map((el) => (
          <li
            className="relative border-solid border-[1.5px] border-slate-300 rounded-xl p-6 lg:ps-0 mb-2 gridLi bg-[#d4edda]"
            key={el.id}
          >
            <div className="checkbox-container order-2 md:order-1">
              <input
                type="checkbox"
                id={`checkbox-${el.id}`} // Unique ID for each checkbox
                className="checkbox"
                checked={el.isComplete}
                onChange={() => handleCheckboxChange(el.id)} // Pass the id
              />
              <label
                htmlFor={`checkbox-${el.id}`}
                className="checkbox-label w-[40px] h-[40px] md:w-[60px] md:h-[60px]"
              >
                <svg className="checkmark" viewBox="0 0 24 24">
                  <path d="M6 12l4 4L18 6" />
                </svg>
              </label>
              <p className="ms-2.5 block md:hidden">
                {el.isComplete
                  ? `Completed on ${el.completedDate}`
                  : el.dueDate
                  ? `Due by: ${el.dueDate}`
                  : ``}
              </p>
            </div>

            <div className="flex justify-center flex-col order-1 md:order-2">
              <div>
                <h4
                  className={`text-xl font-[500] ${
                    el.description ? 'mb-2' : 'mb-0'
                  }`}
                >
                  {el.title}
                </h4>
              </div>
              {el.description ? (
                <div key={el.id}>
                  <p>
                    {expandedId === el.id || el.description.length <= 160
                      ? el.description
                      : `${el.description.substring(0, 160)}...`}
                    {el.description.length > 160 && (
                      <span
                        onClick={() => toggleExpand(el.id)}
                        className="read-more"
                        style={{ color: 'blue', cursor: 'pointer' }}
                      >
                        {expandedId === el.id ? ' Show less' : ' Read more'}
                      </span>
                    )}
                  </p>
                </div>
              ) : (
                <span className="hidden"></span>
              )}

              <p className="mt-2.5 hidden md:block">
                {el.isComplete
                  ? `Completed on ${el.completedDate}`
                  : el.dueDate
                  ? `Due by: ${el.dueDate}`
                  : ``}
              </p>
            </div>
            <div className="order-3 md:order-3 deletCol">
              <button
                type="button"
                onClick={() => handleDelete(el.id)}
                className="text-red-600 hover:underline float-end"
              >
                <img src={deleteIcon} alt="deleteIcon" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
