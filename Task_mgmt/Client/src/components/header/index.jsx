//nav bar
import { GoSearch } from 'react-icons/go';
import UserProfile from '../header/user-profile.jsx';
import React from 'react';
 const NavBar = () => {
    return (
        <main className="w-full border-b border-amber-100">
            <div className="mx-auto w-full max-w-5xl flex justify-between items-center px-6 py-4">
                {/* logo */}
                <div>
                    <p className="font-bold italic tracking-widest text-xl text-amber-300">Task App</p>
                </div>
                {/* search */}
                <div className="flex items-center w-80 border border-gray-300 rounded-md px-3 py-1 gap-2">
                    <input
                    className="w-full outline-none text-sm text-gray-600"
                    placeholder="Search..."
                    />
                    {/* search icon:react-icons */}
                    <GoSearch className="text-gray-600 text-lg" />
                </div>
                {/* user profile */}
                <UserProfile />
            </div>
        </main>
    );};

export default NavBar;