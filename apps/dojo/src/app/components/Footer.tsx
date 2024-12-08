import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    // Get the height of the document and the viewport
    const documentHeight = document.body.offsetHeight;
    const windowHeight = window.innerHeight;

    // Check if the user has scrolled to the bottom or if the content is short
    const isAtBottom = window.scrollY + windowHeight >= documentHeight;
    const isContentShort = documentHeight <= windowHeight + 1;

    // Show the footer if either condition is met
    setIsFixed(isAtBottom || isContentShort);
  };

  useEffect(() => {
    handleScroll(); // Check on mount to set initial state

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <footer
      className={`bg-[#2f4f4f] text-[#f5f5f5] py-2 w-full transition-transform duration-300 ease-in-out ${
        isFixed
          ? 'fixed bottom-0 left-0 transform translate-y-0'
          : 'fixed bottom-0 left-0 transform translate-y-full'
      }`}
    >
      <div className="container mx-auto text-center flex justify-center lg:justify-between items-center flex-col-reverse lg:flex-row">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Harshil Khimasia - Freelance Web
          Developer
        </p>
        <div className="flex space-x-4">
          <Link
            to={'/privacy-policy'}
            className="text-[#f5f5f5] hover:text-[#f5f5f5] transition duration-300 text-sm"
          >
            Privacy Policy
          </Link>
          <span className="text-[#f5f5f5]">|</span>
          <Link
            to={'/terms-and-conditions'}
            className="text-[#f5f5f5] hover:text-[#f5f5f5] transition duration-300 text-sm"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
