import React from 'react';
const UserProfile = () => {
    return (
        <div className="flex items-center gap-1">
            <div className="h-12 aspect-square border border-amber-600 flex items-center justify-center rounded-3xl bg-amber-200">
                <span className="font-bold text-xl text-gray-700">JD</span>

            </div>
            <div>
                <p className="text-lg text-gray-900 font-semibold">John Doe</p>
                <p className="text-sm underline text-blue-600 cursor-pointer w-fit">log out</p>
            </div>
        </div>
    );
}

export default UserProfile;