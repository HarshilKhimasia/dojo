import { useRecoilState } from 'recoil';
import { modalVisibleAtom } from '../recoil/atoms/modalVisibleAtom';
import { todoListAtom } from '../recoil/atoms/todoListAtom';
import { SetStateAction, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function TodoItemCreator() {
  const [modalVisible, setModalVisible] = useRecoilState(modalVisibleAtom);

  const openModal = () => {
    if (
      (inputValue && inputDescriptionValue && inputDateValues) ||
      (inputValue && inputDescriptionValue) ||
      inputValue
    ) {
      setModalVisible((prevState) => !prevState);
      addTodoItem();
    }
  };
  const closeModal = () => {
    setModalVisible((prevState) => !prevState);
    setInputValue('');
    setInputDescriptionValue('');
    setInputDateValues('');
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setTodoList] = useRecoilState(todoListAtom);
  const [inputValue, setInputValue] = useState('');
  const [inputDescriptionValue, setInputDescriptionValue] = useState('');
  const [inputDateValues, setInputDateValues] = useState('');
  const onChange = (event: { target: { value: SetStateAction<string> } }) => {
    setInputValue(event.target.value);
  };
  const onDescriptionChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputDescriptionValue(event.target.value);
  };

  const handleDateChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputDateValues(event.target.value);
  };

  const addTodoItem = () => {
    if (
      (inputValue && inputDescriptionValue && inputDateValues) ||
      (inputValue && inputDescriptionValue) ||
      inputValue
    ) {
      const newTodoItem = {
        title: inputValue,
        dueDate: inputDateValues ? inputDateValues : undefined,
        description: inputDescriptionValue ? inputDescriptionValue : undefined,
        isComplete: false,
        id: uuidv4(),
      };

      // Update the todoList by unshifting the new item
      setTodoList((prevTodoList) => {
        const updatedList = [...prevTodoList]; // Create a copy of the previous list
        updatedList.unshift(newTodoItem); // Add the new item to the front
        return updatedList; // Return the updated list
      });
      setInputValue('');
      setInputDescriptionValue('');
      setInputDateValues('');
    }
  };
  return (
    <div className={`modalOverlay ${modalVisible ? 'block' : 'hidden'}`}>
      <div className="todoModal p-10 w-full md:w-[90%] lg:w-[550px]">
        <h2 className="pb-1 mb-7 text-[32px] border-b-[1px] border-black inline-block">
          Add To-do
        </h2>
        <div>
          <div className="mb-5">
            <label htmlFor="title" className="text-[22px]">
              Title
            </label>
            <br></br>
            <input
              type="text"
              name="title"
              id="title"
              maxLength={60}
              value={inputValue}
              onChange={onChange}
              className="border-solid border-[1.5px] border-slate-300 rounded-xl w-full p-2"
            />
            <p
              className={`flex justify-end ${
                inputValue.length > 0 ? 'visible' : 'invisible'
              }`}
            >
              {60 - inputValue.length} characters remaining
            </p>
          </div>
          <div className="mb-5">
            <label htmlFor="dueDate" className="text-[22px]">
              Due Date (Optional)
            </label>
            <br></br>
            <input
              type="date"
              name="dueDate"
              value={inputDateValues}
              onChange={handleDateChange}
              onFocus={(e) => e.target.showPicker()}
              id="dueDate"
              className="border-solid border-[1.5px] border-slate-300 rounded-xl w-full p-2"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="description" className="text-[22px]">
              Description (Optional)
            </label>
            <br></br>
            <textarea
              name="description"
              id="description"
              value={inputDescriptionValue}
              onChange={onDescriptionChange}
              maxLength={500}
              className="border-solid border-[1.5px] border-slate-300 rounded-xl w-full p-2 min-h-[150px] resize-none focus:outline-none focus:border-black focus:border-[2px]"
            ></textarea>
            <p
              className={`flex justify-end ${
                inputDescriptionValue.length > 0 ? 'visible' : 'invisible'
              }`}
            >
              {500 - inputDescriptionValue.length} characters remaining
            </p>
          </div>
        </div>
        <button type="button" className="btn float-end" onClick={openModal}>
          Confirm
        </button>
        <button
          type="button"
          className="outline-btn float-start"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default TodoItemCreator;
