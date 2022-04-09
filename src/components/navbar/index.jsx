import React from 'react'

const NavBar = () => {
  return (
    <nav className="pb-8 border-b-[1px] border-gray-400 px-4 sm:px-0">
      <div className="flex justify-between h-12 w-full max-w-4xl m-auto pt-5">
        <div className="font-extrabold text-3xl">M.</div>
        <div className=" border-r">
          <input type="text" className="bg-gray-300 w-52 h-8 rounded pl-5" placeholder='Search...' />
        </div>
        <div>Cart</div>
      </div>
    </nav>
  );
}

export default NavBar