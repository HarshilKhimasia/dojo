import logoWhite from './../../assets/images/logoWhite.png';
import logo from './../../assets/images/logo.png';
import homeIcon from './../../assets/images/home.svg';
import policyIcon from './../../assets/images/policy.svg';
import termsConditions from './../../assets/images/terms-and-conditions-icon.svg';
import menuOpen from './../../assets/images/menu-open.svg';
import { useRecoilState, useRecoilValue } from 'recoil';
import { headerVisibleAtom } from '../recoil/atoms/headerVisible';
import { useRef, useEffect } from 'react';
import { visibleStateAtom } from '../recoil/atoms/visibleAtom';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const [isVisible, setIsVisible] = useRecoilState(headerVisibleAtom);
  const visible = useRecoilValue(visibleStateAtom);
  const buttonRef = useRef<HTMLButtonElement>(null); // Ref for the button
  const headerRef = useRef<HTMLElement>(null); // Ref for the header

  const clickButtonVisible = (): void => {
    setIsVisible(!isVisible); // Toggle visibility on button click
  };

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      // Check if click is outside both button and header
      if (
        buttonRef.current &&
        headerRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsVisible(true); // Set visible when clicking outside the button and header
      }
    };

    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, [setIsVisible]);

  return (
    <>
      <div
        className={`logoBlock ${
          !visible || !isActive('/') ? 'relative' : 'fixed'
        }`}
      >
        <button
          className="navButton"
          type="button"
          onClick={clickButtonVisible}
          ref={buttonRef}
        >
          <img src={menuOpen} alt="menuOpen" />
        </button>
        <Link to="/">
          <div>
            <img src={logo} alt="logo" width={75} />
          </div>
        </Link>
      </div>
      <header
        ref={headerRef}
        className={isVisible ? `mainNav` : `slideAnimeBefore`}
      >
        <nav>
          <ul>
            <Link to="/">
              <li className="mb-5">
                <img src={logoWhite} alt="logoOnly" />
              </li>
            </Link>
            <Link to="/">
              <li className={`nav-list ${isActive('/') ? 'active' : ''}`}>
                <img src={homeIcon} alt="home" />
              </li>
            </Link>
            <Link to="/privacy-policy">
              <li
                className={`nav-list ${
                  isActive('/privacy-policy') ? 'active' : ''
                }`}
              >
                <img src={policyIcon} alt="policy" />
              </li>
            </Link>
            <Link to="/terms-and-conditions">
              <li
                className={`nav-list ${
                  isActive('/terms-and-conditions') ? 'active' : ''
                }`}
              >
                <img
                  src={termsConditions}
                  alt="terms-and-conditions"
                  width={17}
                />
              </li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
