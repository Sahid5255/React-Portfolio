import React from 'react'

export default function Sidebar({setIsOpen}) {
  return (
    <div className='Sidebar'>
        <h2 onClick= {() => setIsOpen(false)}>❌</h2>
          <ul>
            <li>Portfolio</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </div>
  )
}
