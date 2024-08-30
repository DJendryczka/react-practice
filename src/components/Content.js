import React from 'react'

const Content = () => {
    const handlaName = () => {
        const names = ['John', 'Paul', 'George', 'Ringo'];
        const randomIndex = Math.floor(Math.random() * names.length);
        return names[randomIndex];
     }
  return (
    <main>
        <p>
    My name is {handlaName()}
    </p>
    </main>
  )
}

export default Content