import React from 'react'
import { BsFillPinAngleFill } from 'react-icons/bs'
import { FaTrash } from 'react-icons/fa6'
import { FaEdit } from 'react-icons/fa'
const Card = () => {
    return (
        <div className="border border-gray-300 bg-slate-50 py-2 px-3 rounded-md shadow flex flex-col gap-2 max-w-sm border-l-4 border-l-red-800">
            <div className="flex justify-between items-center">
                <p className="text-xs font-semibold text-gray-500">Task</p>
                {/* Pin */}
                <BsFillPinAngleFill  size={16} className="text-gray-600" />
            </div>
            {/*Priority*/}
            <div>
                <p className="bg-red-800 w-25 rounded-md text-center text-white font-bold text-sm py-0.5">High</p>
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-sm font-bold">Task Title</p>
                {/* Task Description */}
                <p className="text-xs text-gray-600 line-clamp-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                {/* buttons */}
                <div className="flex justify-end gap-3 mt-2">
                    {/* Edit button */}
                    <FaEdit title="Edit Task" className="text-sm text-blue-500 cursor-pointer" />
                    {/* Delete button */}
                    <FaTrash title="Delete Task" className="text-sm text-red-700 cursor-pointer" />
                </div>
            </div>
        </div>
    );
}
export default Card;