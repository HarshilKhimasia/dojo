import { useRecoilState } from 'recoil';
import logoOnly from './../../assets/images/logoOnly.png';
import { visibleStateAtom } from '../recoil/atoms/visibleAtom';
import { useState } from 'react';

export function WelcomePage() {
  const [visible, setVisible] = useRecoilState(visibleStateAtom);

  let show;
  if (visible) {
    show = 'flex';
  } else {
    show = 'none';
  }
  const defClass = 'def-welcome';
  const defImage = 'def-img mainImg';
  const [defWelcome, setDefWelcome] = useState(defClass);
  const [defImg, setDefImg] = useState(defImage);
  const changeVisible = (): void => {
    const afterClass = 'after-welcome';
    setDefWelcome((prevState) => (prevState = afterClass));
    const afterImage = 'after-img mainImg';
    setDefImg((prevState) => (prevState = afterImage));
    setTimeout(() => {
      setVisible((prevState) => !prevState);
    }, 900);
  };
  return (
    <div className="welcome-page" style={{ display: show }}>
      <img src={logoOnly} alt="Official Logo of Dojo" className={`${defImg}`} />
      <div
        className={`${defWelcome}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1 className="heading text-4xl text-center mb-3">
          Welcome to <span className="text-accent">DOJO</span> - A Todo App
        </h1>
        <p className="text-[18px] font-[400]">Your productivity partner.</p>
        <button className="btn welcome-btn" onClick={changeVisible}>
          Let's Start
        </button>
        <p className="text-center">
          Created by <b>Harshil Khimasia - Freelance Web Developer&trade;</b>.
          For more information, visit our{' '}
          <a
            href="https://harshilkhimasia.com/"
            target="_blank"
            rel="noreferrer"
            className="highlighted-link"
          >
            official website
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default WelcomePage;
