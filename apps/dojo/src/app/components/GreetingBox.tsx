import { useEffect, useState } from 'react';

export function GreetingBox() {
  const [greetingHeadingState, setGreetingHeadingState] = useState('Loading..');
  const [greetingTextState, setGreetingTextState] = useState('Loading..');
  useEffect(() => {
    const currentDateTime = new Date();
    const hour = currentDateTime.getHours();

    if (hour >= 6 && hour < 9) {
      setGreetingHeadingState('Good Morning!');
      setGreetingTextState('Let’s make today productive!');
    } else if (hour >= 9 && hour < 12) {
      setGreetingHeadingState('Late Morning!');
      setGreetingTextState('Keep going, you’re doing great!');
    } else if (hour >= 12 && hour < 15) {
      setGreetingHeadingState('Good Afternoon!');
      setGreetingTextState('Let’s power through the rest of the day!');
    } else if (hour >= 15 && hour < 18) {
      setGreetingHeadingState('Good Evening!');
      setGreetingTextState('Almost there—finish strong!');
    } else if (hour >= 18 && hour < 24) {
      setGreetingHeadingState('Evening Hustler!');
      setGreetingTextState('Perfect time to wrap up those last tasks!');
    } else if (hour >= 0 && hour < 3) {
      setGreetingHeadingState('Night Owl!');
      setGreetingTextState('Late work? Let’s get it done together!');
    } else if (hour >= 3 && hour < 6) {
      setGreetingHeadingState('Hello!');
      setGreetingTextState("Let's tackle your tasks together!");
    }
  }, []);
  return (
    <div className="bg-[#2f4f4f] rounded-xl p-6 mb-6">
      <h2 className="text-4xl font-[500] text-white">{greetingHeadingState}</h2>
      <p className="text-white">{greetingTextState}</p>
    </div>
  );
}

export default GreetingBox;
