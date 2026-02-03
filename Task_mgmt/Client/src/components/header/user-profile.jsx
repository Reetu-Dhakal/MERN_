import React from 'react';
import { useNavigate } from 'react-router';
const UserProfile = ({userInfo}) => {
    const navigate = useNavigate();
    //logout
    const logout = () => {
        localStorage.clear()
        navigate('/login',{replace:true})
    }

    // Handle case when userInfo is not available
    if(!userInfo) {
        return (
            <div className="flex items-center gap-2">
                <div className="h-12 aspect-square border border-gray-300 flex items-center justify-center rounded-3xl bg-gray-100">
                    <span className="text-gray-500">?</span>
                </div>
                <div>
                    <p className="text-lg text-gray-700 font-semibold">User</p>
                    <p onClick={logout} className="text-sm underline text-blue-600 cursor-pointer w-fit">log out</p>
                </div>
            </div>
        )
    }

    return (
        <div className="flex items-center gap-1">
            <div className="h-12 aspect-square border border-red-800 flex items-center justify-center rounded-3xl bg-red-100">
                <span className="font-bold text-xl text-gray-700">{userInfo?.first_name?.at(0)}{userInfo?.last_name?.at(0)}</span>

            </div>
            <div>
                <p className="text-lg text-gray-900 font-semibold">{userInfo?.first_name+ ' '+ userInfo?.last_name}</p>
                <p onClick={logout} className="text-sm underline text-blue-600 cursor-pointer w-fit">log out</p>
            </div>
        </div>
    );
}

export default UserProfile;