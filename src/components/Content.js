import React from 'react'

const Content = () => {
    const handlaName = () => {
        const names = ['John', 'Paul', 'George', 'Ringo'];
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
     }

     const handleClick = () => {
            alert('Hello, World!');
     };
  return (
    <main>
        <p>
    My name is {handlaName()}
    </p>
    <button onClick={handleClick}>Click me!</button>
    </main>
  )
}

export default Content