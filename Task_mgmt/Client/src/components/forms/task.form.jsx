import React from 'react';
import { TbAsterisk } from 'react-icons/tb';
import { IoMdClose } from 'react-icons/io';

const AddEditTask = ({ onClose }) => {
    return (
        <div className="bg-pink-100 rounded-lg shadow-xl w-full p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-slate-900">Add Task</h2>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition"
                >
                    <IoMdClose size={24} />
                </button>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4">
                {/* Task Title */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                        <label htmlFor="taskTitle" className="text-sm font-semibold text-slate-700">
                            Title
                        </label>
                        <TbAsterisk size={10} className="text-red-500" />
                    </div>
                    <input
                        name="title"
                        placeholder="Task Title"
                        className="py-2.5 px-3.5 rounded-md border border-gray-300 bg-slate-50 text-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                        <label htmlFor="content" className="text-sm font-semibold text-slate-700">
                            Content
                        </label>
                        <TbAsterisk size={10} className="text-red-500" />
                    </div>
                    <textarea
                        name="title"
                        id="content"
                        rows="3"
                        placeholder="Task Description"
                        className="py-2.5 px-3.5 rounded-md border border-gray-300 bg-slate-50 text-slate-950 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                    />
                </div>

                {/* Priority */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-1">
                        <label htmlFor="priority" className="text-sm font-semibold text-slate-700">
                            Priority
                        </label>
                        <TbAsterisk size={10} className="text-red-500" />
                    </div>
                    <select
                        defaultValue="low"
                        name="priority"
                        id="priority"
                        className="py-2.5 px-3.5 rounded-md border border-gray-300 bg-slate-50 text-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition cursor-pointer"
                    >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 bg-red-200 text-gray-900 font-semibold py-2.5 px-4 rounded-md hover:bg-red-300 transition"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="flex-1 bg-pink-500 text-pink-400 font-semibold py-2.5 px-4 rounded-md hover:bg-pink-600 transition shadow-sm"
                    >
                        Add Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddEditTask;
