import { useEffect } from 'react';

function HelloMessage() {

  useEffect(() => {
    console.log('Hello from useEffect!');
  }, []);

  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
}

export default HelloMessage;
