import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-5 p-5'>
            <img src="@/public/hero.png" alt='logo' className='cursor-pointer'/>
            <button type='submit' className='nav-btn'>Sign In</button>
        </div>
    )
}

export default Navbar