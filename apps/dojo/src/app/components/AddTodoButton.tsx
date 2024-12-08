import { useRecoilState } from 'recoil';
import addButton from './../../assets/images/add-circle.svg';
import { modalVisibleAtom } from '../recoil/atoms/modalVisibleAtom';

export function AddTodoButton() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setModalVisible] = useRecoilState(modalVisibleAtom);
  const openModal = () => {
    setModalVisible((prevState) => !prevState);
  };
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-[500]">To-dos</h2>
      <div className="flex items-center">
        <button type="button" onClick={openModal}>
          {/* <img src={addButton} alt="add button" width={40} /> */}
          <div className="add-button">
            <span className="plus">
              <img src={addButton} alt="add button" width={28} />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}

export default AddTodoButton;
